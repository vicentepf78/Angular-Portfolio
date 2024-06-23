import { Component, signal } from '@angular/core';
import { IExperiences } from '../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvimento Ágil de Software e Consultoria",
        p: "Objective | jan de 2023 - Present ",
      },
      text: `<p>Trabalhando remotamente no projeto de migração de software para uma empresa de benefícios e incentivos. Responsável pelo levantamento e especificação dos requisitos de negócios e técnicos no UpStream. Participando da migração de um sistema web para micro serviços.</p>
             <p>Desenvolvimento dos projetos de backend em Java (versão 21) com o framework Spring (versão 3.1.7).</p>
             <p>Implementação de integração contínua/entrega contínua (CI/CD) no Git/GitHub usando Docker/Kubernetes, enquanto no frontend utilizo Angular (versão 16.2.x).</p>
             <p>Criação e execução de testes automatizados, incluindo testes unitários e integrados.</p>
             <p>Implementação e manutenção de processos de desenvolvimento ágil para melhorar a eficiência e a produtividade da equipe.</p> `,
    },
    {
      summary: {
        strong: "Líder técnico de Software",
        p: "Objective | dez de 2021 - dez de 2022",
      },
      text: `<p>Trabalhei remotamente como líder técnico em uma equipe dedicada ao desenvolvimento de novas funcionalidades para um sistema de CRM & Billing.</p>
             <p>Prestei suporte direto a um dos nossos clientes, fornecendo melhorias para otimizar os processos operacionais da empresa.</p>
             <p>Colaborei com a equipe de desenvolvimento na definição e especificação de requisitos técnicos e de negócios, além de realizar revisões de código e fornecer suporte diário aos membros da equipe.</p>
             <p>Supervisão de equipes de desenvolvimento para garantir a entrega oportuna e de alta qualidade de soluções de software.</p>
             <p>Implementação de práticas de desenvolvimento de software e metodologias ágeis para otimizar processos e alcançar objetivos de negócios.</p>
             <p>Colaboração ativa com partes interessadas internas e externas para entender requisitos e garantir alinhamento estratégico.</p>
             <p>Competências:Spring · Upstream · Java 17 · Microsserviços · Testes automatizados de software</p>
            `,
    },
    {
      summary: {
        strong: "Coordenador e Líder do Time de Desenvolvimento de Software",
        p: "Aliare | jan de 2017 - dez de 2021 ",
      },
      text: `<p>Desempenhei papéis multifacetados, atuando como Tech Lead e Scrum Master, liderando com sucesso equipes de desenvolvimento de software.</p>.
             <p>Conduzi projetos de forma colaborativa com os clientes, fornecendo suporte no entendimento de negócios e ajudando a projetar soluções de software que resolvessem problemas específicos, agregando valor aos clientes.</p>
             <p>Experiência como Product Owner, assumindo a responsabilidade pelo ciclo de vida do produto, desde a concepção até a entrega, garantindo que as necessidades dos clientes fossem atendidas de forma eficaz e oportuna.</p>
             <p>Competências:Gestão ágil de projetos · Java Enterprise Edition · Kanban · Facilitação do time · Servidor de Aplicação JBoss · Java Web Services · API REST · Arquitetura de sistema</p>
             <p>Competências:Java 8 · Gestão de pessoal · Negociação · Design de software · Testes automatizados de software · API REST · Oracle SQL Developer · Sistema de alta performance</p>`
    },
    {
      summary: {
        strong: "Analista e Desenvolvedor de Software Java",
        p: "Aliare | jan de 2008 - dez de 2016 ",
      },
      text: `<p>Trabalhando remotamente no projeto de migração de software para uma empresa de benefícios e incentivos</p>.
             <p>Responsável pelo levantamento e especificação dos requisitos de negócios e técnicos no UpStream.</p>
             <p>Participando da migração de um sistema web para micro serviços.</p>
             <p>Desenvolvimento dos projetos de backend em Java (versão 21) com o framework Spring (versão 3.1.7).</p>
             <p>Implementação de integração contínua/entrega contínua (CI/CD) no Git/GitHub usando Docker/Kubernetes, enquanto no frontend utilizo Angular (versão 16.2.x).</p>
             <p>Criação e execução de testes automatizados, incluindo testes unitários e integrados.</p>
             <p>Implementação e manutenção de processos de desenvolvimento ágil para melhorar a eficiência e a produtividade da equipe.</p>
             <p>Competências:Gestão ágil de projetos · Java Enterprise Edition · Kanban · Facilitação do time · Servidor de Aplicação JBoss · Java Web Services · API REST · Arquitetura de sistema</p>`,
    },
    {
      summary: {
        strong: "Desenvolvedor de Software Java",
        p: "Aliare | jan de 2006 - jan de 2008 ",
      },
      text: `<p>Trabalhando remotamente no projeto de migração de software para uma empresa de benefícios e incentivos</p>.
             <p>Responsável pelo levantamento e especificação dos requisitos de negócios e técnicos no UpStream.</p>
             <p>Participando da migração de um sistema web para micro serviços.</p>
             <p>Desenvolvimento dos projetos de backend em Java (versão 21) com o framework Spring (versão 3.1.7).</p>
             <p>Implementação de integração contínua/entrega contínua (CI/CD) no Git/GitHub usando Docker/Kubernetes, enquanto no frontend utilizo Angular (versão 16.2.x).</p>
             <p>Criação e execução de testes automatizados, incluindo testes unitários e integrados.</p>
             <p>Implementação e manutenção de processos de desenvolvimento ágil para melhorar a eficiência e a produtividade da equipe.</p>
             <p>Competências:Java · Oracle SQL Developer · PostgreSQL · SOAP · Design de arquitetura de software · Implementações de sistema</p>`,
    },
    {
      summary: {
        strong: "Estagiário Desenvolvedor de Software Java",
        p: "Aliare | jun de 2004 - dez de 2005 ",
      },
      text: `<p>Trabalhando remotamente no projeto de migração de software para uma empresa de benefícios e incentivos</p>.
             <p>Responsável pelo levantamento e especificação dos requisitos de negócios e técnicos no UpStream.</p>
             <p>Participando da migração de um sistema web para micro serviços.</p>
             <p>Desenvolvimento dos projetos de backend em Java (versão 21) com o framework Spring (versão 3.1.7).</p>
             <p>Implementação de integração contínua/entrega contínua (CI/CD) no Git/GitHub usando Docker/Kubernetes, enquanto no frontend utilizo Angular (versão 16.2.x).</p>
             <p>Criação e execução de testes automatizados, incluindo testes unitários e integrados.</p>
             <p>Implementação e manutenção de processos de desenvolvimento ágil para melhorar a eficiência e a produtividade da equipe.</p>
             <p>Competências:Java · Oracle SQL Developer · PostgreSQL · Levantamento de requisitos</p>`,
    },

  ]);
}
