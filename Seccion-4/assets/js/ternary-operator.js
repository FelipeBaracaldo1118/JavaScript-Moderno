/**
 * Dias de semana abrimos a las 11
 * fines de semana abrimos a las 9
 */

//entra a un sitio web, para consultar si esta abierto hoy...


const ahora = new Date();

const diaSemana = ahora.getDay(); // 0 = domingo, 6 = sábado
const horaActual = ahora.getHours(); // Número entre 0 y 23




//this is the old way when we have to evaluate them in different parts.
/*if (dia === 0 || dia === 6){
    console.log('Fin de Semana')
    horaApertura = 9
}else {
    console.log('Dia entre semana')
    horaApertura = 11
}

if(hora >= horaApertura){
    mensaje= 'Esta abierto'
}else{
    mensaje=`estamos proximos a abrir, hoy abrimos a las ${horaApertura}`  }

console.log({horaApertura, mensaje}) */

//method than array ask if theres anything related with the query inside of it . this will return a boolean if it finds
//Ternary operator
const esFinDeSemana = [0, 6].includes(diaSemana);

const horaApertura = esFinDeSemana ? 9 : 11;

const mensaje =
  horaActual >= horaApertura
    ? 'Estamos abiertos'
    : `Estamos próximos a abrir. Hoy abrimos a las ${horaApertura}:00`;

console.log({
  diaSemana,
  horaActual,
  horaApertura,
  mensaje
});