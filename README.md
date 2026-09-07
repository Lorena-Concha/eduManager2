# SpringEduManager — Demo estática (portafolio)

Vista de solo-frontend (HTML + CSS + JS vanilla, sin backend) de
[SpringEduManager](https://github.com/Lorena-Concha/eduManager), un proyecto real de
Spring Boot + MVC + JPA + Spring Security + API REST.

Esta versión reproduce las pantallas de la aplicación para poder verla y navegarla
directamente desde un link (por ejemplo, en GitHub Pages), sin necesitar Java, Maven ni MySQL.

## Cómo funciona

- No hay backend: los datos (cursos, estudiantes, evaluaciones) viven en el navegador
  (`localStorage`), sembrados con datos de ejemplo la primera vez que se abre.
- El login **no valida credenciales reales** — cualquier usuario/contraseña te deja entrar,
  para dejarlo claro como demo.
- Ya adentro, un selector **Admin / Estudiante** en la barra superior cambia la vista, para
  mostrar ambos roles sin necesitar cuentas reales.
- CRUD de estudiantes, cursos y evaluaciones funciona de verdad (crea/edita/elimina), pero
  todo queda guardado solo en tu navegador.

## Cómo verla

Abrir `index.html` directamente en el navegador, o publicarla con **GitHub Pages**
(Settings → Pages → Deploy from branch → `main` / raíz).

## Proyecto completo

El backend real (Spring Boot, base de datos, seguridad, API REST) está en:
https://github.com/Lorena-Concha/eduManager
