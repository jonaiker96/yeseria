document.getElementById('submit-btn').addEventListener('click', function(event) {
  // Prevenir envío tradicional del formulario
  event.preventDefault();
  
  // 1. Reemplaza por tu número de WhatsApp con código de país
  const telefono = "5491126203720"; 

  // 2. Obtener el texto que escribió el usuario
  const texto = document.getElementById('mensajeTexto').value.trim();

  // 3. Validar que no envíe un mensaje vacío
  if (texto === "") {
    alert("Por favor, escribe un mensaje antes de enviar.");
    return;
  }

  // 4. Codificar el texto para que la URL sea segura (maneja espacios, saltos de línea, etc.)
  const mensajeCodificado = encodeURIComponent(texto);

  // 5. Crear la URL de WhatsApp y abrirla en una nueva pestaña
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  window.open(urlWhatsApp, '_blank');
});