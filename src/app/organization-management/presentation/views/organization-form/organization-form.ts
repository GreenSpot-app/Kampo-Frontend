import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OrganizationStore } from '../../../application/organization.store';
import { Organization } from '../../../domain/model/organization.entity';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-organization-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './organization-form.html'
})
export class OrganizationFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  public store = inject(OrganizationStore);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  form: FormGroup = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    ruc: ['', [Validators.required, Validators.maxLength(11)]],
    address: [''],
    phone: [''],
    email: ['', Validators.email]
  });

  isEdit = false;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      const org = this.store.organizations().find(o => o.getId() === +id);
      if (org) {
        this.form.patchValue({
          id: org.getId(),
          name: org.getName(),
          ruc: org.getRuc(),
          address: org.getAddress(),
          phone: org.getPhone(),
          email: org.getEmail()
        });
      }
    }
  }

  save() {
    if (this.form.invalid) return;
    const val = this.form.value;
    const entity = new Organization(val.id, val.name, val.ruc, val.address, val.phone, val.email);

    if (this.isEdit) {
      this.store.updateOrganization(entity);
    } else {
      this.store.addOrganization(entity);
    }
    this.router.navigate(['/organization-management']);
  }

  cancel() {
    this.router.navigate(['/organization-management']);
  }
}
