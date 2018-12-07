
	let gulp = require("gulp");
    let uglify = require("gulp-uglify");
	let babel = require("gulp-babel");
	let htmlmin = require("gulp-htmlmin");
	let cleancss = require("gulp-clean-css");
	let webserver = require('gulp-webserver');
	let sass = require('gulp-sass');
	gulp.task("buildCss",()=>{
		gulp.src("./src/style/*.*")
		.pipe(sass())
		.pipe(cleancss())
		.pipe(gulp.dest("./dist/style"))
	        
	})
	gulp.task("buildJS",()=>{
		gulp.src("./src/scripts/*.js")
	        .pipe(babel({
	            presets: ['env']
	        }))
	       .pipe(uglify())
	       .pipe(gulp.dest("./dist/scripts"));
	})
	gulp.task("buildJS1",()=>{
		gulp.src("./src/pages/*.js")
	        .pipe(babel({
	            presets: ['env']
	        }))
	       .pipe(uglify())
	       .pipe(gulp.dest("./dist/pages"));
	})
	gulp.task("buildStatic",()=>{
		gulp.src("./src/static/**/*.*").pipe(gulp.dest("./dist/static"));
	})
//	
	gulp.task("buildHTML",()=>{
		return gulp.src("./src/pages/*.html").pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest("./dist/pages"));
	})
//	
	gulp.task("buildWeb",["watching"],()=>{
		gulp.src("dist")
		   .pipe(webserver({
		   	   livereload: true,
		   	   https:true,
		   	   port:8848,
		   	   proxies:[
		   	    {   source:"/listmore",
		   	        target:'https://m.lagou.com/listmore.json'
		   	    }  
		   	   ]
		   }))
	})
	gulp.task("watching",()=>{
		gulp.watch("./src/**/*.scss",["buildCss"]);
		gulp.watch("./src/**/*.js",["buildJS","buildJS1"]);
		gulp.watch("./src/**/*.html",["buildHTML"]);
		
	})
 gulp.task("buildAll",["buildJS","buildJS1","buildCss","buildStatic","buildHTML"]);

 gulp.task("copy",()=>{
 	gulp.src("./src/scripts/libs/*.*").pipe(gulp.dest("./dist/scripts/libs"));
 })

