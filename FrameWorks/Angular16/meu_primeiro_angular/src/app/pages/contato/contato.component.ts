import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  nome: string = "";
  email: string = "";
  telefone: string = "";
  idade: number | null = null;
  profissao: string = "";

  limparDados() {
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.idade = null;
    this.profissao = "";
  }

  validarDados() {
    if (!this.nome || !this.email || !this.telefone || this.idade === null || !this.profissao) {
      alert("Todos os campos devem ser preenchidos.");
      return false;
    }
    if (this.nome.trim().length < 3) {
      alert("O nome deve ter no mínimo 3 caracteres.");
      return false;
    }
    if (!this.email.includes("@")) {
      alert("O e-mail deve conter '@'.");
      return false;
    }
    if (this.idade < 18) {
      alert("A idade deve ser maior ou igual a 18 anos.");
      return false;
    }
    const telefoneValido = /^[0-9]+$/.test(this.telefone);
    if (!telefoneValido) {
      alert("O telefone deve conter apenas números.");
      return false;
    }
    alert("Dados válidos!");
    return true;
  }
}
