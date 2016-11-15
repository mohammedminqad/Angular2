'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');

const serverStartTasks = require('./tasks/server_start');
const clientCopyTask = require('./tasks/client_copy');
const clientBuildTask = require('./tasks/client_build');
const assetsTask = require('./tasks/assets');
const cleanTask = require('./tasks/clean');
const liveReloadTask = require('./tasks/livereload');


gulp.task('server-start', serverStartTasks());
gulp.task('client-copy', clientCopyTask(false, liveReloadTask.notifyChanged));
gulp.task('client-build', clientBuildTask(false, liveReloadTask.notifyChanged));
gulp.task('client-stylesheet', assetsTask(false, liveReloadTask.notifyChanged));
gulp.task('clean', cleanTask());



gulp.task('serve', function(done) {
    runSequence(
        'clean', ['client-build', 'client-copy', 'client-stylesheet'],
        'server-start',
        done
    );
});
