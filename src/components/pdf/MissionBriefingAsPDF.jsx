import React, { Component } from 'react';

import { mdc } from '../../pdf/templates';
import missionData from '../../pdf/mdc/multirole.demo';

export default class MissionBriefingAsPDF extends Component {
  pdfPreviewFrame = React.createRef();

  componentDidMount() {
    const frontPage = mdc.multirole.pages.frontPage(missionData);
    const pdf = mdc.multirole.makePdf('494th-MDC', frontPage);

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
