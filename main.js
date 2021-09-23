// const natalia = {
//     name: "Natalia",
//     age: 20,

//     cursosAprobados:[
//         "Curso de programacion basica",
//         "curso de fundamentos de javascript"
//     ],

//     aprobarCursos(curso){
//         this.cursosAprobados.push(curso)
//     }
// };

// function Student(name,age,cursosAprobados){
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
// }
// Student.prototype.aprobarCursos = function(curso){
//     this.cursosAprobados.push(curso);
// }
// const Luis = new Student("Luis", 23, ["curso de fisica"]);

class Student2 {
    constructor(name, age, cursosAprobados){
        this.name= name;
        this.age= age;
        this.cursosAprobados= cursosAprobados;
    }
    aprobarCurso(curso){
        this.cursosAprobados.push(curso);
    }
}

const Ernesto = new Student2("Ernesto", 34, ["Curso", "Math"]);