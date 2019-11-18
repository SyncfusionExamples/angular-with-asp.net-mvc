# Getting Started ASP .NET MVC with Angular using Project Template

This document helps you to create a simple ASP.NET MVC application with Angular Framework and Syncfusion Angular UI components (Essential JS 2).

## Prerequisites

Before getting started with Syncfusion Angular Components in ASP.NET MVC with Angular project, check whether the following are installed in the developer machine. 

* .Net Framework 4.5 and above
* ASP.NET MVC 5
* Visual Studio 2017

## Create ASP.NET MVC Web application

Create a new project with a project template.

1. Choose File > New > Project in the Visual Studio menu bar.

2. Select Installed > Visual C# > Web and select the required .NET Framework in the drop-down.

3. Select `ASP.NET Web Application` and change the application name, and then click OK.

4. Select `MVC` as a project template and then click OK. The application is created.

## Configure TypeScript Configuration file

Right-click the sample root folder and click Add > New Item. Then create a `tsconfig.json` file by selecting `TypeScript JSON Configuration File`. The TypeScript JSON Configuration File does the work of transpiling TypeScript files into JavaScript files. 

Add the following code in the `tsconfig.json` file.

```typescript

{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false,
    "skipLibCheck": true,
    "typeRoots": [
      "node_modules/@types/"
    ],
    "types": [
      "jquery",
      "ej.web.all",
      "node",
      "es6-shim"
    ]
  },
  "exclude": [
    "node_modules",
    "deps"
  ]
}

```

##  Manage Angular packages

The NPM configuration file is used for managing the Angular packages.

Right-click the sample root folder and click Add > New Item. Then create a `package.json` file by selecting `NPM Configuration File`.

Add the following code in the `package.json` file.

```typescript
{
  "name": "angular-with-mvc",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/syncfusion/angular2-seeds.git"
  },
  "description": "A systemjs starter for Angular",
  "scripts": {
    "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
  "keywords": [
    "syncfusion",
    "ej",
    "essential",
    "javascript",
    "Angular",
    "Angular 2",
    "angular2"
  ],
  "author": "Syncfusion Inc",
  "license": "SEE LICENSE IN README.md",
  "bugs": {
    "url": "https://github.com/syncfusion/angular2-seeds/issues"
  },
  "homepage": "https://github.com/syncfusion/angular2-seeds#readme",
  "dependencies": {
    "@angular/common": "~5.0.0",
    "@angular/compiler": "~5.0.0",
    "@angular/core": "~5.0.0",
    "@angular/forms": "~5.0.0",
    "@angular/http": "~5.0.0",
    "@angular/platform-browser": "~5.0.0",
    "@angular/platform-browser-dynamic": "~5.0.0",
    "@angular/router": "~5.0.0",
    "@angular/upgrade": "~5.0.0",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.4.2",
    "systemjs": "0.19.40",
    "zone.js": "^0.8.4",
    "angular2-in-memory-web-api": "0.0.20",
    "bootstrap": "^3.3.6",
    "jquery": "^3.1.1",
    "jsrender": "^0.9.75",
    "syncfusion-javascript": "^15.4.17",
    "ej-angular2": "^15.4.18"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "gulp": "^3.9.1",
    "gulp-clean": "^0.3.2",
    "gulp-typescript": "^2.13.6",
    "lite-server": "^2.1.0",
    "typescript": "~2.4.2",
    "@types/ej.web.all": "^15.4.0",
    "@types/jquery": "^3.2.12",
    "@types/es6-shim": "0.31.32",
    "@types/node": "6.0.52"
  }
}

```
To restore the packages, right-click the package.json file and select `Restore Packages`

## Gulp task configuration

To compile TypeScript files to the JavaScript file, the Gulp task configuration is needed.

Right-click the sample root folder and click Add > New Item > Gulp Configuration File. Then name it as `gulpfile.json`.

Add the following code in the `gulpfile.json` file.

```typescript
/// <binding />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = ['./Scripts/app/'];

//Delete the libs and app directory
gulp.task('clean', function () {
    return gulp.src(destPath)
    .pipe(clean());
});

//Transpiling TypeScript files into JavaScript
tsProject = ts.createProject('./tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('ts', function (done) {
    var tsResult = gulp.src([
            "src/**/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts/app')); // Copying ts files to Scripts/app folder from src
});

//Watching for ts file changes
gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('src/**/*.ts', ['ts']);
});


gulp.task('default', ['watch']);

```
## Create an Angular application

To create an angular application, refer to the [`Getting-started-with-angular-cli`](https://ej2.syncfusion.com/angular/documentation/getting-started/angular-cli/) document.

## Add Angular application to MVC

Copy the `src` folder of the angular application and paste it in the root folder of the MVC project.

## Add systemjs configuration to load Angular core modules

The file systemjs.config.js is used for loading Angular files into the browser. Create `systemjs.config.js` file under the Scripts folder.

Add the following code in it.

```typescript
/**
* System configuration for Angular samples
* Adjust as necessary for your application needs.
*/
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        //Map tells the System loader where to look for things
        map: {
            //Our app is within the app folder
            app: '/Scripts',
            //Angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            //Other libraries
            'rxjs': 'npm:rxjs',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'jquery': 'npm:jquery/dist/jquery.min.js',
            'jsrender': 'npm:jsrender/jsrender.min.js',
            'jquery-validation': 'npm:jquery-validation/dist/jquery.validate.min.js',
            'syncfusion-javascript': 'npm:syncfusion-javascript',
            'ej-angular2': 'npm:ej-angular2'
        },
        //Packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ej-angular2': {
                main: './src/index.js'
            },
            'syncfusion-javascript': {
                defaultExtension: 'js'
            }
        }
    });
})(this);

```

## Add References to Layout file

To load Angular in ASP.NET MVC, include the script references of Angular core modules and Syncfusion JavaScript asset files in _Layout file, and load the component in index.cshtml.

Code snippet of _Layout.cshtml file:

```typescript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@ViewBag.Title - My ASP.NET Application</title>
    @Styles.Render("~/Content/css")
    @Scripts.Render("~/bundles/modernizr")


    <title>Essential JavaScript for Angular | SystemJS seed</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="deps/images/favicon.ico">

    <link href="node_modules/syncfusion-javascript/Content/ej/web/material/ej.web.all.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>


    <!-- 2. Configure SystemJS -->
    <script src="~/Scripts/systemjs.config.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>

            System.import('../Scripts/app/main')
            .then(null, console.error.bind(console));
    </script>



</head>
<body>

    <div class="container body-content">
        @RenderBody()
        <hr />
        <footer>
            <p>&copy; @DateTime.Now.Year - My ASP.NET Application</p>
        </footer>
    </div>

    @Scripts.Render("~/bundles/jquery")
    @Scripts.Render("~/bundles/bootstrap")
    @RenderSection("scripts", required: false)
</body>
</html>
```

Code snippet of index.cshtml file.

```typescript
@{
    ViewBag.Title = "Home Page";
}
<ej-app>Loading...</ej-app>
```

## Run the Application

Run the gulp task by selecting View > Other Windows > Task Runner Explorer. 

Run the default task and then run the task runner to compile the build and run the application.
