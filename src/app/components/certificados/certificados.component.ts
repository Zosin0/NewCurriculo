import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-certificados',
  imports: [ CommonModule, ModalComponent ],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent {
  certificados = [
    {
      type: 'certificate',
      title: 'Java COMPLETO 2023 Programação Orientada a Objetos+Projetos',
      hours: '55 Horas',
      imageUrl: '/assets/udemy.png'
    },
    {
      type: 'certificate',
      title: 'Python 3 - Curso Completo do Básico ao Avançado',
      hours: '26 Horas',
      imageUrl: '/assets/udemy.png'
    },
    {
      type: 'project',
      title: 'Klas - Sistema de Gestão Escolar',
      hours: 'Projeto',
      imageUrl: '/assets/klas1.png',
      projectUrl: '#', // Placeholder URL
      slideshowImages: [
        '/assets/klas2.png',
        '/assets/klas3.png',
        '/assets/klas4.png'
      ]
    },
    {
      type: 'project',
      title: 'Studex - Plataforma de Estudos',
      hours: 'Projeto',
      imageUrl: '/assets/studex1.png',
      projectUrl: '#', // Placeholder URL
      slideshowImages: [
        '/assets/studex2.png',
        '/assets/studex3.png',
        '/assets/studex4.png'
      ]
    }
  ];

  isModalOpen = false;
  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
  }
}
