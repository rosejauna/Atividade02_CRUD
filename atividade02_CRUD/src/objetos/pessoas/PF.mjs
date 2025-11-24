import Pessoa from "./Pessoa.mjs";
import Titulo from "./Titulo.mjs";

export default class PF extends Pessoa {
  #cpf;
  #titulo;
  #dataNascimento; // Incluído
  

  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    }
    return false;
  }

  getCPF() {
    return this.#cpf;
  }

 // incluído Crud
  setDataNascimento(dataNascimento) {
    this.#dataNascimento = dataNascimento;
    return true;
  }
  getDataNascimento() {
    return this.#dataNascimento;
  }

  setTitulo(titulo) {
    if (titulo instanceof Titulo) {
      this.#titulo = titulo;
      titulo.setPF(this);
      return true;
    }
    return false;
  }

  getTitulo() {
    return this.#titulo;
   }
  }