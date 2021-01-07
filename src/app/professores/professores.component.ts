import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professorSelecionado = 'professorSelecionado';

  public professores = [
    {id:1, nome:'Lauro', disciplina: 'Matemática'},
    {id:1, nome:'Ronaldo', disciplina: 'Física'},
    {id:1, nome:'Rodrigo', disciplina: 'PortuguÊs'},
    {id:1, nome:'Alaxendre', disciplina: 'Inglês'},
    {id:1, nome: 'Roberto', disciplina: 'Programação' },
  ];

  professorSelect(aluno: any)
  {
    this.professorSelecionado = aluno.nome;
  }

  voltar()
  {
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
