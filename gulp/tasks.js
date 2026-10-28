var gulp = require('gulp');
var g = require('gulp-load-plugins')();
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer').default;
var conf = require('./config')

function copy() {
    var config = conf.copy;

    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
}

function stylus() {
    var config = conf.stylus;

    return gulp.src(config.src)
        .pipe(g.plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(g.stylus())               // 実際コンパイルしてるのはここ
        .pipe(g.concat(config.output))  // 1つのファイルに固める
        .pipe(autoprefixer(config.autoprefixer))  // vendor-prefixつける
        .pipe(g.if(config.minify, g.cleanCss()))    // 必要ならminifyする
        .pipe(gulp.dest(config.dest));            // 出力する
}

function webpack() {
    var webpackStream = require('webpack-stream');
    var webpack = require('webpack');
    var config = conf.webpack;

    return webpackStream(config.config, webpack)
        .pipe(gulp.dest(config.dest));
}

function webserver() {
    var webserver = require('gulp-webserver');
    var config = conf.webserver;

    return gulp.src(config.src)
        .pipe(webserver(config.config));
}

var build = gulp.parallel(webpack, stylus, copy);

gulp.task('copy', copy);
gulp.task('stylus', stylus);
gulp.task('webpack', webpack);
gulp.task('webserver', webserver);
gulp.task('build', build);
gulp.task('default', gulp.series(gulp.parallel(webserver, build), watch));

function bs() {
    var sync = require('browser-sync').create();
    var config = conf.sync

    gulp.task('sync-init', function() {
        sync.init(null, config);
    });

    gulp.task('sync-reload', function(done) {
        sync.reload();
        done();
    });

    gulp.task('sync-stylus', function () {
        var stylus_config = conf.stylus;

        return gulp.src(stylus_config.src)
            .pipe(g.plumber({
                errorHandler: notify.onError('<%= error.message %>')
            }))
            .pipe(g.stylus())               // 実際コンパイルしてるのはここ
            .pipe(g.concat(stylus_config.output))  // 1つのファイルに固める
            .pipe(autoprefixer(stylus_config.autoprefixer))  // vendor-prefixつける
            .pipe(g.if(stylus_config.minify, g.cleanCss()))    // 必要ならminifyする
            .pipe(gulp.dest(stylus_config.dest))            // 出力する
            .pipe(sync.stream());
    });

    gulp.task('sync', function() {
        gulp.watch('./**/*.php', gulp.series('sync-reload'));
        gulp.watch(conf.stylus.src, gulp.series('sync-stylus'));
    });
}

bs();

function watch(done) {
    var config = conf.watch;

    gulp.watch(config.js, gulp.series('webpack'));
    gulp.watch(config.stylus, gulp.series('stylus'));
    gulp.watch(config.www, gulp.series('copy'));

    done();
}

gulp.task('watch', watch);
