import React, { Component } from 'react';

import PDFPreviewer from './PDFPreviewer';

import pdfBuilder, { mdc } from '../../pdf/pdfBuilder';

export default class MDCDemo extends Component {
  state = {
    pdf: null,
  };

  componentDidMount() {
    const { defaultData } = mdc;

    const frontPage = mdc.frontPage.create(defaultData);
    const pdf = pdfBuilder.makePdf('494th-MDC', frontPage);

    pdf.getDataUrl((dataUrl) => {
      this.pdfPreviewFrame.current.src = dataUrl;
    });

    this.setState({ pdf });
  }

  render() {
    const { pdf } = this.state;
    return <PDFPreviewer pdf={pdf} />;
  }
}
