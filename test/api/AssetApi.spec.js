/**
 * Netilion API Documentation
 * Welcome to the Netilion API Documentation, which provides interactive access and documentation to our REST API. Please visit our developer portal for further instructions and information: https://developer.netilion.endress.com/ 
 *
 * OpenAPI spec version: 01.00.00
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetilionApiDocumentation);
  }
}(this, function(expect, NetilionApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetilionApiDocumentation.AssetApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AssetApi', function() {
    describe('addAssetPictureLink', function() {
      it('should call addAssetPictureLink successfully', function(done) {
        //uncomment below and update the code to test addAssetPictureLink
        //instance.addAssetPictureLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDeliveriesToAsset', function() {
      it('should call addDeliveriesToAsset successfully', function(done) {
        //uncomment below and update the code to test addDeliveriesToAsset
        //instance.addDeliveriesToAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentsToAsset', function() {
      it('should call addDocumentsToAsset successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToAsset
        //instance.addDocumentsToAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInstrumentationsToAsset', function() {
      it('should call addInstrumentationsToAsset successfully', function(done) {
        //uncomment below and update the code to test addInstrumentationsToAsset
        //instance.addInstrumentationsToAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNodesToAsset', function() {
      it('should call addNodesToAsset successfully', function(done) {
        //uncomment below and update the code to test addNodesToAsset
        //instance.addNodesToAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAsset', function() {
      it('should call createAsset successfully', function(done) {
        //uncomment below and update the code to test createAsset
        //instance.createAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEventForAsset', function() {
      it('should call createEventForAsset successfully', function(done) {
        //uncomment below and update the code to test createEventForAsset
        //instance.createEventForAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAsset', function() {
      it('should call deleteAsset successfully', function(done) {
        //uncomment below and update the code to test deleteAsset
        //instance.deleteAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAssetPicture', function() {
      it('should call deleteAssetPicture successfully', function(done) {
        //uncomment below and update the code to test deleteAssetPicture
        //instance.deleteAssetPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSpecificationsOfAsset', function() {
      it('should call deleteSpecificationsOfAsset successfully', function(done) {
        //uncomment below and update the code to test deleteSpecificationsOfAsset
        //instance.deleteSpecificationsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadAssetPicture', function() {
      it('should call downloadAssetPicture successfully', function(done) {
        //uncomment below and update the code to test downloadAssetPicture
        //instance.downloadAssetPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetById', function() {
      it('should call getAssetById successfully', function(done) {
        //uncomment below and update the code to test getAssetById
        //instance.getAssetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetCompanyOptions', function() {
      it('should call getAssetCompanyOptions successfully', function(done) {
        //uncomment below and update the code to test getAssetCompanyOptions
        //instance.getAssetCompanyOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetHistory', function() {
      it('should call getAssetHistory successfully', function(done) {
        //uncomment below and update the code to test getAssetHistory
        //instance.getAssetHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetIdStatus', function() {
      it('should call getAssetIdStatus successfully', function(done) {
        //uncomment below and update the code to test getAssetIdStatus
        //instance.getAssetIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetPicture', function() {
      it('should call getAssetPicture successfully', function(done) {
        //uncomment below and update the code to test getAssetPicture
        //instance.getAssetPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetPictures', function() {
      it('should call getAssetPictures successfully', function(done) {
        //uncomment below and update the code to test getAssetPictures
        //instance.getAssetPictures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetProductOptions', function() {
      it('should call getAssetProductOptions successfully', function(done) {
        //uncomment below and update the code to test getAssetProductOptions
        //instance.getAssetProductOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetStatusesOptions', function() {
      it('should call getAssetStatusesOptions successfully', function(done) {
        //uncomment below and update the code to test getAssetStatusesOptions
        //instance.getAssetStatusesOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetTenantOptions', function() {
      it('should call getAssetTenantOptions successfully', function(done) {
        //uncomment below and update the code to test getAssetTenantOptions
        //instance.getAssetTenantOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssets', function() {
      it('should call getAssets successfully', function(done) {
        //uncomment below and update the code to test getAssets
        //instance.getAssets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeliveriesOfAsset', function() {
      it('should call getDeliveriesOfAsset successfully', function(done) {
        //uncomment below and update the code to test getDeliveriesOfAsset
        //instance.getDeliveriesOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfAsset', function() {
      it('should call getDocumentsOfAsset successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfAsset
        //instance.getDocumentsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventsOfAsset', function() {
      it('should call getEventsOfAsset successfully', function(done) {
        //uncomment below and update the code to test getEventsOfAsset
        //instance.getEventsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationsOfAsset', function() {
      it('should call getInstrumentationsOfAsset successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationsOfAsset
        //instance.getInstrumentationsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationsOfAssetHistory', function() {
      it('should call getInstrumentationsOfAssetHistory successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationsOfAssetHistory
        //instance.getInstrumentationsOfAssetHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodesOfAsset', function() {
      it('should call getNodesOfAsset successfully', function(done) {
        //uncomment below and update the code to test getNodesOfAsset
        //instance.getNodesOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpecificationHistoryOfAsset', function() {
      it('should call getSpecificationHistoryOfAsset successfully', function(done) {
        //uncomment below and update the code to test getSpecificationHistoryOfAsset
        //instance.getSpecificationHistoryOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpecificationsOfAsset', function() {
      it('should call getSpecificationsOfAsset successfully', function(done) {
        //uncomment below and update the code to test getSpecificationsOfAsset
        //instance.getSpecificationsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionsOfAsset', function() {
      it('should call getSubscriptionsOfAsset successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionsOfAsset
        //instance.getSubscriptionsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDeliveriesFromAsset', function() {
      it('should call removeDeliveriesFromAsset successfully', function(done) {
        //uncomment below and update the code to test removeDeliveriesFromAsset
        //instance.removeDeliveriesFromAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromAsset', function() {
      it('should call removeDocumentsFromAsset successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromAsset
        //instance.removeDocumentsFromAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeEventFromAsset', function() {
      it('should call removeEventFromAsset successfully', function(done) {
        //uncomment below and update the code to test removeEventFromAsset
        //instance.removeEventFromAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeInstrumentationsOfAsset', function() {
      it('should call removeInstrumentationsOfAsset successfully', function(done) {
        //uncomment below and update the code to test removeInstrumentationsOfAsset
        //instance.removeInstrumentationsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeNodesFromAsset', function() {
      it('should call removeNodesFromAsset successfully', function(done) {
        //uncomment below and update the code to test removeNodesFromAsset
        //instance.removeNodesFromAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameSpecificationsOfAsset', function() {
      it('should call renameSpecificationsOfAsset successfully', function(done) {
        //uncomment below and update the code to test renameSpecificationsOfAsset
        //instance.renameSpecificationsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDeliveriesOfAsset', function() {
      it('should call replaceDeliveriesOfAsset successfully', function(done) {
        //uncomment below and update the code to test replaceDeliveriesOfAsset
        //instance.replaceDeliveriesOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfAsset', function() {
      it('should call replaceDocumentsOfAsset successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfAsset
        //instance.replaceDocumentsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceInstrumentationsOfAsset', function() {
      it('should call replaceInstrumentationsOfAsset successfully', function(done) {
        //uncomment below and update the code to test replaceInstrumentationsOfAsset
        //instance.replaceInstrumentationsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNodesOfAsset', function() {
      it('should call replaceNodesOfAsset successfully', function(done) {
        //uncomment below and update the code to test replaceNodesOfAsset
        //instance.replaceNodesOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAsset', function() {
      it('should call updateAsset successfully', function(done) {
        //uncomment below and update the code to test updateAsset
        //instance.updateAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAssetPicture', function() {
      it('should call updateAssetPicture successfully', function(done) {
        //uncomment below and update the code to test updateAssetPicture
        //instance.updateAssetPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAssetPictureLink', function() {
      it('should call updateAssetPictureLink successfully', function(done) {
        //uncomment below and update the code to test updateAssetPictureLink
        //instance.updateAssetPictureLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSpecificationsOfAsset', function() {
      it('should call updateSpecificationsOfAsset successfully', function(done) {
        //uncomment below and update the code to test updateSpecificationsOfAsset
        //instance.updateSpecificationsOfAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadAssetPicture', function() {
      it('should call uploadAssetPicture successfully', function(done) {
        //uncomment below and update the code to test uploadAssetPicture
        //instance.uploadAssetPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
