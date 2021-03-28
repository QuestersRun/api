'use strict';


/**
 * Get character info
 * This is an example operation to show how security is applied to the call.
 *
 * no response value expected for this operation
 **/
exports.characterGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Post Character info
 * Post Character info
 *
 * user User The user to create. (optional)
 * no response value expected for this operation
 **/
exports.characterPOST = function(user) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Server heartbeat operation
 * This operation shows how to override the global security defined above, as we want to open it up for all users.
 *
 * no response value expected for this operation
 **/
exports.pingGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * gets a new user.
 *
 * id User The user to create. (optional)
 * no response value expected for this operation
 **/
exports.usersGET = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates a new user.
 *
 * user User The user to create. (optional)
 * no response value expected for this operation
 **/
exports.usersPOST = function(user) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

