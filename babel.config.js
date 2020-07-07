module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: ['last 2 chrome versions'] },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
