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


exports.getNpoList = function(req, res, next) {
    if( req.params.npolistid || !(req.params.npolistid === "") ){
    	bdb.getNpoList(req.params.npolistid, function(err, result){
	    if(err){
		console.log("printing out error");
		console.log(err);
		return common.handleErrors(err, res);
	    } 
	    else {
		console.log("printing out result");
		console.log(result);
		res.jsonp(result.result);
	    }
	});
    } else {
       res.send("No address provided");
    }

}


