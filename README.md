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
- **Modo oscuro.**

## Historias de usuario (aplicación aparte: `historias.html`)

Aplicación independiente del cronograma para escribir historias de usuario y subirlas al tablero de **Azure DevOps**. Se abre en `https://<tu-usuario>.github.io/<repositorio>/historias.html`.

- **Historias:** código automático (HU-001, HU-002…), título y una **descripción extensa**. El botón *"Insertar guía de descripción"* agrega una estructura con: Como… quiero… para…, contexto, detalle de la funcionalidad, reglas de negocio, fuera de alcance y notas. La aplicación avisa si la descripción es corta.
- **Mockups e imágenes:** hasta 10 por historia. Se agregan arrastrándolas, con el botón *"Elegir imágenes"* o pegando una captura con Ctrl + V. Las imágenes muy grandes se reducen automáticamente. Se ven en miniatura y se amplían con un clic, se incluyen en el respaldo y se suben a Azure DevOps como adjuntos visibles en la descripción.
- **Revisión de ambigüedades con la IA que elijas:** Claude, OpenAI (ChatGPT), Google Gemini, Azure OpenAI o cualquier API compatible con OpenAI (Groq, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio…). La IA revisa la descripción, los criterios y los mockups de cada historia y señala:
  - términos ambiguos y criterios no verificables;
  - información que falta y contradicciones;
  - casos no cubiertos y diferencias con los mockups;
  - historias duplicadas o en conflicto entre sí.

  Cada hallazgo trae severidad, cita, problema, sugerencia y, cuando aplica, un **criterio ya redactado**. Las ambigüedades se resuelven desde la misma tarjeta:
  - **Reemplazar CA-0X** con el criterio corregido, o **agregarlo** como nuevo;
  - **Editar y agregar**, para ajustarlo antes de guardarlo;
  - **Corregir en la descripción**, que abre el editor con el texto ambiguo seleccionado;
  - **Descartar** lo que no aplique.

  - **Corregir con IA:** la IA reescribe la descripción y los criterios para resolver todas las ambigüedades pendientes.
    - Antes puedes responder sus preguntas o darle indicaciones, por ejemplo *"el bloqueo dura 15 minutos"*.
    - No inventa datos del negocio: lo que falta queda marcado como **[POR DEFINIR: …]**.
    - Muestra el antes y el después, y solo cambia la historia si pulsas **Aplicar cambios**.

  Lo resuelto queda marcado con ✓ y deja de contar como pendiente. Los criterios sugeridos se agregan uno a uno o con **"Agregar todos"**. También incluye preguntas para el negocio. Antes de subir a Azure DevOps, la aplicación avisa si quedan ambigüedades importantes o historias sin revisar. Sin conectar una IA, *"Copiar para cualquier chat"* copia las instrucciones y las historias para pegarlas en ChatGPT, Gemini, Copilot, Claude u otro chat.
- **Criterios de aceptación:** una frase por criterio, numerada CA-01, CA-02…, que dice qué se espera de la funcionalidad. Por ejemplo: *"Como usuario, debo poder acceder al portal con mi usuario y contraseña."* Los criterios escritos en formatos anteriores se convierten solos a una frase.
- **Validación:** avisa si un criterio está incompleto.
- **Herramientas:** buscador, duplicar, descarga en Excel (una fila por criterio) y respaldo `.json`.
- **Azure DevOps:** te conectas solo con la **organización** y un **token**. El botón **Proyectos** de arriba muestra el destino actual (por ejemplo *"Gestión Médica › Citas"*). Al pulsarlo eliges o cambias, cuando quieras:
  - el **proyecto**;
  - la **ruta de área**;
  - el **sprint** (opcional).

  Las listas se cargan desde Azure. El tipo de elemento (*User Story*, *Product Backlog Item*, *Requirement* o *Issue*) se detecta solo según el proceso del proyecto. Las historias **nuevas** se crean en el área y sprint elegidos, con título, descripción, criterios de aceptación y la etiqueta `HU-xxx`. Las que ya subiste se siguen **actualizando donde están**, aunque cambies de proyecto, así no se duplican.
