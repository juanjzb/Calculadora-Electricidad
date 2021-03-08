function agregarFila(){
  magnitud = document.getElementById("inputMagnitud").value;
  valor = document.getElementById("inputValue").value;
  document.getElementById("tabla").insertRow(-1).innerHTML = '<td>'+ magnitud + '</td><td>'+ valor + '</td><td><button class="boton"></td>';
}

function eliminarFila(){
  var table = document.getElementById("tabla");
  var rowCount = table.rows.length;

  if(rowCount > 1)
    table.deleteRow(rowCount -1);
}
