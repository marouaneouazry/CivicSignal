import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { categories } from 'shared';

@Component({
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './home.html',
})
export class HomePage {
  readonly categories = categories;
  readonly steps = [
    { icon: 'photo_camera', title: 'Décrivez le problème', text: 'Ajoutez des photos et quelques mots pour expliquer ce que vous avez observé.' },
    { icon: 'pin_drop', title: 'Situez le signalement', text: 'Placez un repère sur la carte pour indiquer le lieu avec précision.' },
    { icon: 'fact_check', title: 'Suivez l’intervention', text: 'Consultez l’avancement du signalement depuis votre espace citoyen.' },
  ];
}
