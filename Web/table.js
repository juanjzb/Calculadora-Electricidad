function agregarFila(){
  magnitud = document.getElementById("inputMagnitud").value;

  //if (magnitudes.includes(magnitud) == false){
  //  return
  //}

  valor = document.getElementById("inputValue").value;
  selectScale = document.getElementById("escale")

var scale = selectScale.options[selectScale.selectedIndex].value
  switch (scale) {
    case 'unidad':
      console.log('unidad');
      valor = valor;
      break;
    case 'micro':
      console.log('unidad');
      valor = valor / 1000000;
      break;
    case 'mili':
      valor = valor / 1000;
      break;
    case 'kilo':
      valor = valor * 1000;
      break;
  }
  if (document.getElementById(magnitud) == null){
    document.getElementById("tabla").insertRow(-1).innerHTML = '<td>'+ magnitud + '</td><td id="'+ magnitud +'">'+ valor + '</td><td><button onClick="eliminarFila()" class="boton">X</td>';
  }
  else{
    document.getElementById(magnitud).innerHTML = valor
  }

  document.getElementById("inputMagnitud").value = ''
  document.getElementById("inputValue").value = ''
  document.getElementById("inputMagnitud").focus();

}

function eliminarFila(){
  var td = event.target.parentNode;
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
      magnitudes.vol[0] = 0;
}
