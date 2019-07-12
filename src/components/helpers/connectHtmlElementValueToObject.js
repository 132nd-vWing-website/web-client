/**
 * connectHtmlElementValueToObject  - This function allows us to name a HTML element in the same way we would reference our targetObj (name="parent.someObject.someKey") and expect that key to be updated onChange
 * @param {string} name       Name of the html element, like "parentObj.someObj.somekey"
 * @param {string} value      The value we want to store
 * @param {object} targetObj  The object we need to store this data in
 */
const connectHtmlElementValueToObject = (name, value, targetObj) => {
  const path = name.split('.');

  // Create a tree if the name contains multiple parts
  if (path.length > 1) {
    // // Remove the first node of the tree so that we can create a new name string
    const next = path.slice(1, path.length).join('.');

    // Repeat recursivly
    const res = connectHtmlElementValueToObject(next, value, targetObj);

    // We need to know the key to populate
    const key = path.shift() || null;

    // And we also need a copy of the current parent so that we can merge our result to it
    const copy = targetObj[key];

    // Merge the copy with res, and add them to the parent key
    return { [key]: { ...copy, ...res } };
  }
  // If we don't have a path-string, then just return a key-value pair
  return { [name]: value };
};

export default connectHtmlElementValueToObject;
