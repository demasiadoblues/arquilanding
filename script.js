// script.js

// Obtener el formulario y agregar un evento de envío
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  // Obtener los valores de los campos del formulario
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Validar los campos del formulario
  if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }

  // Aquí puedes agregar la lógica para enviar el correo electrónico utilizando el servicio de tu elección

  // Mostrar mensaje de éxito
  alert('¡El formulario ha sido enviado con éxito!');
  // Restablecer los campos del formulario
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});


