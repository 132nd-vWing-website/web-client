import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { MissionDataContext } from '../../../contexts/MissionData';
import pdfBuilder from '../../../pdf/pdfBuilder';

export default function PrintPdfButton(props) {
  const { pages } = props;

  const { missionData } = useContext(MissionDataContext);

  const generatePDF = () => {
    const content = [];
    pages.forEach((page) => {
      if (page.createPage) {
        content.push(page.createPage(missionData));
      }
      return null;
    });

    /**  Generate and then open the pdf */
    const pdf = pdfBuilder.makePdf(`132ND-MDC-${missionData.missionNumber}`, content);
    pdf.open();
  };

  return (
    <Button {...props} type='primary' onClick={generatePDF} style={{ marginLeft: '0.5em' }}>
      Print MDC
    </Button>
  );
}

PrintPdfButton.propTypes = {
  pages: PropTypes.array,
};

PrintPdfButton.defaultProps = {
  pages: [],
};
