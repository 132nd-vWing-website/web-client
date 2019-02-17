/**
 * This function is given a css-selector (see css documentation) and returns the CSS rule that matches
 * @param {string} selector - CSS Selector to use for lookup
 */
export default function cssLookup(selector) {
  const sheets = document.styleSheets;

  Object.values(sheets).forEach((sheet) => {
    Object.values(sheet.cssRules).forEach((rule) => {
      if (rule.selectorText === selector) {
        return rule.style;
      }
      return null;
    });
  });
  return null;
}
