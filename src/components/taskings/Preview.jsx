import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PDFPreviewer from '../pdf/PDFPreviewer';

import { mdc } from '../../pdf/templates';
import missionData from '../../pdf/mdc/multirole.demo';

export default class Preview extends Component {
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

  // shouldComponentUpdate(nextProps) {
  //   const { data } = this.props;
  //   if (data !== nextProps.data) return true;
  //   return false;
  // }

  componentDidUpdate(prevProps) {
    const { data } = this.props;

    if (data !== prevProps.data) {
      const frontPage = mdc.multirole.pages.frontPage(data);
      const pdf = mdc.multirole.makePdf('494th-MDC', frontPage);

      this.setState({ pdf });
    }
  }

  render() {
    const { pdf } = this.state;

    // if (pdf === null) return <div>I AM Loading...</div>;
    return <PDFPreviewer pdf={pdf} />;
  }
}

Preview.propTypes = {
  data: PropTypes.object,
};

Preview.defaultProps = {
  data: null,
};
