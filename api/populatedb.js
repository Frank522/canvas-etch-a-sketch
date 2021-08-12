#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async');
var Line = require('./models/line');
var History = require('./models/history');
var Image = require('./models/canvasimage');


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var lines = [];
var histories = [];
var images = [];

function lineCreate(x1, x2, y1, y2, cb) {
    linedetail = {
        xStart: x1,
        xEnd: x2,
        yStart: y1,
        yEnd: y2
    }

    var line = new Line(linedetail);

    line.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Line: ' + line);
        lines.push(line)
        cb(null, line)
    });
}

function historyCreate(name, lines, cb) {
    var historydetail = { name, items: lines }
    var history = new History(historydetail);

    history.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New History: ' + history);
        histories.push(history)
        cb(null, history);
    });
}



function imageCreate(url, cb) {
    var imagedetail = { url }
    var image = new Image(imagedetail);

    image.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New Image: ' + image);
        images.push(image)
        cb(null, image);
    });
}



function createLines(cb) {
    async.series([
        function (callback) {
            lineCreate(2, 3, 4, 5, callback);
        },
        function (callback) {
            lineCreate(2, 6, 4, 5, callback);
        },
        function (callback) {
            lineCreate(2, 6, 4, 1, callback);
        },
        function (callback) {
            lineCreate(12, 6, 4, 1, callback);
        },
        function (callback) {
            lineCreate(2, 6, 4, 10, callback);
        },
        function (callback) {
            lineCreate(12, 6, 40, 1, callback);
        },
        function (callback) {
            lineCreate(12, 6, 40, 101, callback);
        },
        function (callback) {
            lineCreate(12, 216, 40, 101, callback);
        },
        function (callback) {
            lineCreate(12, 216, 401, 101, callback);
        },
    ],
        // optional callback
        cb);
}


function createHistories(cb) {
    async.parallel([
        function (callback) {
            historyCreate('history0', [lines[0], lines[6], lines[3], lines[1], lines[2], lines[8], lines[4], lines[7]], callback)
        },
        function (callback) {
            historyCreate('history0', [lines[1], lines[6], lines[4], lines[4], lines[4], lines[8], lines[4], lines[7]], callback)
        },
        function (callback) {
            historyCreate('history0', [lines[0], lines[1], lines[3], lines[1], lines[2], lines[1], lines[1], lines[7]], callback)
        },
        function (callback) {
            historyCreate('history0', [lines[7], lines[6], lines[5], lines[4], lines[3], lines[2], lines[1], lines[0]], callback)
        },
        function (callback) {
            historyCreate('history0', [lines[0], lines[6], lines[3], lines[1], lines[2], lines[8], lines[4], lines[7]], callback)
        },
    ],
        // optional callback
        cb);
}



//Required: URLs generated from canvas art
function createImages(cb) {
    async.parallel([

        function (callback) {
            imageCreate('fakeurl0', callback)
        },
        function (callback) {
            imageCreate('fakeurl1', callback)
        },
    ],
        // Optional callback
        cb);
}



async.series([
    createLines,
    createImages,
    createHistories,
],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        // All done, disconnect from database
        mongoose.connection.close();
    });




