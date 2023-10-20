"use strict";
//Exercice 1
// class Rectangle {
//   constructor(private a: number, private b: number) {}
//   surface(): number {
//     return this.a * this.b;
//   }
// }
//----------------------------------------------//
// //Exercice 2
// class Somme {
//   constructor(private n1: number, private n2: number) {}
//   sum(): number {
//     return this.n1 + this.n2;
//   }
// }
// function main() {
//   const input1: number = parseFloat(
//     prompt('Entrez le premier entier :') || '0'
//   );
//   const input2: number = parseFloat(
//     prompt('Entrez le deuxième entier :') || '0'
//   );
//   const somme = new Somme(input1, input2);
//   const result = somme.sum();
//   console.log(`La somme des deux entiers est : ${result}`);
// }
// main();
// //----------------------------------------------//
// // Exercice 3
// class Student {
//   nom: string;
//   note1: number;
//   note2: number;
//   constructor(nom: string, note1: number, note2: number) {
//     this.nom = nom;
//     this.note1 = note1;
//     this.note2 = note2;
//   }
// }
// const nom: string = prompt("Entrez le nom de l'étudiant :") || '';
// const note1: number = parseFloat(prompt('Entrez la note 1 :') || '0');
// const note2: number = parseFloat(prompt('Entrez la note 2 :') || '0');
// function calc_moy(note1: number, note2: number): number {
//   return (note1 + note2) / 2;
// }
// function show(nom: string, moyenne: number): void {
//   console.log(`La moyenne de ${nom} est de ${moyenne}`);
// }
// const moyenne = calc_moy(note1, note2);
// show(nom, moyenne);
// //----------------------------------------------//
// //Exercice 4
// class Complex {
//   constructor(public real: number, public imaginary: number) {}
//   add(complex: Complex): Complex {
//     const realPart = this.real + complex.real;
//     const imaginaryPart = this.imaginary + complex.imaginary;
//     return new Complex(realPart, imaginaryPart);
//   }
// }
// function getUserInput(promptText: string): number {
//   const input = prompt(promptText) || '0';
//   return parseFloat(input);
// }
// const real1 = getUserInput(
//   'Entrez la partie réelle du premier nombre complexe :'
// );
// const imaginary1 = getUserInput(
//   'Entrez la partie imaginaire du premier nombre complexe :'
// );
// const real2 = getUserInput(
//   'Entrez la partie réelle du deuxième nombre complexe :'
// );
// const imaginary2 = getUserInput(
//   'Entrez la partie imaginaire du deuxième nombre complexe :'
// );
// const complex1 = new Complex(real1, imaginary1);
// const complex2 = new Complex(real2, imaginary2);
// const result = complex1.add(complex2);
// console.log(
//   `La somme des nombres complexes est : ${result.real} + ${result.imaginary}i`
// );
//----------------------------------------------//
//Exercice 5
// class Point {
//   private x: number;
//   private y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   distance(otherPoint: Point): number {
//     const xDiff = this.x - otherPoint.x;
//     const yDiff = this.y - otherPoint.y;
//     return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
//   }
// }
// const point1 = new Point(0, 0);
// const point2 = new Point(3, 4);
// const dist = point1.distance(point2);
// console.log(`La distance entre les deux points est : ${dist}`);
//----------------------------------------------//
//Exercice 6
// class Person {
//   public age: number;
//   constructor() {
//     this.age = 0;
//   }
//   SetAge(n: number): void {
//     this.age = n;
//   }
//   SayHello(): void {
//     console.log('Hello');
//   }
// }
// class Student extends Person {
//   public GoToClass(): void {
//     console.log("I'm going to class");
//   }
//   public DisplayAge() {
//     console.log(`My age is ${this.age} years old`);
//   }
// }
// class Teacher extends Person {
//   private subject: string;
//   constructor() {
//     super();
//     this.subject = '';
//   }
//   public Explain(): void {
//     console.log('Explanation begins');
//   }
// }
// class Test {
//   static main(): void {
//     const person = new Person();
//     person.SayHello();
//     const student = new Student();
//     student.SayHello();
//     student.SetAge(21);
//     student.GoToClass();
//     student.DisplayAge();
//     const teacher = new Teacher();
//     teacher.SetAge(35);
//     teacher.SayHello();
//     teacher.Explain();
//   }
// }
// Test.main();
//----------------------------------------------//
//Exercice 7
// class House {
//   private surface: number;
//   private door: Door;
//   constructor(surface: number) {
//     this.surface = surface;
//     this.door = new Door('bleu');
//   }
//   getSurface(): number {
//     return this.surface;
//   }
//   setSurface(surface: number) {
//     this.surface = surface;
//   }
//   public Display(): void {
//     console.log(`Je suis une maison, ma surface est de ${this.surface} m²`);
//   }
//   getDoor(): Door {
//     return this.door;
//   }
// }
// class Door {
//   private color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   getColor(): string {
//     return this.color;
//   }
//   setColor(color: string) {
//     this.color = color;
//   }
//   public Display(): void {
//     console.log(`Je suis une porte, ma couleur est ${this.color}`);
//   }
// }
// class Apartment extends House {
//   constructor() {
//     super(50);
//   }
// }
// class Person {
//   private nom: string;
//   private house: House;
//   private door: Door;
//   constructor(nom: string, house: House, door: Door) {
//     this.nom = nom;
//     this.house = house;
//     this.door = door;
//   }
//   public Display() {
//     console.log(`Je m'appelle ${this.nom}`);
//   }
// }
// class Main {
//   static main(): void {
//     const house = new House(50);
//     const door = new Door('blue');
//     const person = new Person('Lucie', house, door);
//     person.Display();
//     house.Display();
//     door.Display();
//   }
// }
// Main.main();
//----------------------------------------------//
//Exercice 8
//# sourceMappingURL=index.js.map