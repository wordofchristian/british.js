const lastResort = this;

/**
 * Figures out the "global" object for the given environment and returns it.
 * (i.e. "window" for the browser and "global" for the node)
 *
 * @returns the global object
 */
export default function getGlobal() {
  if (typeof window !== 'undefined') {
    return window;
  } else if (typeof global !== 'undefined') {
    return global;
  } else {
    return lastResort;
  }
}
