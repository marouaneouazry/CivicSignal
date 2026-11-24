import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Report, statusTone } from 'shared';

@Component({
  selector: 'civic-report-table',
  imports: [RouterLink],
  template: `
    <div class="table-scroll" tabindex="0" aria-label="Tableau des signalements">
      <table>
        <thead><tr><th scope="col">Signalement</th><th scope="col">Catégorie</th><th scope="col">Gravité</th><th scope="col">Statut</th><th scope="col">Date</th></tr></thead>
        <tbody>
          @for (report of reports(); track report.id) {
            <tr>
              <th scope="row"><a [routerLink]="['/signalements', report.id]">{{ report.title }}</a><small>{{ report.id }} · {{ report.district }}</small></th>
              <td>{{ report.category }}</td>
              <td><span class="pill" [attr.data-tone]="report.severity === 'Critique' ? 'danger' : report.severity === 'Élevée' ? 'warning' : null">{{ report.severity }}</span></td>
              <td><span class="pill" [attr.data-tone]="tone(report.status)">{{ report.status }}</span></td>
              <td>{{ report.date }}</td>
            </tr>
          } @empty { <tr><td colspan="5">Aucun signalement ne correspond aux filtres.</td></tr> }
        </tbody>
      </table>
    </div>
  `,
})
export class ReportTable {
  readonly reports = input.required<readonly Report[]>();
  readonly tone = statusTone;
}
