/* eslint no-param-reassign: 0 */
/**
 * This function is given a css-selector (see css documentation) and returns the CSS rule that matches
 * @param {string} selector - CSS Selector to use for lookup
 * @param {string} prop - Name of style property to modify
 * @param {string} value - New value of style
 *
 */
export default function modCSS(selector, prop, value) {
  const sheets = document.styleSheets;

  Object.values(sheets).forEach((sheet) => {
    Object.values(sheet.cssRules).forEach((rule) => {
      if (rule.selectorText === selector) {
        rule.style[prop] = `"${value}"`;
      }
      return null;
    });
  });
}
