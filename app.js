function asignarContenidoAElemento(selector, contenido) {
  let elementoHTML = document.querySelector(selector);
  elementoHTML.innerHTML = contenido;
}

function realizarEncriptacion() {
  // Obtener el texto ingresado
  let texto = document.getElementById("text-input").value.toLowerCase();

  if (texto === "") {
    alert("Por favor, ingresa un mensaje para encriptar");
    return;
  }
  
  // Proceso de encriptación
  texto = texto.replaceAll('e', 'enter');
  texto = texto.replaceAll('i', 'imes');
  texto = texto.replaceAll('a', 'ai');
  texto = texto.replaceAll('o', 'ober');
  texto = texto.replaceAll('u', 'ufat');

  // Ajustes visuales
  asignarContenidoAElemento('h2', '');
  asignarContenidoAElemento('.message', texto);
  
  document.getElementById('img-no-text').remove();
}

function realizarDesencriptacion() {
  // Obtener el texto ingresado
  let texto = document.getElementById("text-input").value.toLowerCase();

  texto = texto.replaceAll('enter', 'e');
  texto = texto.replaceAll('imes', 'i');
  texto = texto.replaceAll('ai', 'a');
  texto = texto.replaceAll('ober', 'o');
  texto = texto.replaceAll('ufat', 'u');

  asignarContenidoAElemento('h2', '');
  asignarContenidoAElemento('.message', texto);
  
  document.getElementById('img-no-text').remove();
}

const copiarContenidoAlPortapapeles = async () => {
  let texto = document.getElementById('message').innerHTML;
  try {
      await navigator.clipboard.writeText(texto);
      alert('Texto copiado al portapapeles');
  } catch (err) {
      alert('No se pudo copiar el texto al portapapeles');
  }
}
