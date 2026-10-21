const btnSubir = document.getElementById('btnSubir');
const inputImagen = document.getElementById('inputImagen');
const tarjetaInfo = document.getElementById('tarjetaInfo');
const infoArchivo = document.getElementById('infoArchivo');
const previewImagen = document.getElementById('previewImagen');

btnSubir.addEventListener('click', () => {
  inputImagen.click();
});

inputImagen.addEventListener('change', () => {
  const archivo = inputImagen.files[0];

  if (!archivo) {
    return;
  }

  infoArchivo.innerHTML = `
    Nombre: ${archivo.name}<br>
    Tipo: ${archivo.type}<br>
    Tamaño: ${archivo.size} bytes
  `;

  const lector = new FileReader();
  lector.onload = (evento) => {
    previewImagen.src = evento.target.result;
    tarjetaInfo.hidden = false;
  };
  lector.readAsDataURL(archivo);
});
