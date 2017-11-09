var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
    .metadata({
        title: 'Notes',
        description: 'Raw thoughts. Usually software but who knows',
        generator: 'Metalsmith',
        url: 'https://jesusgollo.net/notes'
    })
    .source('./src')
    .destination('./build')
    .clean(false)
    .use(collections({ posts: { pattern: 'posts/*.md', sortBy: 'date' } }))
    .use(console.log)
    .use(markdown())
    .use(permalinks())
    .use(
        layouts({
            engine: 'pug'
        })
    )
    .build(function(err) {
        if (err) {
            throw err;
        }
    });
