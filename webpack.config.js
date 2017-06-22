module.exports = {
  module: {
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\\.jsx?$/}
    ],
  },
  resolve: {
    extensions: ['', 'js', 'jsx'],
    modulesDirectories: ['node_modules', 'bower_components', 'shared'],
    root: '/shared/vendor/modules',
  },
};
