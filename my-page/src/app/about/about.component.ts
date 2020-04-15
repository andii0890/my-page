import { Component, OnInit } from '@angular/core';
import { About } from '../about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About = {
    first_paragraph: 'Quién soy?',
    paragraph_description: 'Cuando era niña desarrollé un gusto especial por los videojuegos y películas animadas, inspirandome por ello a desarrollar mi habilidad por el dibujo y crecer mi interés por la tecnología. Con el tiempo, me fuí desarrollando en áreas completamente diferentes, hasta que un día, tuve la oportunidad de entrar por completo al mundo de la tecnología, el mundo de la programación. Ahora soy una chica de 29 años, completamente inmersa en el mundo del aprendizaje. Cada día encuentro la motivación suficiente para desarrollarme profesionalmente y algún día alcanzar mi objetivo: Desarrollarme en el mundo digital: Animación y videojuegos.',
    second_paragraph: 'Qué hago?',
    paragraph_description2: 'Actualmente estoy como practicante en Unosquare, una empresa dedicada a ofrecer servicios de ingeniería de Software, donde estoy aprendiendo tecnologías de desarrollo como JavaScript, Typescript, y librerías como Angular JS, RxJS y otras tecnologías de Front-End. Trabajo también en mi tiempo libre en un pequeño proyecto freelance en desarrollo donde implemento React, Javascript, Git y GitLab. También estoy como aprendiz autodidacta por medio de plataformas como Platzi y Udemy, donde he aprendido, Boostrap, Git & GitHub, Unix terminal, Node.js, HTML, CSS, SQL y MYSQL. ',
    third_paragraph: 'En qué puedo ayudar?',
    paragraph_description3: 'Si puedo y sé hacerlo, o puedo aprenderlo, porqué no hacerlo?',
    abilities: 'habilidades',
    experience:'experiencia',
    hobbies: 'hobbies',
    language: 'idiomas',
    education: 'educación',
    certifications: 'certificaciones'
  };

  constructor() { }

  ngOnInit() {
  }

}
