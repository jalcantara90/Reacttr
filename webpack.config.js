const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
const path = require("path")

module.exports = {
    resolve: {
        extensions: ['.js','.jsx','.css']  //extensiones de archivos que queremos que controle
    },

    entry: ['./src/index.jsx'],  //fichero de entrada de la aplicación
    output: { // parámetros del fichero de salida
        filename: 'app.js', //nombre del fichero de salida
        path:  path.resolve(__dirname, 'build'), //ruta donde se va a entregar el fichero de salida
        publicPath: '/' // ruta utilizada en nuestro servidor de desarrollo
    }, 

    module: {
        loaders: [
            { test : /(\.js|jsx)$/ , exclude: /node_modules/, loaders: ['babel-loader'] }, // definición del cargador para todos los ficheros js y jsx
            { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}` }  // definición del cargador para todos los ficheros css
        ]
    },

    devServer: { //definición del servidor de desrrollo
        host: 'localhost',
        port: 8080,
        inline: true
    },

    plugins: [
        new HtmlWebpackPlugin( { template: './src/assets/index.html' }),
        new ExtractTextPlugin(  'style.css', { allChunks: true } )
    ]
}