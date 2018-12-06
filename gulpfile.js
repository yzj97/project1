
	let gulp = require("gulp");
    let uglify = require("gulp-uglify");
	let babel = require("gulp-babel");
	let htmlmin = require("gulp-htmlmin");
	let cleancss = require("gulp-clean-css");
	let webserver = require('gulp-webserver');
	gulp.task("copy",()=>{
		gulp.src("./src/**/*.*").pipe(gulp.dest("./dist"))
	})
	gulp.task("buildCss",()=>{
		gulp.src("./src/**/*.css").pipe(cleancss()).pipe(gulp.dest("./dist"))
	        
	})
//г©нч╣п	
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
	gulp.task("buildjs",["buildJS","buildJS1"])
//	
	gulp.task("buildHTML",()=>{
		return gulp.src("./src/pages/*.html").pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest("./dist/pages"));
	})
//	
	gulp.task("buildWeb",()=>{
		gulp.src("src")
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
	



