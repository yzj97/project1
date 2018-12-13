
	let gulp = require("gulp");
    let uglify = require("gulp-uglify");
	let babel = require("gulp-babel");
	let htmlmin = require("gulp-htmlmin");
	let cleancss = require("gulp-clean-css");
	let webserver = require('gulp-webserver');
	let sass = require('gulp-sass');
	gulp.task("buildCss",()=>{
		gulp.src("./src/style/*.*")
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(cleancss())
		.pipe(gulp.dest("./dist/style"))
	        
	})
//<<<<<<< HEAD
//=======
//ǿ�޵�	
//>>>>>>> 26229e0235c63cc3757cee4c6cfac62e79386c15
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
	gulp.task("buildStatic1",()=>{
		gulp.src("./src/static/icon/*.*").pipe(gulp.dest("./dist/static/icon"));
	})
	gulp.task("buildStatic2",()=>{
		gulp.src("./src/static/goods/*.*").pipe(gulp.dest("./dist/static/goods"));
	})
	gulp.task("buildStatic3",()=>{
		gulp.src("./src/static/banner/*.*").pipe(gulp.dest("./dist/static/banner"));
	})
	gulp.task("buildStatic4",()=>{
		gulp.src("./src/static/font/*.*").pipe(gulp.dest("./dist/static/font"));
	})
	
	gulp.task("buildStatic",["buildStatic1","buildStatic2","buildStatic3","buildStatic4"])
//	
	gulp.task("buildHTML",()=>{
		return gulp.src("./src/pages/*.html").pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest("./dist/pages"));
	})
//	
	gulp.task("buildWeb",["watching","buildStatic"],()=>{
		gulp.src("dist")
		   .pipe(webserver({
		   	   livereload: true,
		   	   port:8848,
		   	   https:true,
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
		gulp.watch("./src/**/*.json",["buildAll"]);
	})
 gulp.task("copy",()=>{
 	gulp.src("./src/scripts/libs/*.*").pipe(gulp.dest("./dist/scripts/libs"));
 })

gulp.task("buildAjax",()=>{
	gulp.src("./src/ajax/*.*").pipe(gulp.dest("./dist/ajax"));
})
 gulp.task("buildAll",["buildJS","buildJS1","buildCss","buildStatic","buildHTML","buildAjax"]);