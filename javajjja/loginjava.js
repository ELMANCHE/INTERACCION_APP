const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

// Cambiar entre los formularios de Iniciar Sesión y Registrarse
document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

// Seleccionar el botón de Iniciar Sesión y agregar la funcionalidad de redirección
const $btnIniciarSesion = document.getElementById('btnIniciarSesion');

// Redirigir a la página alumno.html cuando se haga clic en "Iniciar Sesión"
$btnIniciarSesion.addEventListener('click', () => {
    window.location.href = './alumno.html'; // Redirige a la página alumno.html
});
