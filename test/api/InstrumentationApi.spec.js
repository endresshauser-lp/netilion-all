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
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetilionApiDocumentation);
  }
}(this, function(expect, NetilionApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetilionApiDocumentation.InstrumentationApi();
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

  describe('InstrumentationApi', function() {
    describe('addAssetsToInstrumentation', function() {
      it('should call addAssetsToInstrumentation successfully', function(done) {
        //uncomment below and update the code to test addAssetsToInstrumentation
        //instance.addAssetsToInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addBillOfMaterialsToInstrumentation', function() {
      it('should call addBillOfMaterialsToInstrumentation successfully', function(done) {
        //uncomment below and update the code to test addBillOfMaterialsToInstrumentation
        //instance.addBillOfMaterialsToInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentsToInstrumentation', function() {
      it('should call addDocumentsToInstrumentation successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToInstrumentation
        //instance.addDocumentsToInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInstrumentationPictureLink', function() {
      it('should call addInstrumentationPictureLink successfully', function(done) {
        //uncomment below and update the code to test addInstrumentationPictureLink
        //instance.addInstrumentationPictureLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addNodesToInstrumentation', function() {
      it('should call addNodesToInstrumentation successfully', function(done) {
        //uncomment below and update the code to test addNodesToInstrumentation
        //instance.addNodesToInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEventForInstrumentation', function() {
      it('should call createEventForInstrumentation successfully', function(done) {
        //uncomment below and update the code to test createEventForInstrumentation
        //instance.createEventForInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createInstrumentation', function() {
      it('should call createInstrumentation successfully', function(done) {
        //uncomment below and update the code to test createInstrumentation
        //instance.createInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createInstrumentationThreshold', function() {
      it('should call createInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test createInstrumentationThreshold
        //instance.createInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstrumentation', function() {
      it('should call deleteInstrumentation successfully', function(done) {
        //uncomment below and update the code to test deleteInstrumentation
        //instance.deleteInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstrumentationPicture', function() {
      it('should call deleteInstrumentationPicture successfully', function(done) {
        //uncomment below and update the code to test deleteInstrumentationPicture
        //instance.deleteInstrumentationPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstrumentationThreshold', function() {
      it('should call deleteInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test deleteInstrumentationThreshold
        //instance.deleteInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadInstrumentationPicture', function() {
      it('should call downloadInstrumentationPicture successfully', function(done) {
        //uncomment below and update the code to test downloadInstrumentationPicture
        //instance.downloadInstrumentationPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetsOfInstrumentation', function() {
      it('should call getAssetsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test getAssetsOfInstrumentation
        //instance.getAssetsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetsOfInstrumentationHistory', function() {
      it('should call getAssetsOfInstrumentationHistory successfully', function(done) {
        //uncomment below and update the code to test getAssetsOfInstrumentationHistory
        //instance.getAssetsOfInstrumentationHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBillOfMaterialsOfInstrumentation', function() {
      it('should call getBillOfMaterialsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test getBillOfMaterialsOfInstrumentation
        //instance.getBillOfMaterialsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfInstrumentation', function() {
      it('should call getDocumentsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfInstrumentation
        //instance.getDocumentsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventsOfInstrumentation', function() {
      it('should call getEventsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test getEventsOfInstrumentation
        //instance.getEventsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationById', function() {
      it('should call getInstrumentationById successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationById
        //instance.getInstrumentationById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationIdStatus', function() {
      it('should call getInstrumentationIdStatus successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationIdStatus
        //instance.getInstrumentationIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationIdType', function() {
      it('should call getInstrumentationIdType successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationIdType
        //instance.getInstrumentationIdType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationPicture', function() {
      it('should call getInstrumentationPicture successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationPicture
        //instance.getInstrumentationPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationPictures', function() {
      it('should call getInstrumentationPictures successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationPictures
        //instance.getInstrumentationPictures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationStatusesOptions', function() {
      it('should call getInstrumentationStatusesOptions successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationStatusesOptions
        //instance.getInstrumentationStatusesOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationThreshold', function() {
      it('should call getInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationThreshold
        //instance.getInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationThresholds', function() {
      it('should call getInstrumentationThresholds successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationThresholds
        //instance.getInstrumentationThresholds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentationTypesOptions', function() {
      it('should call getInstrumentationTypesOptions successfully', function(done) {
        //uncomment below and update the code to test getInstrumentationTypesOptions
        //instance.getInstrumentationTypesOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentations', function() {
      it('should call getInstrumentations successfully', function(done) {
        //uncomment below and update the code to test getInstrumentations
        //instance.getInstrumentations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodesOfInstrumentation', function() {
      it('should call getNodesOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test getNodesOfInstrumentation
        //instance.getNodesOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpecificationHistoryOfInstrumentation', function() {
      it('should call getSpecificationHistoryOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test getSpecificationHistoryOfInstrumentation
        //instance.getSpecificationHistoryOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpecificationsOfInstrumentation', function() {
      it('should call getSpecificationsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test getSpecificationsOfInstrumentation
        //instance.getSpecificationsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeAssetsFromInstrumentation', function() {
      it('should call removeAssetsFromInstrumentation successfully', function(done) {
        //uncomment below and update the code to test removeAssetsFromInstrumentation
        //instance.removeAssetsFromInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeBillOfMaterialsFromInstrumentation', function() {
      it('should call removeBillOfMaterialsFromInstrumentation successfully', function(done) {
        //uncomment below and update the code to test removeBillOfMaterialsFromInstrumentation
        //instance.removeBillOfMaterialsFromInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromInstrumentation', function() {
      it('should call removeDocumentsFromInstrumentation successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromInstrumentation
        //instance.removeDocumentsFromInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeEventFromInstrumentation', function() {
      it('should call removeEventFromInstrumentation successfully', function(done) {
        //uncomment below and update the code to test removeEventFromInstrumentation
        //instance.removeEventFromInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeNodesFromInstrumentation', function() {
      it('should call removeNodesFromInstrumentation successfully', function(done) {
        //uncomment below and update the code to test removeNodesFromInstrumentation
        //instance.removeNodesFromInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSpecificationsFromInstrumentation', function() {
      it('should call removeSpecificationsFromInstrumentation successfully', function(done) {
        //uncomment below and update the code to test removeSpecificationsFromInstrumentation
        //instance.removeSpecificationsFromInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameSpecificationsOfInstrumentation', function() {
      it('should call renameSpecificationsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test renameSpecificationsOfInstrumentation
        //instance.renameSpecificationsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAssetsOfInstrumentation', function() {
      it('should call replaceAssetsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test replaceAssetsOfInstrumentation
        //instance.replaceAssetsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceBillOfMaterialsOfInstrumentation', function() {
      it('should call replaceBillOfMaterialsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test replaceBillOfMaterialsOfInstrumentation
        //instance.replaceBillOfMaterialsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfInstrumentation', function() {
      it('should call replaceDocumentsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfInstrumentation
        //instance.replaceDocumentsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNodesOfInstrumentation', function() {
      it('should call replaceNodesOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test replaceNodesOfInstrumentation
        //instance.replaceNodesOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstrumentation', function() {
      it('should call updateInstrumentation successfully', function(done) {
        //uncomment below and update the code to test updateInstrumentation
        //instance.updateInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstrumentationPicture', function() {
      it('should call updateInstrumentationPicture successfully', function(done) {
        //uncomment below and update the code to test updateInstrumentationPicture
        //instance.updateInstrumentationPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstrumentationPictureLink', function() {
      it('should call updateInstrumentationPictureLink successfully', function(done) {
        //uncomment below and update the code to test updateInstrumentationPictureLink
        //instance.updateInstrumentationPictureLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstrumentationThreshold', function() {
      it('should call updateInstrumentationThreshold successfully', function(done) {
        //uncomment below and update the code to test updateInstrumentationThreshold
        //instance.updateInstrumentationThreshold(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSpecificationsOfInstrumentation', function() {
      it('should call updateSpecificationsOfInstrumentation successfully', function(done) {
        //uncomment below and update the code to test updateSpecificationsOfInstrumentation
        //instance.updateSpecificationsOfInstrumentation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadInstrumentationPicture', function() {
      it('should call uploadInstrumentationPicture successfully', function(done) {
        //uncomment below and update the code to test uploadInstrumentationPicture
        //instance.uploadInstrumentationPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
