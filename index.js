const html_to_pdf = require("html-pdf-node");
const fs = require("fs");

let options = { format: 'A4' };
let file = [{ url: "http://127.0.0.1:5500/index.html", name: 'CV_JosueGuzman_tdp.pdf' }];

html_to_pdf.generatePdfs(file, options)
  .then(output => {
    console.log("PDF Buffer:-", output);
    const pdfBuffer = output[0].buffer;
    // Guardar el PDF en un archivo
    fs.writeFileSync(output[0].name, pdfBuffer);
    console.log('PDF generado con éxito');
  })
  .catch(error => {
    console.error('Error al generar el PDF:', error);
  });