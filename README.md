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

## Historias de usuario (aplicación aparte: `historias.html`)

Aplicación independiente del cronograma para escribir historias de usuario y subirlas al tablero de **Azure DevOps**. Se abre en `https://<tu-usuario>.github.io/<repositorio>/historias.html`.

- **Historias:** código automático (HU-001, HU-002…), título, descripción y criterios de aceptación **Dado / Cuando / Entonces**.
- **Validación:** avisa si un criterio está incompleto.
- **Herramientas:** buscador, duplicar, descarga en Excel (una fila por criterio) y respaldo `.json`.
- **Azure DevOps:** cada historia se crea como *User Story*, *Product Backlog Item* o *Issue* (según el proceso del proyecto), con:
  - título, descripción y criterios de aceptación;
  - la etiqueta `HU-xxx`;
  - opcionalmente, ruta de área e iteración.
- **Sin criterios antiguos:** si editas una historia ya subida, aparece como *"tiene cambios sin subir"*. Al volver a subirla se **actualiza el mismo elemento de trabajo** y su título, descripción y criterios se **reemplazan por completo**. Las etiquetas, el estado, el responsable y los comentarios que tenga en Azure no se tocan.
- **Si borraron el elemento en Azure,** al volver a subir la historia se crea de nuevo.

### Conectar con Azure DevOps

1. En Azure DevOps abre **User settings → Personal access tokens → New Token**. Dale el permiso **Work Items: Read & write**.
2. En la aplicación pulsa **Conectar Azure DevOps** y completa:
   - la organización, por ejemplo `miempresa` o `https://dev.azure.com/miempresa`;
   - el proyecto;
   - el tipo de elemento de trabajo;
   - el token.
3. Pulsa **Probar conexión** y luego **Guardar conexión**.

El token solo se envía a Azure DevOps. Por defecto se olvida al cerrar la pestaña. Si marcas *"Recordar el token"*, queda guardado en ese navegador; hazlo solo en una computadora de uso personal.

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
