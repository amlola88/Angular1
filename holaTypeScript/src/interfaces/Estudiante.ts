 //En typeScript una interface es una clase que tiene unos atributos como un objeto padre.
//esto se conoce como DTO data transfer objet, esto garantiza la limpieza en la transferencia de datos.
import { Comida } from "./Comida"
import { Materia } from "./Materia"
export interface Estudiante{
    nombre:string,
    apellido:string,
    edad:number,
    estatura:number,
    tieneGripa?:boolean,
    comidasFavoritas?:Comida[],
    materias:Materia[]
}

