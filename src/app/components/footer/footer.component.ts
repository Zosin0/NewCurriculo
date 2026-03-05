import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  name: string;
  url: string;
  external: boolean; // Indicates if the link opens in a new tab
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  footerLinks = signal<FooterLink[]>([
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/lucaszoser/', external: true },
    { name: 'Github', url: 'https://github.com/Zosin0/', external: true },
    { name: 'Contato', url: 'contato.html', external: false },
  ]);
}
