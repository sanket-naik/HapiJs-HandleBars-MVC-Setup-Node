'use strict';

const Hapi = require('@hapi/hapi');
const handlebars = require('handlebars');
const Path = require('path');
const Route = require('./routes/route');

const init = async () => {

    //creating server
    const server = new Hapi.Server({
        host: 'localhost',
        port: 3000,
    });

    //connecting view engine
    await server.register(require('@hapi/vision'));
    server.views({
        engines: {
            hbs: handlebars
        },
        path: Path.resolve(__dirname, 'templates'),
    });

    //Object
    let data={
        name:"kavya",
        age:23
    }

    //Set the routes
    server.route(Route);

    // //Routes
    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: function (request, h) {
    //         return h.view('user', data);
    //     }
    // });

    //starting the server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();