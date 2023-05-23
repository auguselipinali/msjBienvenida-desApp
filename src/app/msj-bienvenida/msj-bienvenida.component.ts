import { Component } from '@angular/core';

@Component({
  selector: 'app-msj-bienvenida',
  templateUrl: './msj-bienvenida.component.html',
  styleUrls: ['./msj-bienvenida.component.css']
})
export class MsjBienvenidaComponent {
  mensaje: string = "";
  nombre: string = "";
  nombres: string[] = [];
  mostrarForm = false;
  mostrarLista = false;

  inicio() {
    this.mensaje = 'Bienvenido';
  }

  actualizarMensaje() {
    this.mensaje = `Bienvenido ${this.nombre}`;
    this.nombres.push(this.nombre);
    if (this.nombres.length > 10) {
      this.nombres.shift();
    }
    this.nombre = '';
    this.mostrarForm = false;
  }

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}