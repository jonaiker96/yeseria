document.addEventListener('DOMContentLoaded', function() {
  // Actualizar estado activo del menú al hacer scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Botón Ir al Inicio (Scroll to Top)
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const whatsappBtn = document.querySelector('.whatsapp');
  
  // Mostrar/ocultar botón al hacer scroll
  window.addEventListener('scroll', () => {
    // Mostrar el botón cuando el usuario haya hecho scroll de más de 300px
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
      whatsappBtn.classList.add('scroll-active');
    } else {
      scrollToTopBtn.classList.remove('show');
      whatsappBtn.classList.remove('scroll-active');
    }
  });

  // Scroll suave al inicio
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Manejador del formulario y WhatsApp
document.getElementById('submit-btn').addEventListener('click', function(event) {
  // Prevenir envío tradicional del formulario
  event.preventDefault();
  
  // 1. Número de WhatsApp con código de país
  const telefono = "5491126203720"; 

  // 2. Obtener datos del formulario
  const nombre = document.querySelector('input[placeholder="Nombre"]').value.trim();
  const apellido = document.querySelector('input[placeholder="Apellido"]').value.trim();
  const email = document.querySelector('input[placeholder="Correo electrónico"]').value.trim();
  const telefono_usuario = document.querySelector('input[placeholder="Teléfono"]').value.trim();
  const texto = document.getElementById('mensajeTexto').value.trim();

  // 3. Validar que no envíe un mensaje vacío
  if (texto === "") {
    alert("Por favor, escribe un mensaje antes de enviar.");
    return;
  }

  if (nombre === "") {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  // 4. Crear mensaje formateado para WhatsApp
  const mensajeFormato = `
*Nuevo mensaje desde Los Bendigo*

*Nombre:* ${nombre} ${apellido}
*Email:* ${email}
${telefono_usuario ? `*Teléfono:* ${telefono_usuario}` : ''}

*Mensaje:*
${texto}
  `.trim();

  // 5. Codificar el texto para que la URL sea segura
  const mensajeCodificado = encodeURIComponent(mensajeFormato);

  // 6. Crear la URL de WhatsApp y abrirla en una nueva pestaña
  const urlWhatsApp = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  window.open(urlWhatsApp, '_blank');

  // 7. Limpiar el formulario
  document.querySelector('form').reset();
});

// Modal para imágenes de proyectos
document.querySelectorAll('.clickable-image').forEach(image => {
  image.addEventListener('click', function(e) {
    e.preventDefault();
    const modalImage = document.getElementById('modalImage');
    modalImage.src = this.src;
    modalImage.alt = this.alt;
  });
});