# FixCar - Sistema Web para Taller Mecánico

## Integrantes del Equipo
- Luis Enrique Medina Jacobo


---

# Introducción

FixCar es una aplicación web desarrollada como proyecto académico para la materia de Diseño de Interfaces. El sistema fue diseñado para simular el entorno digital de un taller mecánico automotriz, ofreciendo una interfaz moderna, amigable y funcional para los usuarios.

El proyecto busca facilitar la gestión básica de servicios automotrices mediante módulos como registro de vehículos, login de usuarios, catálogo de servicios y venta de accesorios.

---

# Resumen del Sistema

El sistema permite:

- Visualizar información del taller mecánico.
- Consultar servicios automotrices.
- Registrar usuarios.
- Iniciar sesión.
- Registrar vehículos en servicio.
- Editar y eliminar registros de vehículos.
- Simular compras de accesorios automotrices.
- Programar citas de servicio.

La aplicación fue desarrollada utilizando tecnologías web frontend.

---

# Requisitos Funcionales

- Mostrar información del taller.
- Permitir el registro de usuarios.
- Permitir el inicio de sesión.
- Registrar vehículos.
- Editar registros de vehículos.
- Eliminar registros de vehículos.
- Mostrar catálogo de servicios.
- Mostrar accesorios automotrices.
- Simular carrito de compras.
- Programar citas.

---

# Requisitos No Funcionales

- Interfaz amigable y responsive.
- Diseño adaptable a dispositivos móviles.
- Navegación sencilla.
- Uso de Bootstrap para diseño visual.
- Almacenamiento local mediante localStorage.

---

# Requisitos Técnicos

## Software Utilizado

- HTML5
- CSS3
- JavaScript
- Bootstrap 5

## Herramientas

- Visual Studio Code
- GitHub
- Navegador Web

---

# Arquitectura del Sistema

El sistema fue desarrollado bajo una arquitectura frontend estática basada en múltiples páginas HTML conectadas mediante navegación web.

La persistencia de datos se realizó mediante localStorage del navegador.

---

# Instalación

## Paso 1
Descargar o clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

## Paso 2
Abrir la carpeta del proyecto en Visual Studio Code.

## Paso 3
Ejecutar el archivo:

```plaintext
index.html
```

---

# Uso del Sistema

## Login y Registro
El usuario puede registrarse mediante la página de registro y posteriormente iniciar sesión.

## Registro de Vehículos
El sistema permite:
- Registrar vehículos
- Editar vehículos
- Eliminar vehículos

## Servicios
Se pueden consultar los servicios ofrecidos por el taller.

## Accesorios
Se pueden agregar productos a un carrito de compras simulado.

---

# Base de Datos (Modelado)

El sistema utiliza localStorage como mecanismo de almacenamiento local para guardar:

- Usuarios registrados
- Vehículos registrados

## Clase Vehículo

| Campo | Tipo |
|---|---|
| id | Number |
| cliente | String |
| marca | String |
| modelo | String |
| anio | Number |
| falla | String |

---

# Mantenimiento y Actualizaciones

El sistema puede actualizarse agregando:
- Base de datos real
- Backend con Node.js
- Sistema de autenticación avanzado
- Panel administrativo
- Integración con APIs

---

# Pruebas

Se realizaron pruebas funcionales para verificar:

- Registro de usuarios
- Inicio de sesión
- CRUD de vehículos
- Navegación entre páginas
- Funcionamiento del carrito
- Validación de formularios

---

# Seguridad

- Validación básica de formularios.
- Persistencia local de información.
- Restricción de campos vacíos.

---

# Referencias y Recursos

- Bootstrap:
https://getbootstrap.com/

- MDN Web Docs:
https://developer.mozilla.org/

- Visual Studio Code:
https://code.visualstudio.com/

- GitHub:
https://github.com/

---

# Forma de Ejecución

1. Abrir el proyecto en Visual Studio Code.
2. Ejecutar el archivo `index.html`.
3. Navegar por las diferentes secciones del sistema.

---

# Commits Realizados

- Creación de interfaz principal.
- Desarrollo de página de servicios.
- Desarrollo de CRUD de vehículos.
- Implementación de login y registro.
- Desarrollo de carrito de accesorios.
- Documentación del sistema.
