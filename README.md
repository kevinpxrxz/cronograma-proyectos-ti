# Cronograma de Proyectos TI

Aplicación web para planificar y seguir proyectos de TI: fases, tareas con fechas **Desde / Hasta**, avance manual en %, alertas de atraso y exportación a Excel.

Es un único archivo (`index.html`). No necesita servidor ni base de datos.

## Funciones

- **Varios cronogramas:** crea, cambia y elimina cronogramas. Cada uno guarda sus propias fases y tareas.
- **Periodo del proyecto:** fecha de inicio y de fin. Avisa si una tarea queda fuera del periodo.
- **Fases libres:** créalas, renómbralas y agrega tareas con el botón **+** de cada fase.
- **Avance manual por tarea**, con:
  - **Atrasada:** pasó la fecha *Hasta* y no está al 100%.
  - **En riesgo:** va más de 15 puntos por debajo de lo planificado.
  - **Completada con atraso:** se guarda la fecha real de término y los días de atraso.
- **¿Cómo vamos?:** avance planificado frente a real, y cantidad de tareas por estado.
- **Avance por fase.**
- **Descargar Excel:** hoja *Cronograma* y hoja *Avance en el tiempo*.
- **Métricas de todos los proyectos:**
  - indicadores generales: proyectos, avance promedio, proyectos con retraso, tareas atrasadas y entregas a tiempo;
  - avance de cada proyecto frente a lo planificado;
  - estado de las tareas por proyecto;
  - carga por responsable;
  - lista de tareas atrasadas.
- **Respaldo:** exporta e importa todos tus cronogramas en un archivo `.json`.
- **Modo oscuro.**

## Dónde se guardan los datos

En el **almacenamiento del navegador** (`localStorage`) de cada persona:

- Cada persona ve **solo sus propios** cronogramas.
- Si borras los datos del navegador, o usas otra computadora u otro navegador, no los verás.
- **Usa "Exportar respaldo"** de vez en cuando. Para pasar los cronogramas a otra computadora o a otra persona, ella usa **"Importar respaldo"** con ese archivo.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube `index.html` y este `README.md`.
2. En el repositorio ve a **Settings → Pages**.
3. En **Source** elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
4. En unos minutos la página queda en `https://<tu-usuario>.github.io/<repositorio>/`.

## Requisitos

- Un navegador moderno (Chrome, Edge, Firefox o Safari).
- Conexión a internet para cargar las fuentes y la librería que genera el Excel ([ExcelJS](https://github.com/exceljs/exceljs), desde cdnjs).
