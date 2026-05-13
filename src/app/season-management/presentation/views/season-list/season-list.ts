import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SeasonStore } from '../../../application/season.store';

@Component({
  selector: 'app-season-list',
  standalone: true,
  imports: [DatePipe, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule],
  templateUrl: './season-list.html',
  styleUrls: ['./season-list.css'],
})
export class SeasonListComponent implements OnInit {
  public store = inject(SeasonStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  displayedColumns: string[] = ['id', 'fieldId', 'cropName', 'status', 'startedAt', 'actions'];
  fieldId = 1;

  ngOnInit(): void {
    const q = this.route.snapshot.queryParamMap.get('fieldId');
    this.fieldId = q ? Number(q) : 1;
    this.store.loadSeasonsByField(this.fieldId);
  }

  navigateToNew(): void {
    this.router.navigate(['/season-management/new'], {
      queryParams: { fieldId: this.fieldId },
    });
  }

  edit(id: number): void {
    this.router.navigate(['/season-management/edit', id], {
      queryParams: { fieldId: this.fieldId },
    });
  }

  view(id: number): void {
    this.router.navigate(['/season-management/view', id]);
  }
}
