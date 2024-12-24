const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your library
  output: {
    filename: 'saber-colors.min.js',  // The output file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
    library: 'SaberColors',  // Name of the global variable in the browser
    libraryTarget: 'umd',  // Universal Module Definition (works for CommonJS, AMD, and browser globals)
    globalObject: 'this'  // Fixes issues with global object in browsers and Node.js
  },
  mode: 'production',  // Production mode (minifies and optimizes the bundle)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Transpiles ES6+ code to ES5
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
