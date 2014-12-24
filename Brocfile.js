/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');

app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
  destDir: 'fonts'
});
app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});

module.exports = app.toTree();
