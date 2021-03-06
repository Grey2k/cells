/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _modelIdmUser = require('../model/IdmUser');

var _modelIdmUser2 = _interopRequireDefault(_modelIdmUser);

var _modelRestDeleteResponse = require('../model/RestDeleteResponse');

var _modelRestDeleteResponse2 = _interopRequireDefault(_modelRestDeleteResponse);

var _modelRestSearchUserRequest = require('../model/RestSearchUserRequest');

var _modelRestSearchUserRequest2 = _interopRequireDefault(_modelRestSearchUserRequest);

var _modelRestUsersCollection = require('../model/RestUsersCollection');

var _modelRestUsersCollection2 = _interopRequireDefault(_modelRestUsersCollection);

/**
* UserService service.
* @module api/UserServiceApi
* @version 1.0
*/

var UserServiceApi = (function () {

  /**
  * Constructs a new UserServiceApi. 
  * @alias module:api/UserServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function UserServiceApi(apiClient) {
    _classCallCheck(this, UserServiceApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * Delete a user
   * @param {String} login 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
   */

  UserServiceApi.prototype.deleteUserWithHttpInfo = function deleteUserWithHttpInfo(login) {
    var postBody = null;

    // verify the required parameter 'login' is set
    if (login === undefined || login === null) {
      throw new Error("Missing the required parameter 'login' when calling deleteUser");
    }

    var pathParams = {
      'Login': login
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestDeleteResponse2['default'];

    return this.apiClient.callApi('/user/{Login}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete a user
   * @param {String} login 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
   */

  UserServiceApi.prototype.deleteUser = function deleteUser(login) {
    return this.deleteUserWithHttpInfo(login).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Get a user by login
   * @param {String} login 
   * @param {Object} opts Optional parameters
   * @param {String} opts.uuid User unique identifier.
   * @param {String} opts.groupPath Path to the parent group.
   * @param {String} opts.password Password can be passed to be updated (but never read back), field is empty for groups.
   * @param {String} opts.oldPassword OldPassword must be set when a user updates her own password.
   * @param {Boolean} opts.isGroup Whether this object is a group or a user.
   * @param {String} opts.groupLabel Label of the group, field is empty for users.
   * @param {Boolean} opts.policiesContextEditable Context-resolved to quickly check if user is editable or not.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
   */

  UserServiceApi.prototype.getUserWithHttpInfo = function getUserWithHttpInfo(login, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'login' is set
    if (login === undefined || login === null) {
      throw new Error("Missing the required parameter 'login' when calling getUser");
    }

    var pathParams = {
      'Login': login
    };
    var queryParams = {
      'Uuid': opts['uuid'],
      'GroupPath': opts['groupPath'],
      'Password': opts['password'],
      'OldPassword': opts['oldPassword'],
      'IsGroup': opts['isGroup'],
      'GroupLabel': opts['groupLabel'],
      'PoliciesContextEditable': opts['policiesContextEditable']
    };
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelIdmUser2['default'];

    return this.apiClient.callApi('/user/{Login}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Get a user by login
   * @param {String} login 
   * @param {Object} opts Optional parameters
   * @param {String} opts.uuid User unique identifier.
   * @param {String} opts.groupPath Path to the parent group.
   * @param {String} opts.password Password can be passed to be updated (but never read back), field is empty for groups.
   * @param {String} opts.oldPassword OldPassword must be set when a user updates her own password.
   * @param {Boolean} opts.isGroup Whether this object is a group or a user.
   * @param {String} opts.groupLabel Label of the group, field is empty for users.
   * @param {Boolean} opts.policiesContextEditable Context-resolved to quickly check if user is editable or not.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
   */

  UserServiceApi.prototype.getUser = function getUser(login, opts) {
    return this.getUserWithHttpInfo(login, opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Just save a user roles, without other datas
   * @param {String} login 
   * @param {module:model/IdmUser} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
   */

  UserServiceApi.prototype.putRolesWithHttpInfo = function putRolesWithHttpInfo(login, body) {
    var postBody = body;

    // verify the required parameter 'login' is set
    if (login === undefined || login === null) {
      throw new Error("Missing the required parameter 'login' when calling putRoles");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putRoles");
    }

    var pathParams = {
      'Login': login
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelIdmUser2['default'];

    return this.apiClient.callApi('/user/roles/{Login}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Just save a user roles, without other datas
   * @param {String} login 
   * @param {module:model/IdmUser} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
   */

  UserServiceApi.prototype.putRoles = function putRoles(login, body) {
    return this.putRolesWithHttpInfo(login, body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Create or update a user
   * @param {String} login 
   * @param {module:model/IdmUser} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
   */

  UserServiceApi.prototype.putUserWithHttpInfo = function putUserWithHttpInfo(login, body) {
    var postBody = body;

    // verify the required parameter 'login' is set
    if (login === undefined || login === null) {
      throw new Error("Missing the required parameter 'login' when calling putUser");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putUser");
    }

    var pathParams = {
      'Login': login
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelIdmUser2['default'];

    return this.apiClient.callApi('/user/{Login}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Create or update a user
   * @param {String} login 
   * @param {module:model/IdmUser} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
   */

  UserServiceApi.prototype.putUser = function putUser(login, body) {
    return this.putUserWithHttpInfo(login, body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * List/Search users
   * @param {module:model/RestSearchUserRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUsersCollection} and HTTP response
   */

  UserServiceApi.prototype.searchUsersWithHttpInfo = function searchUsersWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchUsers");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestUsersCollection2['default'];

    return this.apiClient.callApi('/user', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * List/Search users
   * @param {module:model/RestSearchUserRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUsersCollection}
   */

  UserServiceApi.prototype.searchUsers = function searchUsers(body) {
    return this.searchUsersWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  return UserServiceApi;
})();

exports['default'] = UserServiceApi;
module.exports = exports['default'];
