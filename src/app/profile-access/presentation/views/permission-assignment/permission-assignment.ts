import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ProfileAccessStore } from '../../../application/profile-access.store';
import { Permission } from '../../../domain/model/permission.entity';

@Component({
  selector: 'app-permission-assignment',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTableModule, MatCardModule],
  templateUrl: './permission-assignment.html',
  styleUrl: './permission-assignment.css'
})
export class PermissionAssignmentComponent implements OnInit {
  displayedColumns: string[] = ['category', 'description'];
  permissions: Permission[] = [];

  constructor(public store: ProfileAccessStore) {}

  ngOnInit(): void {
    this.store.loadPermissions();
    this.permissions = this.store.getPermissions();
  }
}
