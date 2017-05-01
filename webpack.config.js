'use strict';

// Modules
var webpack = require('webpack');
// var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isDev = ENV === 'build';
var isProd = ENV === 'dist';

module.exports=function makeWebpackConfig() {
    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    config.entry = path.resolve(__dirname, './src/js/main.js');

    config.output = {
        path: path.resolve(__dirname, './build'),
        publicPath: isProd ? "dist" : "build/",
        filename:'[name].bundle.js'

        }
        return config;
}();
