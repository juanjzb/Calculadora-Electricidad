/*execute a function when someone clicks in the document:*/
magnitudes={
     "vol":[0, 0],
     "int":[0, 0],
     "res":[0, 0],
     "pot":[0, 0]
};

function formatNumber(input) {
  result = input.toLocaleString("es-ES");
  return result;
}

function check() {
  console.log('Checkeado');
}

function insert() {
  agregarFila();
}

function calc() {
    document.getElementById("output1").style.display = "none";
    document.getElementById("output2").style.display = "none";
    document.getElementById("output3").style.display = "none";
    document.getElementById("output4").style.display = "none";

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
    }
  }
  if (document.getElementById("Intensidad")) {
    if (!isNaN(parseFloat(document.getElementById('Intensidad').innerHTML))) {
       intensidad = parseFloat(document.getElementById('Intensidad').innerHTML);
    }
  }

  if (document.getElementById("Resistencia")) {
    if (!isNaN(parseFloat(document.getElementById('Resistencia').innerHTML))) {
       resistencia = parseFloat(document.getElementById('Resistencia').innerHTML);
    }
  }

  if (document.getElementById("Potencia")) {
    if (!isNaN(parseFloat(document.getElementById('Potencia').innerHTML))) {
       potencia = parseFloat(document.getElementById('Potencia').innerHTML);
    }
  }

  calcVol(intensidad, resistencia, potencia);
  calcInt(voltaje, resistencia, potencia);
  calcRes(intensidad, voltaje, potencia);
  calcPot(intensidad, voltaje, resistencia);
  console.log(results);
  document.getElementById('group1').innerHTML = 'Corriente Alterna (' + results + ')';
}

function calcVol(intensidad, resistencia, potencia) {
  document.getElementById("group1").style.display = "block";
  if (intensidad && resistencia) {
    document.getElementById("output1").style.display = "block";
    results++;
    result = intensidad * resistencia;
    document.getElementById("resultadoVoltaje").innerHTML = formatNumber(result) + ' Voltios';
  } else if (potencia && intensidad) {
    document.getElementById("output1").style.display = "block";
    results++;
    result = potencia / intensidad;
    document.getElementById("resultadoVoltaje").innerHTML = formatNumber(result) + ' Voltios';
  } else if (potencia && resistencia) {
    document.getElementById("output1").style.display = "block";
    results++;
    result = Math.sqrt(potencia * resistencia);
    document.getElementById("resultadoVoltaje").innerHTML = formatNumber(result) + ' Voltios';
  }
}

function calcInt(voltaje, resistencia, potencia) {
  document.getElementById("group1").style.display = "block";
  if (voltaje && resistencia) {
    document.getElementById("output2").style.display = "block";
    results++;
    result = voltaje / resistencia;
    document.getElementById("resultadoIntensidad").innerHTML = formatNumber(result) + ' Amperios';
  } else if (potencia && voltaje) {
    document.getElementById("output2").style.display = "block";
    results++;
    result = potencia / voltaje;
    document.getElementById("resultadoIntensidad").innerHTML = formatNumber(result) + ' Amperios';
  } else if (potencia && resistencia) {
    document.getElementById("output2").style.display = "block";
    results++;
    result = Math.sqrt(potencia / resistencia);
    document.getElementById("resultadoIntensidad").innerHTML = formatNumber(result) + ' Amperios';
  }
}

function calcRes(intensidad, voltaje, potencia) {
  document.getElementById("group1").style.display = "block";
  if (intensidad && potencia) {
    document.getElementById("output3").style.display = "block";
    results++;
    result = potencia / (intensidad ** 2);
    document.getElementById("resultadoResistencia").innerHTML = formatNumber(result) + ' Ohmios';
  } else if (voltaje && intensidad) {
    document.getElementById("output3").style.display = "block";
    results++;
    result = voltaje / intensidad;
    document.getElementById("resultadoResistencia").innerHTML = formatNumber(result) + ' Ohmios';
  } else if (potencia && voltaje) {
    document.getElementById("output3").style.display = "block";
    results++;
    result = (voltaje ** 2) / potencia
    document.getElementById("resultadoResistencia").innerHTML = formatNumber(result) + ' Ohmios';
  }
}

function calcPot(intensidad, voltaje, resistencia) {
  document.getElementById("group1").style.display = "block";
  if (intensidad && voltaje) {
    document.getElementById("output4").style.display = "block";
    results++;
    result = intensidad * voltaje;
    document.getElementById("resultadoPotencia").innerHTML = formatNumber(result) + ' Vatios';
  } else if (resistencia && intensidad) {
    document.getElementById("output4").style.display = "block";
    results++;
    result = resistencia * (intensidad ** 2);
    document.getElementById("resultadoPotencia").innerHTML = formatNumber(result) + ' Vatios';
  } else if (voltaje && resistencia) {
    document.getElementById("output4").style.display = "block";
    results++;
    result = (voltaje ** 2) / resistencia;
    document.getElementById("resultadoPotencia").innerHTML = formatNumber(result) + ' Vatios';
  }
}
