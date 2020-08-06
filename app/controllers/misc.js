'use strict';

/**
 * Module dependencies.
 */
var common = require('./common'),
    async = require('async'),
    BlockDb = require('../../lib/BlockDb');

var bdb = new BlockDb();

exports.getServiceAddresses = function(req, res, next) {
    bdb.getServiceAddresses(function(err, sa) {
        if (err) {
            common.handleErrors(err, res, next);
        } else {
            res.jsonp(sa.result);
        }
    });
};
