import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-prueba6',
  templateUrl: './prueba6.page.html',
  styleUrls: ['./prueba6.page.scss'],
})
export class Prueba6Page implements OnInit{

  todasLasPreguntas = [
    {
      texto: '¿Cuál es la fecha de nuestro aniversario?',
      opciones: ['21 marzo 2016', '22 abril 2016', 'NS/NC'],
      correcta: 'NS/NC'
    },
    {
      texto: 'Sumando los tatuajes de Laura e Iván ¿Cuántos hay en total?',
      opciones: ['12', '13', '10'],
      correcta: '12'
    },
    {
      texto: '¿Cuál es el primer país que visitaron juntos?',
      opciones: ['Francia', 'Portugal', 'India'],
      correcta: 'India'
    },
    {
      texto: '¿Cuál es el artista que más veces han visto en directo juntos?',
      opciones: ['Nil Moliner', 'Leiva', 'Izal'],
      correcta: 'Izal'
    },
    {
      texto: '¿Cuál es el deporte que más han practicado juntos?',
      opciones: ['Padel', 'Running', 'Ajedrez'],
      correcta: 'Padel'
    },
    {
      texto: '¿A que se aficionaron durante el COVID?',
      opciones: ['Bachata', 'Juegos de mesa', 'Repostería'],
      correcta: 'Juegos de mesa'
    },
    {
      texto: '¿Cuántos años estuvieron viviendo en Francia?',
      opciones: ['5', '6', '7'],
      correcta: '6'
    },
    {
      texto: '¿Cuál les gustaría que fuese su próximo destino?',
      opciones: ['Perú', 'China', 'Alemania'],
      correcta: 'Perú'
    },
    {
      texto: 'S\'ils doivent choisir une chose de la France. Quelle serait-il ?',
      opciones: ['Le fromage', 'Le vin', 'Le croissant'],
      correcta: 'Le vin'
    },
    {
      texto: '¿Cuál fue el primer amigo de Iván?',
      opciones: ['Iván Diaz', 'Javier Ramón', 'Angee Patricia'],
      correcta: 'Javier Ramón'
    },
    {
      texto: '¿Cuál es el deporte favorito de Iván?',
      opciones: ['Pádel', 'Fútbol', 'Baloncesto'],
      correcta: 'Baloncesto'
    },
    {
      texto: 'Si no fuese profesor... ¿Que sería Iván?',
      opciones: ['Psicólogo', 'Periodista', 'Político'],
      correcta: 'Periodista'
    },
    {
      texto: 'Si Laura no hubiese sido fisio. ¿Que habría sido?',
      opciones: ['Psicóloga', 'Profesora', 'Enfermera'],
      correcta: 'Psicóloga'
    },
    {
      texto: '¿Cuál es el talento oculto de Laura?',
      opciones: ['Cantar', 'No seguir las recetas de cocina', 'Leer el horóscopo'],
      correcta: 'No seguir las recetas de cocina'
    },
    {
      texto: '¿Cuál fue la primera actividad extraescolar de Laura?',
      opciones: ['Sevillanas', 'Judo', 'Gimnasia Rítmica'],
      correcta: 'Sevillanas'
    },
  ];

  preguntas: any[] = [];
  respuestas: string[] = [];

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {
    this.reiniciarPrueba();
  }

  reiniciarPrueba() {
    this.preguntas = this.seleccionarPreguntasAlAzar(this.todasLasPreguntas, 10);
    this.respuestas = new Array(this.preguntas.length).fill('');
  }

  seleccionarPreguntasAlAzar(preguntas: any[], cantidad: number): any[] {
    const preguntasMezcladas = preguntas.sort(() => 0.5 - Math.random());
    return preguntasMezcladas.slice(0, cantidad);
  }

  async verificarRespuestas() {
    let respuestasCorrectas = 0;

    for (let i = 0; i < this.preguntas.length; i++) {
      if (this.respuestas[i] === this.preguntas[i].correcta) {
        respuestasCorrectas++;
      }
    }

    if (respuestasCorrectas >= 6) {
      await this.mostrarAlerta('¡Correcto!', `Has respondido correctamente ${respuestasCorrectas} de 10 preguntas.`, 'markAsCompleted');
    } else {
      await this.mostrarAlerta('No has superado la prueba', `Has respondido correctamente ${respuestasCorrectas} de 10 preguntas.`, 'reiniciarPrueba');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string, metodo?: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [{
        text: 'OK',
        handler: () => {
          if (metodo === 'markAsCompleted') {
            this.markAsCompleted();
          } else if (metodo === 'reiniciarPrueba') {
            this.reiniciarPrueba();
          }
        }
      }]
    });
    await alert.present();
  }

  markAsCompleted() {
    localStorage.setItem('prueba6', 'true');
    // Verifica cuáles pruebas están completadas
    const pruebas = ['prueba6', 'prueba7', 'prueba1', 'prueba2', 'prueba3', 'prueba4', 'prueba5'];
    let siguienteRuta = '/resolver';  // Ruta por defecto si todas están completadas

    for (const prueba of pruebas) {
      if (localStorage.getItem(prueba) !== 'true') {
        // Si encuentra una prueba no completada, establece la siguiente ruta a esa prueba
        siguienteRuta = `/${prueba}`;
        break;
      }
    }

    // Navega a la ruta correspondiente y recarga la página
    this.router.navigate([siguienteRuta]).then(() => {
      window.location.reload();
    });
  }

}
