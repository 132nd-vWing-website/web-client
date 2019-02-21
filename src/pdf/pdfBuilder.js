// import pdfMake from 'pdfmake/build/pdfmake';
import Bahnschrift from './fonts/bahnschrift';

/** sub-classes */
import mdc from './mdc';

const pdfMake = import(/* webpackChunkName: "jsx-pdf-make" */ 'pdfmake/build/pdfmake');

// const pdfMake = import('pdfmake/build/pdfmake').then((module) => module.default);
// const mdc = import('./mdc').then((module) => module.default);

/** Fonts */
pdfMake.vfs = { ...Bahnschrift };

/**
 * The pieces that make up the various pdf templates are broken down to 'components' in
 * order to make templating PDFs a little bit easier. These components are then used to put
 * together a document definition and create a PDF. This also exposes those components
 * and make them reusable.
 *
 * @exports pdfBuilder               - root class for all templates
 * @exports pdfBuilder.mdc           - root class for all MDCs
 */
const pdfBuilder = {
  mdc,
};

/**
 * Generates and returns a pdfMake Object (PDF)
 * @param {string} title - Page/filename
 * @param {array} content - An array of makePDF content
 */

pdfBuilder.makePdf = (title, content) => {
  const docDefinition = {
    info: {
      title,
      author: '132nd vWing',
      subject: 'Flight Planning',
    },
    pageSize: 'A4',
    pageMargins: 5,
    defaultStyle: {
      font: 'Bahnschrift',
      fontSize: 11,
    },
    content,
  };

  // Set fonts
  pdfMake.fonts = {
    Bahnschrift: {
      normal: 'Bahnschrift.ttf',
      bold: 'Bahnschrift.ttf',
      italics: 'Bahnschrift.ttf',
      bolditalics: 'Bahnschrift.ttf',
    },
  };

  // Compile and return PDF
  const pdf = pdfMake.createPdf(docDefinition);
  return pdf;
};

export { mdc };
export default pdfBuilder;
