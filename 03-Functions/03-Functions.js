function timeConversion(time) {
    // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
    // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
    //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

    // ej: "03:15:00PM" => "15:15:00" --- "01:12:31AM" => "01:12:31"
    let separarHora = time.split(':');
    if (separarHora.length < 3) { return false; }
    if (separarHora[2].includes('AM')) {
        if (separarHora[0] > '12' || separarHora[1] > '59' || separarHora[2] > '59') { return false }
        if (separarHora[0] < '12') {
            separarHora[2] = separarHora[2].slice(0, -2)
            return separarHora.join(':')
        }
        if (separarHora[0] === '12') {
            separarHora[0] = '00';
            separarHora[2] = separarHora[2].slice(0, -2);
            return separarHora.join(':')
        }
    }
    if (separarHora[2].includes('PM')) {
        if (separarHora[0] > '24' || separarHora[1] > '59' || separarHora[2] > '59') { return false }
        if (separarHora[0] !== '12') {
            separarHora[0] = (Number(separarHora[0]) + 12).toString();
            separarHora[2] = separarHora[2].slice(0, -2);
            return separarHora.join(':')
        }
        if (separarHora[0] === '12') {
            separarHora[2] = separarHora[2].slice(0, -2);
            return separarHora.join(':')
        }
    }
} 
/*opcion 2
let [hours, minutes, seconds] = time.split(":") 
let ampm= seconds[2]+seconds[3]      <----- destructuring
seconds=seconds[0]+seconds[1]
if(ampm==="AM"){
    hours= hour   ===  "12"? "00"  : hours;          <---- operador ternario==> se usa con frecuencia como atajo para la instrucción if.
            ^         (expresion)  (expresion)
        (condicion)  (si es true) (si es false)
(evalua si es true o false)
}else hours= hours=== "12"? hours: parseInt(hours)+12; 
return `${hours}:${minutes}:${seconds}`
}
*/

module.exports = {
    timeConversion
}