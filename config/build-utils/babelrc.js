module.exports = {
  presets: [
    [
      require.resolve( 'babel-preset-env' ),
      {
        targets: { ie: 9 },
        modules: false,
        loose: true
      },
    ],
    require.resolve( 'babel-preset-react' )
  ],
  plugins: [
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-proto-to-assign'
  ]
};