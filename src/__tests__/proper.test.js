import '../index.js';

describe('Maths', () => {
  it('should alias Math', () => {
    expect(Maths.min(1, 2)).toEqual(1);
  });
});

if (typeof WebGLProgram !== 'undefined') {
  describe('WebGLProgramme', () => {
    it('should inherit WebGLProgram', () => {
      expect(WebGLProgramme).toBeInstanceOf(WebGLProgram);
    });
  });
}
