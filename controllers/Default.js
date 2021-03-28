'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.characterGET = function characterGET (req, res, next) {
  Default.characterGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.characterPOST = function characterPOST (req, res, next) {
  var user = req.swagger.params['user'].value;
  Default.characterPOST(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingGET = function pingGET (req, res, next) {
  Default.pingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.usersGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  var user = req.swagger.params['user'].value;
  Default.usersPOST(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
