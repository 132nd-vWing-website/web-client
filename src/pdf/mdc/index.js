import defaultData from './default.data';
import frontPage from './pages/frontPage';
import navList from './pages/navList';

/**
 * All MDC templates
 * @exports mdc           - Root class for all MDCs
 * @exports mdc.pages     - All MDC pages
 */

const mdc = {
  defaultData,
  pages: { frontPage, navList },
};

export default mdc;
