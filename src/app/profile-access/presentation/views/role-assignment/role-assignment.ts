import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ProfileAccessStore } from '../../../application/profile-access.store';
import { Role } from '../../../domain/model/role.entity';

@Component({
  selector: 'app-role-assignment',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTableModule, MatCardModule],
  templateUrl: './role-assignment.html',
  styleUrl: './role-assignment.css'
})
export class RoleAssignmentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'description'];
  roles: Role[] = [];

  constructor(public store: ProfileAccessStore) {}

  ngOnInit(): void {
    this.store.loadRoles();
    this.roles = this.store.getRoles();
  }
}
