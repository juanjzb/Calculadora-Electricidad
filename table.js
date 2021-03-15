function title(string){
  string = string.toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function agregarFila(){
	tabla = document.getElementById("table_container").style.display="block";
  magnitud = title(document.getElementById("inputMagnitud").value); // la función title convierte rEsISTencia --> Resistencia
  valor = document.getElementById("inputValue").value;
  selectScale = document.getElementById("escale")

  if (array_magnitudes.includes(magnitud) == false){ // Si la magnitud esta dentro del array de magnitudes...
    alert('Magnitud inexistente')
    document.getElementById('inputMagnitud').focus()
    return
  }

  if (valor == ''){
    alert('Inserte un valor')
    document.getElementById('inputValue').focus()
    return
  }

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
    document.getElementById("tabla").insertRow(1).innerHTML = '<td>'+ magnitud + '</td><td id="'+ magnitud +'">'+ valor + '</td><td><button onClick="eliminarFila()" class="boton">X</td>';
  }
  else{
    document.getElementById(magnitud).innerHTML = valor
  }

  document.getElementById("inputMagnitud").value = ''
  document.getElementById("inputValue").value = ''
  updateSelectEscala();
  document.getElementById("inputMagnitud").focus();

}

function eliminarFila(){
  var td = event.target.parentNode;
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
      magnitudes.vol[0] = 0;
}
