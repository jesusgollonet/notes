require('dotenv').config();

var Metalsmith = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var helpers = require('metalsmith-register-helpers');

Metalsmith(__dirname)
    .metadata({
        title: process.env.TITLE,
        description: process.env.DESCRIPTION,
        url: process.env.URL
    })
    .source(process.env.CONTENT_FOLDER)
    .destination('./build')
    .clean(true)
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
