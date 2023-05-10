import { Comida } from "../interfaces/Comida"
import { Estudiante } from "../interfaces/Estudiante"
import { Materia } from "../interfaces/Materia"

//¿Como funciona TypeScript
//1. Comienzo con las variables, a continuación defino el tipo de dato que voy a usar (let o const), luego uso un dato, en este caso datos primitivos
 const nombre:string="Angela Lopez"
 const edad:number=35
 const estatura:number=1.55
 const yaDesayuno:boolean=false
 let deportes:string[]=["nado sincronizado","patinaje artistico","volleyball"]
 let notas:number[]=[1,2,3,4]

 //Estructuras de datos
 //1.Arreglos [], la idea es que lo que esta dentro sea el mismo tipo de dato, pero en la vida real no funciona asi, por eso aparecen los objetos{} que me permiten guardar todos los atributos asi sean diferentes tipos de datos.
 //Creando objetos
 let estudiante:Estudiante={
    nombre:"Angela",
    apellido:"Lopez",
    edad:35,
    estatura:1.55,
    tieneGripa:false,
    comidasFavoritas:[{nombre:"Ensalada", tiempo:10,},{nombre:"sopa",tiempo:5}],
    materias:[{
        nombre:"Programacion avanzada",
        profesor:"Juanjo the best",
        diaenquesedicta:"Miercoles"
    }]
 }

 let comida:Comida={
    nombre:"Ensalada",
    tiempo: 10,
    sePuedeComerFrio: true  
 }

 let materia:Materia={
    nombre:"",
    profesor:"",
    diaenquesedicta:""

 }

 