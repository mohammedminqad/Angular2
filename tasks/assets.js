'use strict';
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const config = require('./config').client;

module.exports = function(singleRun, callback) {
    return function() {
        const execute = function() {
            let gulpStream = gulp.src(['./client/assets/**/'])

            let destFolder = '';
            if (singleRun) {
                gulpStream = gulpStream.pipe(cleanCSS({ compatibility: 'ie8' }));
                destFolder = '';
            }

            return gulpStream.pipe(gulp.dest(config.destination + destFolder+ '/assets'));
        };

        if (!singleRun) {
            const clientWatch = watch(['./client/**/*.scss'], { verbose: true });

            if (callback) {
                clientWatch.on('change', fileName => {
                    execute();
                callback([fileName]);
            });
            }
        }

        return execute();
    };
};