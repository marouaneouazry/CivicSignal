import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { categories, demoActivity, demoCategoryCounts, demoKpis, demoReports } from 'shared';
import { ReportTable } from './report-table';

@Component({
  imports: [RouterLink, MatButtonModule, MatIconModule, ReportTable],
  templateUrl: './overview.html',
})
export class OverviewPage {
  readonly reports = demoReports.slice(0, 3);
  readonly activity = demoActivity;
  readonly total = demoActivity.reduce((sum, day) => sum + day.count, 0);
  readonly indicators = [
    { label: 'Reçus sur 7 jours', value: this.total, icon: 'inbox' },
    { label: 'À valider', value: demoKpis.awaitingValidation, icon: 'pending_actions' },
    { label: 'En intervention', value: demoKpis.inProgress, icon: 'engineering' },
    { label: 'Résolus sur 7 jours', value: demoKpis.resolved, icon: 'task_alt' },
  ];
  readonly breakdown = categories.map(category => ({ ...category, count: demoCategoryCounts[category.name] }));
}
