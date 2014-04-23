Package.describe({ summary: 'Package for browser only.' });

Package.on_use( function (api) {
    api.add_files([
        'masonry.js',
        'scrollspy.js',
        'bootstrap.js',
        'bootstrap.css',
        'font-awesome.css'
    ], 'client' );
});
