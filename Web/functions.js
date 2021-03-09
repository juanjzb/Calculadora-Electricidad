/*execute a function when someone clicks in the document:*/
magnitudes={
     "vol":[0, 0],
     "int":[0, 0],
     "res":[0, 0],
     "pot":[0, 0]
};

function check() {
  console.log('Checkeado');
}

function insert() {
  // clave = document.getElementById("inputMagnitud").value;
  // valor = document.getElementById("inputValue").value;
  // if (clave == "Voltaje") {
  // magnitudes.vol[0] = valor;
  // }
  // console.log(magnitudes.vol[0])
  agregarFila();
}

function calc() {


  //var voltaje = parseFloat(document.getElementById('Voltaje').innerHTML);
  var intensidad = parseFloat(document.getElementById('Intensidad').innerHTML);
  var resistencia = parseFloat(document.getElementById('Resistencia').innerHTML);
  var potencia = parseFloat(document.getElementById('Potencia').innerHTML);

  if (!isNaN(parseFloat(document.getElementById('Voltaje').innerHTML)) || parseFloat(document.getElementById('Voltaje').innerHTML!="")) {
     voltaje = parseFloat(document.getElementById('Voltaje').innerHTML;
     console.log(voltaje);
    //magnitudes.vol[0] = voltaje; //esto ya no lo ocupas, por la logica que lleva creo
  }
  else{
     voltaje = 0;
  }

  calcVol(intensidad, resistencia, potencia);
  calcInt(voltaje, resistencia, potencia);
  calcRes(intensidad, voltaje, potencia);
  calcPot(intensidad, voltaje, resistencia);
}

function calcInt(voltaje, resistencia, potencia) {
  if (voltaje && resistencia) {
    result = voltaje / resistencia;
    magnitudes.int[1] = result;
  } else if (potencia && voltaje) {
    result = potencia / voltaje;
    magnitudes.int[1] = result;
  } else if (potencia && resistencia) {
    result = Math.sqrt(potencia / resistencia);
    magnitudes.int[1] = result;
  }
}

function calcVol(intensidad, resistencia, potencia) {
  if (intensidad && resistencia) {
    result = intensidad * resistencia;
    magnitudes.vol[1] = result;
    document.write(magnitudes.vol[1]);
  } else if (potencia && intensidad) {
    result = potencia / intensidad;
    magnitudes.vol[1] = result;
  } else if (potencia && resistencia) {
    result = Math.sqrt(potencia * resistencia);
    magnitudes.vol[1] = result;
  }
}

function calcRes(intensidad, voltaje, potencia) {
  if (intensidad && potencia) {
    result = potencia / (intensidad ** 2);
    magnitudes.res[1] = result;
  } else if (voltaje && intensidad) {
    result = voltaje / intensidad;
    magnitudes.res[1] = result;
  } else if (potencia && voltaje) {
    result = (voltaje ** 2) / potencia
    magnitudes.res[1] = result;
  }
}

function calcPot(intensidad, voltaje, resistencia) {
  if (intensidad && voltaje) {
    result = intensidad * voltaje;
    magnitudes.pot[1] = result;
  } else if (resistencia && intensidad) {
    result = resistencia * (intensidad ** 2);
    magnitudes.pot[1] = result;
  } else if (voltaje && resistencia) {
    result = (voltaje ** 2) / resistencia;
    magnitudes.pot[1] = result;
  }
}
