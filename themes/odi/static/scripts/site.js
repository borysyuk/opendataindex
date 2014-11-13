require.config({
    baseUrl: 'SITEURL/static'.replace('SITEURL', siteUrl),
    shim : {
        bootstrap: {deps:['jquery']},
        table: {deps:['sticky']},
        tablesorter: {deps: ['jquery']}
    },
    paths: {
        app: 'scripts/site/main',
        jquery: 'vendor/jquery.min',
        tablesorter: 'vendor/jquery.tablesorter.min',
        bootstrap: 'vendor/bootstrap/js/bootstrap.min',
        chroma: 'vendor/chroma.min',
        lodash: 'vendor/lodash.compat.min',
        sticky: 'vendor/sticky',
        table: 'scripts/site/table',
        place: 'scripts/site/place'
    }
});

requirejs(['app']);
