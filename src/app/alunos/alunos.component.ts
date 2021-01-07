import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  public titulo = 'Alunos';
  public alunoSelecionado = 'alunoSelecionado';

  public alunos = [
    { id: 1, nome:'Paula', sobrenome: 'Kent', telefone: 27513421},
    { id: 2, nome:'Laura', sobrenome: 'Isabela', telefone: 27513451},
    { id: 3, nome:'Luiza', sobrenome: 'Antonia', telefone: 27519991},
    { id: 4, nome:'Lucas', sobrenome: 'Maria', telefone: 32613421},
    { id: 5, nome:'Pedro', sobrenome: 'Machado', telefone: 26623421},
    { id: 6, nome:'Paulo', sobrenome: 'Alvares', telefone: 27713421},
  ];

  alunoSelect(aluno: any)
  {
    this.alunoSelecionado = aluno.nome;
  }

  voltar()
  {
    this.alunoSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
