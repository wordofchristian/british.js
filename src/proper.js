import globalAlias from './util/globalAlias';
import memberAlias from './util/memberAlias';

globalAlias(Math, 'Maths');

if (typeof WebGLProgram !== 'undefined') {
  globalAlias(WebGLProgram, 'WebGLProgramme');
}

if (typeof WebGLRenderingContext !== 'undefined') {
  memberAlias(WebGLRenderingContext.prototype, 'isProgram', 'isProgramme');
  memberAlias(WebGLRenderingContext.prototype, 'useProgram', 'useProgramme');
  memberAlias(WebGLRenderingContext.prototype, 'linkProgram', 'linkProgramme');
  memberAlias(WebGLRenderingContext.prototype, 'createProgram', 'createProgramme');
  memberAlias(WebGLRenderingContext.prototype, 'deleteProgram', 'deleteProgramme');
  memberAlias(WebGLRenderingContext.prototype, 'validateProgram', 'validateProgramme');
}
