import { Injectable } from "@angular/core";
import { Usuario } from "./usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  constructor() {}

  public getUsuario(): Usuario {
    let usuario = new Usuario();

    usuario.nome = "Philipi Bovo";
    usuario.email = "philipi.bovo@gmail.com";

    return usuario;
  }

  public getListaUsuarios(): Usuario[] {
    return [
      {
        nome: "Usuário 1",
        email: "usuario1@email.com"
      },
      {
        nome: "Usuário 2",
        email: "usuario2@email.com"
      },
      {
        nome: "Usuário 3",
        email: "usuario3@email.com"
      },
      {
        nome: "Usuário 4",
        email: "usuario4@email.com"
      }
    ];
  }
}
