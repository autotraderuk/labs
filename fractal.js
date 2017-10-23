'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Core Experience');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.status', 'wip');

fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'assets'));
/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/_site/styleguide');

const builder = fractal.web.builder();

builder.build().then(function(){
    console.log(`Fractal static HTML build complete!`);
});




/* change the "assets" tab to the present file type */
fractal.components.set('resources', {
    other: {
        label: 'Examples',
        match: ['**/*.html', '**/*.scss', '**.css']
    }
});


/*
 * Customise the theme...
 */
const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    nav: ["docs", "components"],
    panels: ["resources", "notes", "info"],
    styles: ['default','/styleguide.css']
});



// specify a directory to hold the theme override templates
myCustomisedTheme.addLoadPath(__dirname + '/styleguide-theme');

fractal.web.theme(myCustomisedTheme);


