import mdc from './mdc';

/**
 * The pieces that make up the various pdf templates are broken down to 'components' in
 * order to make templating PDFs a little bit easier. These components are then used to put
 * together a document definition and create a PDF. This also exposes those components
 * and make them reusable.
 *
 * @exports template               - root class for all templates
 * @exports template.mdc           - root class for all MDCs
 */
const templates = {
  mdc,
};

export { mdc };
export default templates;
