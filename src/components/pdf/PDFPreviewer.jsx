import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PDFPreviewer extends Component {
  pdfPreviewFrame = React.createRef();

  shouldComponentUpdate(nextProps) {
    const { pdf } = this.props;
    if (pdf !== nextProps.pdf) return true;
    return false;
  }

  componentDidUpdate() {
    const { pdf } = this.props;
    pdf.getDataUrl((dataUrl) => {
      this.pdfPreviewFrame.current.src = dataUrl;
    });
  }

  render() {
    return (
      <iframe
        title='preview'
        frameBorder='0'
        style={{ minWidth: '100%', minHeight: '50vh' }}
        ref={this.pdfPreviewFrame}
      />
    );
  }
}

PDFPreviewer.propTypes = {
  pdf: PropTypes.object,
};

PDFPreviewer.defaultProps = {
  pdf: null,
};
