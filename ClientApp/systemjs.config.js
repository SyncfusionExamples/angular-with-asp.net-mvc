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
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'ClientApp/app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      
      '@syncfusion/ej2-angular-grids':  'npm:@syncfusion/ej2-angular-grids/dist/ej2-angular-grids.umd.min.js',
      '@syncfusion/ej2-angular-base':'npm:@syncfusion/ej2-angular-base/dist/ej2-angular-base.umd.min.js',
      '@syncfusion/ej2-base':'npm:@syncfusion/ej2-base/dist/ej2-base.umd.min.js',
      '@syncfusion/ej2-buttons':'npm:@syncfusion/ej2-buttons/dist/ej2-buttons.umd.min.js',
      '@syncfusion/ej2-grids':'npm:@syncfusion/ej2-grids/dist/ej2-grids.umd.min.js',
      '@syncfusion/ej2-calendars':'npm:@syncfusion/ej2-calendars/dist/ej2-calendars.umd.min.js',
      '@syncfusion/ej2-compression':'npm:@syncfusion/ej2-compression/dist/ej2-compression.umd.min.js',
      '@syncfusion/ej2-data':'npm:@syncfusion/ej2-data/dist/ej2-data.umd.min.js',
      '@syncfusion/ej2-dropdowns':'npm:@syncfusion/ej2-dropdowns/dist/ej2-dropdowns.umd.min.js',
      '@syncfusion/ej2-lists':'npm:@syncfusion/ej2-lists/dist/ej2-lists.umd.min.js',
      '@syncfusion/ej2-navigations':'npm:@syncfusion/ej2-navigations/dist/ej2-navigations.umd.min.js',
      '@syncfusion/ej2-popups':'npm:@syncfusion/ej2-popups/dist/ej2-popups.umd.min.js',
      '@syncfusion/ej2-splitbuttons':'npm:@syncfusion/ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js',
      '@syncfusion/ej2-excel-export':'npm:@syncfusion/ej2-excel-export/dist/ej2-excel-export.umd.min.js',
      '@syncfusion/ej2-inputs':'npm:@syncfusion/ej2-inputs/dist/ej2-inputs.umd.min.js',
      '@syncfusion/ej2-pdf-export':'npm:@syncfusion/ej2-pdf-export/dist/ej2-pdf-export.umd.min.js',
      '@syncfusion/ej2-file-utils':'npm:@syncfusion/ej2-file-utils/dist/ej2-file-utils.umd.min.js',
      

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'ClientApp/systemjs-angular-loader.js'
          }
        }
        },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
