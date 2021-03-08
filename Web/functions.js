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
// exacto asi,
function insert() {
  clave = document.getElementById("inputMagnitud").value;
  valor = document.getElementById("inputValue").value;
  if (clave == "Voltaje") {
  magnitudes.vol[0] = valor;
  }
  console.log(magnitudes.vol[0])
  agregarFila();
}

function calc() {
  if (!isNaN(document.getElementById('inputVol').value)) {
    var voltaje = parseFloat(document.getElementById('inputVol').value);
    magnitudes.vol[0] = voltaje;
  }
  else{
    var voltaje = 0;
  }
  if (!isNaN(document.getElementById('inputInt').value)) {
    var intensidad = parseFloat(document.getElementById('inputInt').value);
    magnitudes.int[0] = intensidad;
  }
  else{
    var intensidad = 0;
  }
  if (!isNaN(document.getElementById('inputRes').value)) {
    var resistencia = parseFloat(document.getElementById('inputRes').value);
    magnitudes.res[0] = resistencia;
  }
  else{
    var resistencia = 0;
  }
  if (!isNaN(document.getElementById('inputPot').value)) {
    var potencia = parseFloat(document.getElementById('inputPot').value);
    magnitudes.pot[0] = potencia;
  }
  else{
    var potencia = 0;
  }

  calcVol(intensidad, resistencia, potencia);
  calcInt(voltaje, resistencia, potencia);
  calcRes(intensidad, voltaje, potencia);
  calcPot(intensidad, voltaje, resistencia);

  document.getElementById('inputVol').value = '';
  document.getElementById('inputInt').value = '';
  document.getElementById('inputRes').value = '';
  document.getElementById('inputPot').value = '';
  document.getElementById('finalInt').innerHTML = 'Intensidad: ' + magnitudes.int[1] + 'A';
  document.getElementById('finalVol').innerHTML = 'Voltaje: ' + magnitudes.vol[1] + 'V';
  document.getElementById('finalRes').innerHTML = 'Resistencia: ' + magnitudes.res[1] + 'Ω';
  document.getElementById('finalPot').innerHTML = 'Potencia: ' + magnitudes.pot[1] + 'W';
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

function reseteo() {
  magnitudes.vol[1] = 0;
  magnitudes.int[1] = 0;
  magnitudes.res[1] = 0;
  magnitudes.pot[1] = 0;
  document.getElementById('finalVol').innerHTML = 'Voltaje: 0V';
  document.getElementById('finalInt').innerHTML = 'Intensidad: 0A';
  document.getElementById('finalRes').innerHTML = 'Resistencia: 0Ω';
  document.getElementById('finalPot').innerHTML = 'Potencia: 0W';
}
