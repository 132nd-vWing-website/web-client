import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import pdfBuilder from '../../pdf/pdfBuilder'; // TEMP!!!

/**
 * PDFPages Context
 */
export const PDFPagesContext = React.createContext({
  pages: [],
  setPages: () => null,
  generatePDF: () => null,
});

export const PDFPagesConsumer = PDFPagesContext.Consumer;

/**
 * Generates a PDF based on the pages provided
 * @param {array} pages - Array of pages to generate
 * @param {array} data - Data used for populating the pages
 * @param {string} title - Document name
 */
export const generatePDF = (pages, data, title) => {
  const content = [];
  pages.forEach((page) => {
    if (page.createPage) {
      content.push(page.createPage(data));
    }
    return null;
  });

  /**  Generate and then open the pdf */
  const pdf = pdfBuilder.makePdf(`${title}`, content);
  pdf.open();
};

export default function PDFPagesProvider(props) {
  const { children } = props;
  const [pages, setPages] = useState([]);
  useEffect(() => {
    console.log('Context.pages: ', pages);
  }, [pages]);

  return (
    <PDFPagesContext.Provider value={{ pages, setPages, generatePDF }}>
      {children}
    </PDFPagesContext.Provider>
  );
}

PDFPagesProvider.propTypes = {
  children: PropTypes.object,
};

PDFPagesProvider.defaultProps = {
  children: {},
};
