import getGlobal from './getGlobal';

const GLOBAL = getGlobal();

/**
 * Creates a global alias for both node and browser environments
 * @param {any} original global object that the alias points to
 * @param {string} name new global name for the object
 */
export default function globalAlias(original, name) {
  GLOBAL[name] = original;

  if (typeof original === 'function') {
    Object.defineProperty(original, 'name', {
      value: name,
      writable: false,
    });
  }
}
