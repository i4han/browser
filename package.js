Package.describe({ summary: 'Package for client.' });

Package.on_use( function (api) {
    api.add_files( 'masonry.js',   'client' );
    api.add_files( 'scrollspy.js', 'client' );
    api.add_files( 'bootstrap.js', 'client' );
});