- **Ver el proyecto:** *"Ver historias del tablero"* muestra los elementos que ya están en Azure para ese proyecto y área (estado, asignado, sprint), con buscador y filtro por estado. Marca cuáles salieron de la aplicación. Las historias de la aplicación se pueden filtrar en **Todas**, **De este proyecto y área** o **Sin subir o con cambios**.
- **Sin criterios antiguos:** si editas una historia ya subida, aparece como *"tiene cambios sin subir"*. Al volver a subirla se **actualiza el mismo elemento de trabajo** y su título, descripción y criterios se **reemplazan por completo**. Las etiquetas, el estado, el responsable y los comentarios que tenga en Azure no se tocan.
- **Si borraron el elemento en Azure,** al volver a subir la historia se crea de nuevo.

### Conectar con Azure DevOps

1. En Azure DevOps abre **User settings → Personal access tokens → New Token**. Dale los permisos **Work Items: Read & write** y **Project and Team: Read**.
2. En la aplicación pulsa **Conectar Azure DevOps** y escribe:
   - la **organización**, por ejemplo `miempresa` o `https://dev.azure.com/miempresa`;
   - el **token**.
3. Pulsa **Probar conexión** y luego **Guardar conexión**.
4. Se abre **Proyectos**: elige **proyecto**, **ruta de área** y, si quieres, **sprint**. Para cambiarlos después, pulsa **Proyectos**.

### Conectar la IA

1. Pulsa **Conectar IA** y elige el **proveedor**:

   | Proveedor | Qué necesitas | Dónde se obtiene la clave |
   |---|---|---|
   | Claude (Anthropic) | Clave de API (usa Claude Opus 5.5) | console.anthropic.com → API keys |
   | OpenAI (ChatGPT) | Clave de API y modelo | platform.openai.com → API keys |
   | Google Gemini | Clave de API y modelo | aistudio.google.com → Get API key |
   | Azure OpenAI | Endpoint del recurso, nombre del deployment, versión de la API y clave | Portal de Azure → tu recurso → Claves y punto de conexión |
   | Compatible con OpenAI | URL base de la API, modelo y clave (opcional si es local) | La del proveedor (Groq, Mistral, DeepSeek, OpenRouter…) |

2. Con **Cargar modelos** eliges el modelo de una lista (OpenAI, Gemini y compatibles).
3. Pulsa **Probar conexión** y luego **Guardar**.
4. Pulsa **"Revisar ambigüedades con IA"** para revisar las historias pendientes, o **"Revisar con IA"** en una historia.

Más detalles:
- Si tu modelo no acepta imágenes, desmarca *"Enviar los mockups a la IA"*.
- La clave solo se envía al proveedor elegido y, como el token de Azure, por defecto se olvida al cerrar la pestaña. Cada revisión o corrección tiene un costo según el proveedor y el largo de las historias.
- Con Ollama o LM Studio en tu computadora, el servidor debe permitir conexiones desde la página (CORS).

El token de Azure DevOps solo se envía a Azure DevOps. Por defecto se olvida al cerrar la pestaña. Si marcas *"Recordar el token"*, queda guardado en ese navegador; hazlo solo en una computadora de uso personal.

## Dónde se guardan los datos

En el **almacenamiento del navegador** (`localStorage`) de cada persona:

- Cada persona ve **solo sus propios** cronogramas e historias.
- Si borras los datos del navegador, o usas otra computadora u otro navegador, no los verás.
- Las historias de usuario tienen **Exportar / Importar respaldo** para pasarlas a otra computadora o a otra persona. El cronograma no tiene respaldo; su información se puede descargar en **Excel**.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube `index.html` y este `README.md`.
2. En el repositorio ve a **Settings → Pages**.
3. En **Source** elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
4. En unos minutos la página queda en `https://<tu-usuario>.github.io/<repositorio>/`.

## Requisitos

- Un navegador moderno (Chrome, Edge, Firefox o Safari).
- Conexión a internet para cargar las fuentes y la librería que genera el Excel ([ExcelJS](https://github.com/exceljs/exceljs), desde cdnjs).
