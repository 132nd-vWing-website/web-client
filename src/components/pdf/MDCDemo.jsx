import React, { Component } from 'react';

import PDFPreviewer from './PDFPreviewer';

import { mdc } from '../../pdf/templates';
import missionData from '../../pdf/mdc/multirole.demo';

export default class MDCDemo extends Component {
  state = {
    pdf: null,
  };

  componentDidMount() {
    const frontPage = mdc.multirole.pages.frontPage(missionData);
    const pdf = mdc.multirole.makePdf('494th-MDC', frontPage);

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
