import { AfterViewInit, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import * as L from 'leaflet';
import { categories } from 'shared';

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule],
  templateUrl: './submission.html',
})
export class SubmissionPage implements AfterViewInit {
  private readonly mapHost = viewChild.required<ElementRef<HTMLDivElement>>('mapHost');
  private readonly destroy = inject(DestroyRef);
  private map?: L.Map;
  private marker?: L.CircleMarker;
  readonly categories = categories;
  readonly category = inject(ActivatedRoute).snapshot.queryParamMap.get('categorie');
  readonly location = signal<L.LatLng | null>(null);
  readonly previews = signal<{ name: string; url: string }[]>([]);
  readonly fileMessage = signal('');
  readonly mapMessage = signal('');
  readonly feedback = signal('');

  ngAfterViewInit(): void {
    this.map = L.map(this.mapHost().nativeElement, { scrollWheelZoom: false }).setView([33.5731, -7.5898], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).on('tileerror', () => this.mapMessage.set('Fond de carte indisponible. Vous pouvez choisir le centre affiché.')).addTo(this.map);
    this.map.on('click', (event: L.LeafletMouseEvent) => this.selectLocation(event.latlng));
    this.destroy.onDestroy(() => {
      this.map?.remove();
      for (const pic of this.previews()) URL.revokeObjectURL(pic.url);
    });
  }

  selectCenter(): void {
    if (this.map) this.selectLocation(this.map.getCenter());
  }

  private selectLocation(point: L.LatLng): void {
    if (!this.map) return;
    this.marker?.remove();
    this.marker = L.circleMarker(point, { radius: 9, color: '#fff', weight: 3, fillColor: '#087d73', fillOpacity: 1 }).addTo(this.map);
    this.location.set(point);
  }

  selectImages(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = '';
    if (this.previews().length + files.length > 5 || files.some(file => !['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024)) {
      this.fileMessage.set('Choisissez au maximum 5 images JPG, PNG ou WebP de 5 Mo chacune.');
      return;
    }
    this.fileMessage.set('');
    this.previews.update(current => [...current, ...files.map(file => ({ name: file.name, url: URL.createObjectURL(file) }))]);
  }

  removeImage(url: string): void {
    URL.revokeObjectURL(url);
    this.previews.update(current => current.filter(pic => pic.url !== url));
    this.fileMessage.set('');
  }

  submit(event: Event): void {
    event.preventDefault();
    if (!this.previews().length || !this.location()) {
      this.feedback.set('Ajoutez une photo et sélectionnez un emplacement.');
      return;
    }
    this.feedback.set('Aperçu terminé. Le formulaire est en mode démonstration.');
  }
}
