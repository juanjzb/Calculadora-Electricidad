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
  agregarFila();
}

function calc() {
  if (document.getElementById('tabla').innerHTML.split("</tr>").length - 2 < 2){
    alert('Datos insuficientes');
    return
  }
  results = 0;
  voltaje = 0;
  intensidad = 0;
  resistencia = 0;
  potencia = 0;
  if (document.getElementById("Voltaje")) {
    if (!isNaN(parseFloat(document.getElementById('Voltaje').innerHTML))) {
       voltaje = parseFloat(document.getElementById('Voltaje').innerHTML);
       console.log(voltaje);
    }
  }
  if (document.getElementById("Intensidad")) {
    if (!isNaN(parseFloat(document.getElementById('Intensidad').innerHTML))) {
       intensidad = parseFloat(document.getElementById('Intensidad').innerHTML);
       console.log(intensidad);
    }
  }

  if (document.getElementById("Resistencia")) {
    if (!isNaN(parseFloat(document.getElementById('Resistencia').innerHTML))) {
       resistencia = parseFloat(document.getElementById('Resistencia').innerHTML);
       console.log(resistencia);
    }
  }

  if (document.getElementById("Potencia")) {
    if (!isNaN(parseFloat(document.getElementById('Potencia').innerHTML))) {
       potencia = parseFloat(document.getElementById('Potencia').innerHTML);
       console.log(potencia);
    }
  }

  calcVol(intensidad, resistencia, potencia);
  calcInt(voltaje, resistencia, potencia);
  calcRes(intensidad, voltaje, potencia);
  calcPot(intensidad, voltaje, resistencia);
  console.log(results);
}

function calcInt(voltaje, resistencia, potencia) {
  if (voltaje && resistencia) {
    result = voltaje / resistencia;
    document.getElementById("resultadoIntensidad").innerHTML = 'La intensidad es ' + result;
  } else if (potencia && voltaje) {
    result = potencia / voltaje;
    document.getElementById("resultadoIntensidad").innerHTML = 'La intensidad es ' + result;
  } else if (potencia && resistencia) {
    result = Math.sqrt(potencia / resistencia);
    document.getElementById("resultadoIntensidad").innerHTML = 'La intensidad es ' + result;
  }
}

function calcVol(intensidad, resistencia, potencia) {
  if (intensidad && resistencia) {
    result = intensidad * resistencia;
    document.getElementById("resultadoVoltaje").innerHTML = 'El voltaje es ' + result;
  } else if (potencia && intensidad) {
    result = potencia / intensidad;
    document.getElementById("resultadoVoltaje").innerHTML = 'El voltaje es ' + result;
  } else if (potencia && resistencia) {
    result = Math.sqrt(potencia * resistencia);
    document.getElementById("resultadoVoltaje").innerHTML = 'El voltaje es ' + result;
  }
}

function calcRes(intensidad, voltaje, potencia) {
  if (intensidad && potencia) {
    result = potencia / (intensidad ** 2);
    document.getElementById("resultadoResistencia").innerHTML = 'La resistencia es ' + result;
  } else if (voltaje && intensidad) {
    result = voltaje / intensidad;
    document.getElementById("resultadoResistencia").innerHTML = 'La resistencia es ' + result;
  } else if (potencia && voltaje) {
    result = (voltaje ** 2) / potencia
    document.getElementById("resultadoResistencia").innerHTML = 'La resistencia es ' + result;
  }
}

function calcPot(intensidad, voltaje, resistencia) {
  if (intensidad && voltaje) {
    result = intensidad * voltaje;
    document.getElementById("resultadoPotencia").innerHTML = 'La potencia es ' + result;
  } else if (resistencia && intensidad) {
    result = resistencia * (intensidad ** 2);
    document.getElementById("resultadoPotencia").innerHTML = 'La potencia es ' + result;
  } else if (voltaje && resistencia) {
    result = (voltaje ** 2) / resistencia;
    document.getElementById("resultadoPotencia").innerHTML = 'La potencia es ' + result;
  }
}
