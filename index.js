var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var helpers = require('metalsmith-register-helpers');

Metalsmith(__dirname)
    .metadata({
        title: 'Notes',
        description: 'Raw thoughts. Usually software but who knows',
        generator: 'Metalsmith',
        url: 'https://jesusgollo.net/notes'
    })
    .source('./content')
    .destination('./build')
    .clean(false)
    .use(
        collections({
            posts: { pattern: 'posts/*.md', sortBy: 'date', reverse: true }
        })
    )
    .use(markdown())
    .use(permalinks())
    .use(
        helpers({
            directory: './templates/helpers'
        })
    )
    .use(
        layouts({
            engine: 'handlebars',
            default: 'post.html'
        })
    )
    .build(function(err) {
        if (err) {
            throw err;
        }
    });
