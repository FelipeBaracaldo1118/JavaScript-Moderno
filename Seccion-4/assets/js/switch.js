const fecha = new Date();
let dia = fecha.getDay();

// we use switch when we are using exact values, or we have something to compare exactly with it.

switch (dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3: 
        console.log('miercoles');
        break;
    case 4:
        console.log('jueves')
    break;
    default:
        console.log('Es otro dia que no esta registrado')
}