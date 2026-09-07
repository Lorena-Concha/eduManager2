/**
 * Barra de navegacion comun a todas las paginas protegidas. Se inyecta en
 * <div id="nav-placeholder"></div> y reacciona al rol elegido en el toggle
 * Admin/Estudiante (no hay sesion real, es solo para la demo).
 */
(function () {
  function renderNav() {
    const container = document.getElementById('nav-placeholder');
    if (!container) return;

    const isAdmin = EduAuth.isAdmin();
    const estudiantes = EduData.getEstudiantes();
    const yo = estudiantes.find(function (e) { return e.id === EduAuth.estudianteDemoId; });
    const nombreUsuario = isAdmin ? 'admin' : (yo ? yo.nombre + ' ' + yo.apellido : 'Estudiante');

    container.innerHTML =
      '<nav class="navbar">' +
      '  <div class="navbar-brand"><a href="dashboard.html">SpringEduManager</a></div>' +
      '  <div class="navbar-links">' +
      '    <a href="dashboard.html">Inicio</a>' +
      '    <a href="cursos.html">Cursos</a>' +
      '    <a href="evaluaciones.html">Evaluaciones</a>' +
      (isAdmin ? '    <a href="estudiantes.html">Estudiantes</a>' : '') +
      '    <span class="role-toggle">' +
      '      <button type="button" data-role="ADMIN" class="' + (isAdmin ? 'active' : '') + '">Admin</button>' +
      '      <button type="button" data-role="USER" class="' + (!isAdmin ? 'active' : '') + '">Estudiante</button>' +
      '    </span>' +
      '    <span class="navbar-user">' + nombreUsuario + '</span>' +
      '    <span class="navbar-logout"><button type="button" id="btn-logout">Salir</button></span>' +
      '  </div>' +
      '</nav>';

    container.querySelectorAll('[data-role]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        EduAuth.setRole(btn.getAttribute('data-role'));
        location.reload();
      });
    });
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        EduAuth.logout();
        window.location.href = 'index.html';
      });
    }
  }

  function renderDemoBanner() {
    const container = document.getElementById('demo-banner-placeholder');
    if (!container) return;
    container.innerHTML =
      '<div class="demo-banner">' +
      'Esta es una demo estatica de portafolio (solo HTML/CSS/JS, sin backend real). ' +
      '<a href="https://github.com/Lorena-Concha/eduManager" target="_blank" rel="noopener">Ver el proyecto Spring Boot completo &rarr;</a>' +
      '</div>';
  }

  window.EduNav = { render: renderNav, renderDemoBanner: renderDemoBanner };
})();
