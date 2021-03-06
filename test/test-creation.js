/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Aurora generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('aurora:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'template.php',
      'Gemfile',
      '.editorconfig',
      'templates/README.md',
      'sass/config/variables/_colors.scss',
      'css/style.css'
    ];

    helpers.mockPrompt(this.app, {
      'projectName': 'corona',
      'projectType': 'Corona',
      'projectOptions': []
    });

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
