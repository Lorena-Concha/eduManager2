/**
 * Capa de datos simulada para la demo estatica (sin backend real).
 * Guarda todo en localStorage, sembrado con datos de ejemplo la primera vez.
 */
(function (global) {
  const KEYS = {
    cursos: 'edu2_cursos',
    estudiantes: 'edu2_estudiantes',
    evaluaciones: 'edu2_evaluaciones',
    seeded: 'edu2_seeded',
  };

  const SEED_CURSOS = [
    { id: 1, nombre: 'Java + Spring Boot desde cero', descripcion: 'Fundamentos de Java y el ecosistema Spring (Boot, MVC, Data JPA).', cupos: 30 },
    { id: 2, nombre: 'APIs REST y Seguridad con Spring Security', descripcion: 'Diseno de servicios REST, autenticacion y autorizacion.', cupos: 25 },
  ];

  const SEED_ESTUDIANTES = [
    {
      id: 1, nombre: 'Diego', apellido: 'Fernandez', email: 'diego.fernandez@example.com',
      rut: '18765432-1', telefono: '+56922223333', fechaNacimiento: '1998-03-10',
      direccion: 'Calle de Prueba 456', ciudad: 'Concepcion', fechaIngreso: '2026-01-15',
      genero: 'MASCULINO', estado: 'ACTIVO', observaciones: 'Estudiante de demostracion.',
      cursos: [1, 2],
    },
    {
      id: 2, nombre: 'Valentina', apellido: 'Munoz', email: 'valentina.munoz@example.com',
      rut: '17654321-k', telefono: '+56933334444', fechaNacimiento: '2001-11-22',
      direccion: 'Pasaje de Prueba 789', ciudad: 'Vina del Mar', fechaIngreso: '2026-02-01',
      genero: 'OTRO', estado: 'EGRESADO', observaciones: 'Estudiante de demostracion.',
      cursos: [],
    },
  ];

  const SEED_EVALUACIONES = [
    { id: 1, estudianteId: 1, cursoId: 1, nota: 6.5, fecha: '2026-04-10', comentario: 'Evaluacion 1 - Fundamentos de Java' },
    { id: 2, estudianteId: 1, cursoId: 1, nota: 5.8, fecha: '2026-05-15', comentario: 'Evaluacion 2 - Spring MVC' },
    { id: 3, estudianteId: 1, cursoId: 1, nota: 6.9, fecha: '2026-06-20', comentario: 'Evaluacion 3 - JPA e Hibernate' },
    { id: 4, estudianteId: 1, cursoId: 2, nota: 6.2, fecha: '2026-05-01', comentario: 'Evaluacion 1 - Spring Security' },
    { id: 5, estudianteId: 1, cursoId: 2, nota: 7.0, fecha: '2026-06-05', comentario: 'Evaluacion 2 - API REST' },
  ];

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function seedIfNeeded() {
    if (localStorage.getItem(KEYS.seeded)) return;
    writeJson(KEYS.cursos, SEED_CURSOS);
    writeJson(KEYS.estudiantes, SEED_ESTUDIANTES);
    writeJson(KEYS.evaluaciones, SEED_EVALUACIONES);
    localStorage.setItem(KEYS.seeded, '1');
  }

  function nextId(arr) {
    return arr.length ? Math.max.apply(null, arr.map(function (x) { return x.id; })) + 1 : 1;
  }

  const Data = {
    resetDemo: function () {
      localStorage.removeItem(KEYS.seeded);
      seedIfNeeded();
    },
    getCursos: function () { return readJson(KEYS.cursos, []); },
    saveCursos: function (arr) { writeJson(KEYS.cursos, arr); },
    getEstudiantes: function () { return readJson(KEYS.estudiantes, []); },
    saveEstudiantes: function (arr) { writeJson(KEYS.estudiantes, arr); },
    getEvaluaciones: function () { return readJson(KEYS.evaluaciones, []); },
    saveEvaluaciones: function (arr) { writeJson(KEYS.evaluaciones, arr); },
    nextId: nextId,
  };

  seedIfNeeded();
  global.EduData = Data;
})(window);
