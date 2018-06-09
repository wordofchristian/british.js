let ROOT;

if (typeof window !== 'undefined') {
  ROOT = window;
} else if (typeof global !== 'undefined') {
  ROOT = global;
} else {
  ROOT = this;
}

/**
 * Creates a global alias for both node and browser environments
 * @param {any} original global object that the alias points to
 * @param {string} name new global name for the object
 */
export default function globalAlias(original, name) {
  ROOT[name] = original;

  if (typeof original === 'function') {
    original.name = name; // this will make it print correctly in the console
  }
}