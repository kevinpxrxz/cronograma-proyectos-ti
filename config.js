// Configuración del link publicado del cronograma.
// token: token de Azure DevOps que usa cualquiera que abra la página (mejor uno solo de lectura de Work Items).
// cronogramas: se traen de Azure la primera vez que alguien abre la página; después cada persona los edita en su navegador.
// El cronograma nunca sube datos a Azure.
// Para llenarlo: en la aplicación abre un cronograma vinculado a Azure y pulsa «Fijar en el link de la aplicación».
// Vacío, la aplicación funciona como siempre (cada persona pone su propio token).
window.CRONOGRAMA_CONFIG = {
  token: '',
  organizacion: '',
  cronogramas: []
};
