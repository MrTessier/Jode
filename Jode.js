const webServer = require("./services/web-server.js");

async function startup() {
    console.log("Starting the Jode application");

    try {
        console.log("Initializeing the web server module");
        await webServer.initialize();
    } catch (err) {
        console.error("Startup errored: " + err);
        process.exit(1);
    };
}

startup();

async function shutdown(e) {
    let err = e;
    console.log("Shutting Down");

    try {
        console.log("Closing the web server module");
        await webServer.close();

    } catch (e) {
        console.log("Shutdown errored: ", e);
        err = err || e;
    };

    console.log("Exiting Process");

    if (err) {
        process.exit(1);
    } else {
        process.exit(0);
    };    
}

process.on('SIGTERM', () => {
    console.log('Received SIGTERM, shutting down.');
    shutdown();
});

process.on('SIGINT', () => {
    console.log('Received SIGINT, shutting down.');
    shutdown();
});

process.on('uncaughtException', err => {
    console.log('Uncaught exception');
    console.error(err);
    shutdown(err);
});