import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import React, { useContext } from 'react';
import { MissionDataContext } from '../../../contexts/MissionData';
import { PDFPagesContext } from '../../pdf/PDFPagesProvider';

/**
 * Creates a pdf document based on the current pages in PDFPagesContext
 * Note that this component passes props to the antd button element for customization
 */
export default function PrintPdfButton(props) {
  // const { pages } = props;

  const { missionData } = useContext(MissionDataContext);
  const { pages, generatePDF } = useContext(PDFPagesContext);

  // const generatePDF = () => {
  //   const content = [];
  //   pages.forEach((page) => {
  //     if (page.createPage) {
  //       content.push(page.createPage(missionData));
  //     }
  //     return null;
  //   });

  //   /**  Generate and then open the pdf */
  //   const pdf = pdfBuilder.makePdf(`132ND-MDC-${missionData.missionNumber}`, content);
  //   pdf.open();
  // };

  const handleClick = () => {
    generatePDF(pages, missionData, `132ND-MDC-${missionData.missionNumber}`);
  };

  return (
    <Button {...props} onClick={handleClick}>
      Print MDC
    </Button>
  );
}
