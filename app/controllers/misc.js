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


exports.getOrgList = function(req, res, next) {
    if( req.params.orglistid || !(req.params.orglistid === "") ){
    	bdb.getOrgList(req.params.orglistid, function(err, result){
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

exports.getAllOrgLists = function(req, res, next) {
    bdb.getAllOrgLists(
    	function(err, result){
		if(err){
			return common.handleErrors(err, res);
		}
		else {
			res.jsonp(result.result);
		}
	});
}

