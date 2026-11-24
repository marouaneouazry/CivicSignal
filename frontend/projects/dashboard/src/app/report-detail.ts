import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { demoReports, statusTone } from 'shared';

@Component({
  imports: [RouterLink, MatIconModule],
  templateUrl: './report-detail.html',
})
export class ReportDetailPage {
  private readonly id = inject(ActivatedRoute).snapshot.paramMap.get('id');
  readonly report = demoReports.find(item => item.id === this.id);
  readonly tone = statusTone;
}
