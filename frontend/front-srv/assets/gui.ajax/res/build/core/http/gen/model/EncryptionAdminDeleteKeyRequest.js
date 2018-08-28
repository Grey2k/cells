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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The EncryptionAdminDeleteKeyRequest model module.
* @module model/EncryptionAdminDeleteKeyRequest
* @version 1.0
*/

var EncryptionAdminDeleteKeyRequest = (function () {
    /**
    * Constructs a new <code>EncryptionAdminDeleteKeyRequest</code>.
    * @alias module:model/EncryptionAdminDeleteKeyRequest
    * @class
    */

    function EncryptionAdminDeleteKeyRequest() {
        _classCallCheck(this, EncryptionAdminDeleteKeyRequest);

        this.KeyID = undefined;
    }

    /**
    * Constructs a <code>EncryptionAdminDeleteKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EncryptionAdminDeleteKeyRequest} obj Optional instance to populate.
    * @return {module:model/EncryptionAdminDeleteKeyRequest} The populated <code>EncryptionAdminDeleteKeyRequest</code> instance.
    */

    EncryptionAdminDeleteKeyRequest.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionAdminDeleteKeyRequest();

            if (data.hasOwnProperty('KeyID')) {
                obj['KeyID'] = _ApiClient2['default'].convertToType(data['KeyID'], 'String');
            }
        }
        return obj;
    };

    /**
    * @member {String} KeyID
    */
    return EncryptionAdminDeleteKeyRequest;
})();

exports['default'] = EncryptionAdminDeleteKeyRequest;
module.exports = exports['default'];