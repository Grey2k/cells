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

var _RestSettingsEntryMeta = require('./RestSettingsEntryMeta');

var _RestSettingsEntryMeta2 = _interopRequireDefault(_RestSettingsEntryMeta);

var _RestSettingsSection = require('./RestSettingsSection');

var _RestSettingsSection2 = _interopRequireDefault(_RestSettingsSection);

/**
* The RestSettingsMenuResponse model module.
* @module model/RestSettingsMenuResponse
* @version 1.0
*/

var RestSettingsMenuResponse = (function () {
    /**
    * Constructs a new <code>RestSettingsMenuResponse</code>.
    * @alias module:model/RestSettingsMenuResponse
    * @class
    */

    function RestSettingsMenuResponse() {
        _classCallCheck(this, RestSettingsMenuResponse);

        this.RootMetadata = undefined;
        this.Sections = undefined;
    }

    /**
    * Constructs a <code>RestSettingsMenuResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestSettingsMenuResponse} obj Optional instance to populate.
    * @return {module:model/RestSettingsMenuResponse} The populated <code>RestSettingsMenuResponse</code> instance.
    */

    RestSettingsMenuResponse.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSettingsMenuResponse();

            if (data.hasOwnProperty('RootMetadata')) {
                obj['RootMetadata'] = _RestSettingsEntryMeta2['default'].constructFromObject(data['RootMetadata']);
            }
            if (data.hasOwnProperty('Sections')) {
                obj['Sections'] = _ApiClient2['default'].convertToType(data['Sections'], [_RestSettingsSection2['default']]);
            }
        }
        return obj;
    };

    /**
    * @member {module:model/RestSettingsEntryMeta} RootMetadata
    */
    return RestSettingsMenuResponse;
})();

exports['default'] = RestSettingsMenuResponse;
module.exports = exports['default'];

/**
* @member {Array.<module:model/RestSettingsSection>} Sections
*/