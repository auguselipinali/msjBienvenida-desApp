import { Component } from '@angular/core';

@Component({
  selector: 'app-msj-bienvenida',
  templateUrl: './msj-bienvenida.component.html',
  styleUrls: ['./msj-bienvenida.component.css']
})
export class MsjBienvenidaComponent {
  mensaje: string;
  nombre: string = "";
  nombres: string[] = [];
  showForm = false;
  showLista = false;

  constructor() {
    this.mensaje = 'Bienvenido';
  }

  actualizarMensaje() {
    this.mensaje = `Bienvenido ${this.nombre}`;
    this.nombres.push(this.nombre);
    if (this.nombres.length > 10) {
      this.nombres.shift();
    }
    this.nombre = '';
    this.showForm = false;
  }

  toggleLista() {
    this.showLista = !this.showLista;
  }
}