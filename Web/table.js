function agregarFila(){
  magnitud = document.getElementById("inputMagnitud").value;
  valor = document.getElementById("inputValue").value;
  document.getElementById("tabla").insertRow(-1).innerHTML = '<td>'+ magnitud + '</td><td id="'+ magnitud +'">'+ valor + '</td><td><button onClick="eliminarFila()" class="boton">X</td>';
}

function eliminarFila(){
  var td = event.target.parentNode;
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
      magnitudes.vol[0] = 0;
}

function calcular(){

var valIntensidad = parseInt(document.getElementById('Intensidad').innerHTML);
var valResistencia = parseInt(document.getElementById('Resistencia').innerHTML);
document.write( "Voltaje= " + (valIntensidad * valResistencia));
//
//Ahora si!, hay que validar todo lo de antes, segun el valor que se inserto y eso
}
