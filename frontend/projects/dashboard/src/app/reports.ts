import { Component, computed, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { categories, demoReports, Severity, Status } from 'shared';
import { ReportTable } from './report-table';

@Component({
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReportTable],
  templateUrl: './reports.html',
})
export class ReportsPage {
  readonly categories = categories;
  readonly severities: Severity[] = ['Faible', 'Moyenne', 'Élevée', 'Critique'];
  readonly statuses: Status[] = ['Soumis', 'En analyse', 'À valider', 'Affecté', 'En cours', 'Résolu', 'Rejeté'];
  readonly search = signal('');
  readonly category = signal('');
  readonly severity = signal('');
  readonly status = signal('');

  readonly filtered = computed(() => {
    const query = this.search().trim().toLocaleLowerCase('fr');
    return demoReports.filter(report =>
      [report.id, report.title, report.district].some(value => value.toLocaleLowerCase('fr').includes(query)) &&
      (!this.category() || report.category === this.category()) &&
      (!this.severity() || report.severity === this.severity()) &&
      (!this.status() || report.status === this.status()));
  });
}
