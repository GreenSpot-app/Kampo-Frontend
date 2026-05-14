// src/app/app.component.ts
import { NavbarComponent } from './shared/presentation/components/navbar/navbar.component';
import { FooterComponent } from './shared/presentation/components/footer-content/footer.component';
import { LanguageSwitcherComponent } from './shared/presentation/components/language-switcher/language-switcher.component';
import { RouterOutlet } from '@angular/router';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LanguageSwitcherComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
