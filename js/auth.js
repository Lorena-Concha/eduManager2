/**
 * "Sesion" simulada para la demo: no valida credenciales reales, solo
 * recuerda si "iniciaste sesion" y con que rol estas mirando la app.
 */
(function (global) {
  const KEY_LOGGED_IN = 'edu2_logged_in';
  const KEY_ROLE = 'edu2_role';
  const KEY_SHOW_WELCOME = 'edu2_show_welcome';
  const ESTUDIANTE_DEMO_ID = 1; // Diego Fernandez, usado para la vista USER

  const Auth = {
    isLoggedIn: function () {
      return localStorage.getItem(KEY_LOGGED_IN) === '1';
    },
    login: function () {
      localStorage.setItem(KEY_LOGGED_IN, '1');
      localStorage.setItem(KEY_SHOW_WELCOME, '1');
      if (!localStorage.getItem(KEY_ROLE)) {
        localStorage.setItem(KEY_ROLE, 'ADMIN');
      }
    },
    /** true la primera vez que se consulta despues de un login(); se auto-limpia. */
    consumeShowWelcome: function () {
      const show = localStorage.getItem(KEY_SHOW_WELCOME) === '1';
      localStorage.removeItem(KEY_SHOW_WELCOME);
      return show;
    },
    logout: function () {
      localStorage.removeItem(KEY_LOGGED_IN);
    },
    getRole: function () {
      return localStorage.getItem(KEY_ROLE) || 'ADMIN';
    },
    setRole: function (role) {
      localStorage.setItem(KEY_ROLE, role);
    },
    isAdmin: function () {
      return Auth.getRole() === 'ADMIN';
    },
    estudianteDemoId: ESTUDIANTE_DEMO_ID,
    /** Redirige a login.html si no hay "sesion" activa. Llamar al inicio de toda pagina protegida. */
    requireLogin: function () {
      if (!Auth.isLoggedIn()) {
        window.location.href = 'login.html';
      }
    },
  };

  global.EduAuth = Auth;
})(window);
