import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfileAccessStore } from '../../../application/profile-access.store';
import { User } from '../../../domain/model/user.entity';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatCardModule, MatButtonModule],
  templateUrl: './profile-view.html',
  styleUrl: './profile-view.css'
})
export class ProfileViewComponent implements OnInit {
  user: User | undefined;

  constructor(public store: ProfileAccessStore) {}

  ngOnInit(): void {
    this.store.loadUsers();
    this.user = this.store.getUsers()[0];
  }
}
