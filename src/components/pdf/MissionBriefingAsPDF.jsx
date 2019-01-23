import React, { Component } from 'react';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class MissionBriefingAsPDF extends Component {
  pdfPreviewFrame = React.createRef();

  componentDidMount() {
    const pdf = this.generatePDF();

    pdf.getDataUrl((dataUrl) => {
      this.pdfPreviewFrame.current.src = dataUrl;
    });
  }

  generatePDF() {
    // Document colors & styles
    const colors = {
      white: '#ffffff',
      black: '#000000',
      darkBlue: '#44546a',
    };

    const styles = {
      pageHeader: {
        alignment: 'center',
        fillColor: colors.darkBlue,
        color: colors.white,
      },
      tableHeader: {
        alignment: 'center',
        fillColor: colors.black,
        color: colors.white,
      },
      default: {
        alignment: 'center',
      },
    };

    // Document Components
    const pageHeader = {
      table: {
        widths: [60, '*', 50, 60],
        body: [
          [
            { text: 'PAGE #1:', style: styles.pageHeader },
            { text: 'GENERAL INFORMATION', style: styles.pageHeader },
            { text: 'MSN NR:', style: styles.pageHeader },
            { text: 'TR9999', style: styles.pageHeader },
          ],
        ],
      },
    };

    const flightinfoHeader = {
      table: {
        widths: [60, '*', 60, '*'],
        body: [
          [
            { text: 'CALLSIGN:', style: styles.tableHeader },
            { text: 'FALCON-2', style: styles.default },
            { text: 'PACKAGE:', style: styles.tableHeader },
            { text: 'ALPHA', style: styles.default },
          ],
          [
            { text: 'ATIS:', style: styles.tableHeader },
            {
              text: 'LLRD INFO: E 0655LT RWY30 TL110 360/5KT BLU 30/25 Q1040 NOSIG',
              style: styles.default,
              colSpan: 3,
            },
          ],
        ],
      },
    };

    const airfieldInfo = {
      table: {
        widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
        body: [
          [
            {
              text: '',
              style: styles.tableHeader,
            },
            { text: 'AIRBASE', style: styles.tableHeader },
            { text: 'TCN', style: styles.tableHeader },
            { text: 'GND', style: styles.tableHeader },
            { text: 'TWR', style: styles.tableHeader },
            { text: 'ELEV', style: styles.tableHeader },
            { text: 'RWY', style: styles.tableHeader },
            { text: 'ILS', style: styles.tableHeader },
          ],
          [
            { text: 'DEP', style: styles.tableHeader },
            { text: 'UGKO', style: styles.default },
            { text: '44X', style: styles.default },
            { text: '134.100', style: styles.default },
            { text: '134.200', style: styles.default },
            { text: '68 ft', style: styles.default },
            { text: '08', style: styles.default },
            { text: '109.750', style: styles.default },
          ],
          [
            { text: 'ARR', style: styles.tableHeader },
            { text: 'UGTB', style: styles.default },
            { text: '25X', style: styles.default },
            { text: '138.100', style: styles.default },
            { text: '138.200', style: styles.default },
            { text: '121 ft', style: styles.default },
            { text: '13R', style: styles.default },
            { text: '110.300', style: styles.default },
          ],
          [
            { text: 'ALTN', style: styles.tableHeader },
            { text: 'UGKS', style: styles.default },
            { text: '31X', style: styles.default },
            { text: '132.100', style: styles.default },
            { text: '132.200', style: styles.default },
            { text: '88 ft', style: styles.default },
            { text: '09', style: styles.default },
            { text: '108.900', style: styles.default },
          ],
        ],
      },
    };

    const flightInfo = {
      table: {
        widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
        body: [
          [
            {
              text: '',
              style: styles.tableHeader,
            },
            { text: 'PILOTS', colSpan: 2, style: styles.tableHeader },
            { text: 'TCN', style: styles.tableHeader },
            { text: 'LASER', style: styles.tableHeader },
            { text: 'MODE 2/3', style: styles.tableHeader },
            { text: '', colSpan: 3, style: styles.tableHeader },
          ],
          [
            { text: '#1', style: styles.tableHeader },
            { text: 'DEX', colSpan: 2, style: styles.default },
            { text: '33X', style: styles.default },
            { text: '1680', style: styles.default },
            { text: '4401', style: styles.default },
            { text: '', colSpan: 3, style: styles.tableHeader },
          ],
          [
            { text: '#2', style: styles.tableHeader },
            { text: 'BULLDOG', colSpan: 2, style: styles.default },
            { text: '96X', style: styles.default },
            { text: '1681', style: styles.default },
            { text: '4402', style: styles.default },
            { text: '', colSpan: 3, style: styles.tableHeader },
          ],
          [
            { text: '#3', style: styles.tableHeader },
            { text: 'NECK', colSpan: 2, style: styles.default },
            { text: '96X', style: styles.default },
            { text: '1682', style: styles.default },
            { text: '4403', style: styles.default },
            { text: '', colSpan: 3, style: styles.tableHeader },
          ],
          [
            { text: '#4', style: styles.tableHeader },
            { text: 'HAMSTER', colSpan: 2, style: styles.default },
            { text: '96X', style: styles.default },
            { text: '1683', style: styles.default },
            { text: '4404', style: styles.default },
            { text: '', colSpan: 3, style: styles.tableHeader },
          ],
        ],
      },
    };

    // Document Definition
    const template = {
      info: {
        title: 'MDC-494TH-TR9999',
        author: '132nd vWing',
        subject: 'Flight Planning',
      },
      pageSize: 'A4',
      pageMargins: 5,
      content: [pageHeader, flightinfoHeader, airfieldInfo, flightInfo],
    };

    // Compile and return PDF
    const pdf = pdfMake.createPdf(template);
    return pdf;
  }

  render() {
    return (
      <React.Fragment>
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
