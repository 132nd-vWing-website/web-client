import React, { Component } from 'react';

import { mdc } from './templates';

export default class MissionBriefingAsPDF extends Component {
  pdfPreviewFrame = React.createRef();

  componentDidMount() {
    const pdf = mdc.panthers.makePdf();

    pdf.getDataUrl((dataUrl) => {
      this.pdfPreviewFrame.current.src = dataUrl;
    });
  }

  render() {
    return (
      <React.Fragment>
        Preview:
        <iframe
          title='preview'
          frameBorder='0'
          style={{ minWidth: '100%', minHeight: '50vh' }}
          ref={this.pdfPreviewFrame}
        />
      </React.Fragment>
    );
  }
}
