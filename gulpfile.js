const gulp = require("gulp");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const browserSync = require("browser-sync");
const eslint = require("gulp-eslint");
const prettyerror = ("gulp-prettyerorr");

gulp.task("lint",function (){
  return (
    gulp.src(["./js/*.js"])
    .pipe(prettyError())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  );
});

gulp.task("scripts", 
gulp.series(function(){
  return gulp
    .src("./js/*.js")
    .pipe(terser())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./build/js"));
    
})
);


gulp.task("browser-sync", function(done){
    browserSync.init({
        server: { 
            baseDir:"./"

        }
    });//end of broswerSync.init

    gulp.watch(["index.html","css/*.css","build/js/*"])
     .on("change", browserSync.reload)

     

});// browser- sync

gulp.task("watch", function() {
    gulp.watch("js/*.js", gulp.series("scripts"));
  });

// default gulp runs everything at once in this
gulp.task("default", gulp.parallel( "browser-sync","watch","scripts"));

