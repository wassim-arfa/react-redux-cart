var Encore =require('@symfony/webpack-encore');

Encore

    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addStyleEntry('css/app', 
    [
        './node_modules/bootstrap/dist/css/bootstrap.min.css',       
    ])
    .addEntry('js/app', 
    [
        './node_modules/jquery/dist/jquery.slim.js',
        './node_modules/popper.js/dist/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/holderjs/holder.min.js',
        './assets/react/App.js'
    ])
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    // .configureBabel(function(babelConfig) {

    //     //This is needed.
    
    //     babelConfig.plugins = ["transform-object-rest-spread","transform-class-properties"]
    // })
    .enableReactPreset();

;

module.exports=Encore.getWebpackConfig();
