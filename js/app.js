let horas = 0;
let minutos = 0;
let segundos = 0;
let centesimas = 0;

function inicio() {
  control = setInterval(cronometro, 10);
  document.getElementById("inicio").disabled = true;
  document.getElementById("pausar").disabled = false;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = false;
}

function pausar() {
  clearInterval(control);
  document.getElementById("pausar").disabled = true;
  document.getElementById("continuar").disabled = false;
}

function reinicio() {
  clearInterval(control);
  centesimas = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;

  Centesimas.innerHTML = "00";
  Segundos.innerHTML = "00:";
  Minutos.innerHTML = "00:";
  Horas.innerHTML = "00:";

  document.getElementById("inicio").disabled = false;
  document.getElementById("pausar").disabled = true;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = true;
}

function cronometro() {
  if (centesimas < 99) {
    centesimas++;
    
    // Centesimas.innerHTML = ":" + centesimas;
  }
  if (centesimas == 99) {
    centesimas = -1;
  }
  if (centesimas == 0) {
    segundos++;
    
    // Segundos.innerHTML = ":" + segundos;
  }
  if (segundos == 59) {
    segundos = -1;
  }
  if (centesimas == 0 && segundos == 0) {
    minutos++;
    
    // Minutos.innerHTML = ":" + minutos;
  }
  if (minutos == 59) {
    minutos = -1;
  }
  if (centesimas == 0 && segundos == 0 && minutos == 0) {
    horas++;
    
    // Horas.innerHTML = horas;
  }
  if (centesimas < 10) {
    Centesimas.innerHTML = ":0" + centesimas;
  }else{
    Centesimas.innerHTML = ":" + centesimas;
  }
  if (segundos < 10) {
    Segundos.innerHTML = ":0" + segundos;
  }else{
    Segundos.innerHTML = ":" + segundos;
  }
if (minutos < 10) {
    Minutos.innerHTML = ":0" + minutos;
  }else{
    Minutos.innerHTML = ":" + minutos;
  }
if (horas < 10) {
    Horas.innerHTML = "0" + horas;
  }else{
    Horas.innerHTML = horas;
  }

 
 

}
