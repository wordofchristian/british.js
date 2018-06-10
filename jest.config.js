module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  projects: [
    {
      displayName: 'node',
    },
    {
      displayName: 'jsdom',
      testEnvironment: 'jsdom',
    },
  ],
};
