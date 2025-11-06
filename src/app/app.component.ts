import { Component } from '@angular/core';

import { CertificadosComponent } from './components/certificados/certificados.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NavComponent } from './components/nav/nav.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SobreComponent } from './components/sobre/sobre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CertificadosComponent,
    FooterComponent,
    HabilidadesComponent,
    NavComponent,
    PerfilComponent,
    ProjetosComponent,
    SobreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curriculo-angular';
}
