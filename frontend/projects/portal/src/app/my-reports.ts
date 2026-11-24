import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { demoReports, statusTone } from 'shared';

@Component({
  imports: [RouterLink, MatButtonModule],
  template: `
    <section class="container block stack">
      <div class="page-heading"><div class="section-title"><p class="eyebrow">Espace citoyen</p><h1>Mes signalements</h1><p class="muted">Consultez les étapes de traitement de vos demandes.</p></div><a mat-flat-button routerLink="/signaler">Nouveau signalement</a></div>
      <p class="notice">Exemples fictifs à Casablanca.</p>
      <div class="report-grid">@for (report of reports; track report.id) {
        <article class="card stack">
          <div class="page-heading"><span class="eyebrow">{{ report.id }}</span><span class="pill" [attr.data-tone]="tone(report.status)">{{ report.status }}</span></div>
          <div><h3>{{ report.title }}</h3><p class="muted">{{ report.district }} · {{ report.date }}</p></div>
          <p>{{ report.description }}</p><small>{{ report.category }}</small>
        </article>
      }</div>
    </section>
  `,
})
export class MyReportsPage {
  readonly reports = demoReports.slice(0, 3);
  readonly tone = statusTone;
}
