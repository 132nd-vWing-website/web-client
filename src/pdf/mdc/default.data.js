const makeFakePlan = (index) => {
  const lines = 20;
  const collection = [];

  let n = index || 0;
  while (n !== lines) {
    collection.push({
      id: n,
      name: '-',
      lat: 0,
      lon: 0,
      tos: 0,
      hdg: 0,
      dist: 0, // meters
      gs: 0, // meters pr. second
      alt: 0,
      action: '-',
    });
    n += 1;
  }

  return collection;
};

/**
 * Default Data-object for a MDC to use as default values when generating an MDC
 * It is important that each key/value pair has a value of either int, string or an array of objects!
 */
const defaultData = {
  missionNumber: 'TR9999',
  callsign: 'FALCON-2',
  ato:
    'VTASK/132vW/17041/031800ZOCT2018//TASKUNIT/ 494th/ICAO:-//AMSNDAT / TR7041 / TR / -/-/2 / -/-/DEPLOC: UGKO / ARRLOC: UGKO//MSNACFT / 2 / F / A - 18C / FALCON21 - 22 / FLIGHT LEAD DISCRETION / -/PINK9/LEMON2//AMPN / THIS IS A F - 18C FLIGHT//',
  atis: 'LLRD INFO: E 0655LT RWY30 TL110 360/5KT BLU 30/25 Q1040 NOSIG',
  enr: 'DEP via AKAKI, AAR at SHELL, RTB via OHB',
  etd: '18:00:00Z',
  eta: '+2hrs',
  airfields: [
    {
      name: 'departure',
      id: 1,
      label: 'DEP',
      icao: 'UGKO',
      tcn: '44X',
      gnd: '134.100',
      twr: '134.200',
      elev: '68 ft',
      rwy: '08',
      ils: '109.750',
      lat: 42.177616666,
      lon: 42.48123,
    },
    {
      name: 'recovery',
      id: 59,
      label: 'ARR',
      icao: 'UGTB',
      tcn: '25X',
      gnd: '138.100',
      twr: '138.200',
      elev: '121 ft',
      rwy: '13R',
      ils: '110.300',
      lat: 42.177616666,
      lon: 42.48123,
    },
    {
      name: 'alternate',
      id: 1,
      label: 'ALTN',
      icao: 'UGKO',
      tcn: '44X',
      gnd: '132.100',
      twr: '132.200',
      elev: '88 ft',
      rwy: '09',
      ils: '108.900',
      lat: 42.177616666,
      lon: 42.48123,
    },
  ],
  // aircraft: 'F/A-18C',
  aircraft: {
    id: 1,
    type: 'F/A-18C',
    nato: 'Hornet',
    role: 'multi',
  },
  element: [
    {
      pilot: 'DEX',
      tcn: '33X',
      laser: '1680',
      mode: '4401',
    },
    {
      pilot: 'BULLDOG',
      tcn: '96X',
      laser: '1681',
      mode: '4402',
    },
    {
      pilot: 'NECK',
      tcn: '96X',
      laser: '1682',
      mode: '4403',
    },
    {
      pilot: 'HAMSTER',
      tcn: '96X',
      laser: '1683',
      mode: '4404',
    },
  ],
  navSequences: [
    { sequence: '1-2-3-4-5-6-7-8-9-10' },
    { sequence: '1-2-3-4-5-6-7-8-9-10' },
    { sequence: '1-2-3-4-5-6-7-8-9-10' },
  ],
  navPoints: [
    {
      id: 0,
      name: 'UGKO',
      lat: 42.177616666,
      lon: 42.48123,
      tos: 1549562400000,
      hdg: 0,
      dist: 0,
      gs: 180.05556,
      alt: 0,
      action: 'DEPARTURE',
    },
    {
      id: 1,
      name: 'ALIKA',
      lat: 42.25365,
      lon: 41.5328,
      tos: 0,
      hdg: 0,
      dist: 0,
      gs: 180.05556,
      alt: 0,
      action: 'FLY OVER',
    },
    {
      id: 2,
      name: 'TETRO',
      lat: 41.673417,
      lon: 42.858267,
      tos: 0,
      hdg: 0,
      dist: 0,
      gs: 180.05556,
      alt: 0,
      action: 'FLY OVER',
    },
    ...makeFakePlan(3),
  ],
  radioPresets: [
    { label: 'INT PRI', preset: 'PRI2' },
    { label: 'INT AUX', preset: '133.500' },
    { label: 'GND', preset: 'AUX1' },
    { label: 'TWR:', preset: 'AUX2' },
    { label: 'APP', preset: '126.900' },
    { label: 'PACKG', preset: '229.250' },
    { label: 'TANK 1', preset: 'PRI7' },
    { label: 'TANK 2', preset: 'PRI8' },
    { label: 'AWACS', preset: 'AUX4' },
    { label: 'MAGIC', preset: 'AUX5' },
    { label: 'OVRLRD', preset: 'AUX6' },
    { label: 'CSAR', preset: '140.250' },
    { label: 'JTAC 1', preset: '031.000' },
    { label: 'JTAC 2', preset: '666.000' },
    { label: 'REPORT', preset: '--' },
    { label: 'SPARE', preset: '--' },
  ],
  packageName: 'Alpha',
  packageMembers: [
    {
      callsign: 'Falcon-2',
      numberOfAC: 4,
      ACtype: 'F/A-18C',
      uhf: '000.000',
      vhf: '000.000',
      tcn: '33X/96X',
      tasking: 'TRAINING',
    },
    {
      callsign: '',
      numberOfAC: 0,
      ACtype: 'N/A',
      uhf: '000.000',
      vhf: '000.000',
      tcn: '',
      tasking: '',
    },
    {
      callsign: '',
      numberOfAC: 0,
      ACtype: 'N/A',
      uhf: '000.000',
      vhf: '000.000',
      tcn: '',
      tasking: '',
    },
    {
      callsign: '',
      numberOfAC: 0,
      ACtype: 'N/A',
      uhf: '000.000',
      vhf: '000.000',
      tcn: '',
      tasking: '',
    },
    {
      callsign: '',
      numberOfAC: 0,
      ACtype: 'N/A',
      uhf: '000.000',
      vhf: '000.000',
      tcn: '',
      tasking: '',
    },
  ],
};

export default defaultData;
