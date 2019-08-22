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
    instance = new NetilionApiDocumentation.ProductApi();
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

  describe('ProductApi', function() {
    describe('addCategoriesToProduct', function() {
      it('should call addCategoriesToProduct successfully', function(done) {
        //uncomment below and update the code to test addCategoriesToProduct
        //instance.addCategoriesToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentsToProduct', function() {
      it('should call addDocumentsToProduct successfully', function(done) {
        //uncomment below and update the code to test addDocumentsToProduct
        //instance.addDocumentsToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addEdgeDeviceFeaturesToProduct', function() {
      it('should call addEdgeDeviceFeaturesToProduct successfully', function(done) {
        //uncomment below and update the code to test addEdgeDeviceFeaturesToProduct
        //instance.addEdgeDeviceFeaturesToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addProductPictureLink', function() {
      it('should call addProductPictureLink successfully', function(done) {
        //uncomment below and update the code to test addProductPictureLink
        //instance.addProductPictureLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPurchaseOrdersToProduct', function() {
      it('should call addPurchaseOrdersToProduct successfully', function(done) {
        //uncomment below and update the code to test addPurchaseOrdersToProduct
        //instance.addPurchaseOrdersToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addQuotationsToProduct', function() {
      it('should call addQuotationsToProduct successfully', function(done) {
        //uncomment below and update the code to test addQuotationsToProduct
        //instance.addQuotationsToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addSoftwaresToProduct', function() {
      it('should call addSoftwaresToProduct successfully', function(done) {
        //uncomment below and update the code to test addSoftwaresToProduct
        //instance.addSoftwaresToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProduct', function() {
      it('should call createProduct successfully', function(done) {
        //uncomment below and update the code to test createProduct
        //instance.createProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProductFeature', function() {
      it('should call createProductFeature successfully', function(done) {
        //uncomment below and update the code to test createProductFeature
        //instance.createProductFeature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProductOption', function() {
      it('should call createProductOption successfully', function(done) {
        //uncomment below and update the code to test createProductOption
        //instance.createProductOption(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProductVariant', function() {
      it('should call createProductVariant successfully', function(done) {
        //uncomment below and update the code to test createProductVariant
        //instance.createProductVariant(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCategoriesFromProduct', function() {
      it('should call deleteCategoriesFromProduct successfully', function(done) {
        //uncomment below and update the code to test deleteCategoriesFromProduct
        //instance.deleteCategoriesFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProduct', function() {
      it('should call deleteProduct successfully', function(done) {
        //uncomment below and update the code to test deleteProduct
        //instance.deleteProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductFeature', function() {
      it('should call deleteProductFeature successfully', function(done) {
        //uncomment below and update the code to test deleteProductFeature
        //instance.deleteProductFeature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductOption', function() {
      it('should call deleteProductOption successfully', function(done) {
        //uncomment below and update the code to test deleteProductOption
        //instance.deleteProductOption(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductPicture', function() {
      it('should call deleteProductPicture successfully', function(done) {
        //uncomment below and update the code to test deleteProductPicture
        //instance.deleteProductPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductVariant', function() {
      it('should call deleteProductVariant successfully', function(done) {
        //uncomment below and update the code to test deleteProductVariant
        //instance.deleteProductVariant(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadProductPicture', function() {
      it('should call downloadProductPicture successfully', function(done) {
        //uncomment below and update the code to test downloadProductPicture
        //instance.downloadProductPicture(function(error) {
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
    describe('getCategoriesOfProduct', function() {
      it('should call getCategoriesOfProduct successfully', function(done) {
        //uncomment below and update the code to test getCategoriesOfProduct
        //instance.getCategoriesOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCategoriesOptionsOfProduct', function() {
      it('should call getCategoriesOptionsOfProduct successfully', function(done) {
        //uncomment below and update the code to test getCategoriesOptionsOfProduct
        //instance.getCategoriesOptionsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentsOfProduct', function() {
      it('should call getDocumentsOfProduct successfully', function(done) {
        //uncomment below and update the code to test getDocumentsOfProduct
        //instance.getDocumentsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEdgeDeviceFeaturesOfProduct', function() {
      it('should call getEdgeDeviceFeaturesOfProduct successfully', function(done) {
        //uncomment below and update the code to test getEdgeDeviceFeaturesOfProduct
        //instance.getEdgeDeviceFeaturesOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductById', function() {
      it('should call getProductById successfully', function(done) {
        //uncomment below and update the code to test getProductById
        //instance.getProductById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductFeatureById', function() {
      it('should call getProductFeatureById successfully', function(done) {
        //uncomment below and update the code to test getProductFeatureById
        //instance.getProductFeatureById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductFeatures', function() {
      it('should call getProductFeatures successfully', function(done) {
        //uncomment below and update the code to test getProductFeatures
        //instance.getProductFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductIdStatus', function() {
      it('should call getProductIdStatus successfully', function(done) {
        //uncomment below and update the code to test getProductIdStatus
        //instance.getProductIdStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductOptionById', function() {
      it('should call getProductOptionById successfully', function(done) {
        //uncomment below and update the code to test getProductOptionById
        //instance.getProductOptionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductOptions', function() {
      it('should call getProductOptions successfully', function(done) {
        //uncomment below and update the code to test getProductOptions
        //instance.getProductOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductPicture', function() {
      it('should call getProductPicture successfully', function(done) {
        //uncomment below and update the code to test getProductPicture
        //instance.getProductPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductPictures', function() {
      it('should call getProductPictures successfully', function(done) {
        //uncomment below and update the code to test getProductPictures
        //instance.getProductPictures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductStatusesOptions', function() {
      it('should call getProductStatusesOptions successfully', function(done) {
        //uncomment below and update the code to test getProductStatusesOptions
        //instance.getProductStatusesOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductVaraints', function() {
      it('should call getProductVaraints successfully', function(done) {
        //uncomment below and update the code to test getProductVaraints
        //instance.getProductVaraints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductVariantById', function() {
      it('should call getProductVariantById successfully', function(done) {
        //uncomment below and update the code to test getProductVariantById
        //instance.getProductVariantById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductVariantConfigurations', function() {
      it('should call getProductVariantConfigurations successfully', function(done) {
        //uncomment below and update the code to test getProductVariantConfigurations
        //instance.getProductVariantConfigurations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProducts', function() {
      it('should call getProducts successfully', function(done) {
        //uncomment below and update the code to test getProducts
        //instance.getProducts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsOfCompany', function() {
      it('should call getProductsOfCompany successfully', function(done) {
        //uncomment below and update the code to test getProductsOfCompany
        //instance.getProductsOfCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPurchaseOrdersOfProduct', function() {
      it('should call getPurchaseOrdersOfProduct successfully', function(done) {
        //uncomment below and update the code to test getPurchaseOrdersOfProduct
        //instance.getPurchaseOrdersOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getQuotationsOfProduct', function() {
      it('should call getQuotationsOfProduct successfully', function(done) {
        //uncomment below and update the code to test getQuotationsOfProduct
        //instance.getQuotationsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSoftwaresOfProduct', function() {
      it('should call getSoftwaresOfProduct successfully', function(done) {
        //uncomment below and update the code to test getSoftwaresOfProduct
        //instance.getSoftwaresOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpecificationsOfProduct', function() {
      it('should call getSpecificationsOfProduct successfully', function(done) {
        //uncomment below and update the code to test getSpecificationsOfProduct
        //instance.getSpecificationsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDocumentsFromProduct', function() {
      it('should call removeDocumentsFromProduct successfully', function(done) {
        //uncomment below and update the code to test removeDocumentsFromProduct
        //instance.removeDocumentsFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeEdgeDeviceFeaturesFromProduct', function() {
      it('should call removeEdgeDeviceFeaturesFromProduct successfully', function(done) {
        //uncomment below and update the code to test removeEdgeDeviceFeaturesFromProduct
        //instance.removeEdgeDeviceFeaturesFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removePurchaseOrdersFromProduct', function() {
      it('should call removePurchaseOrdersFromProduct successfully', function(done) {
        //uncomment below and update the code to test removePurchaseOrdersFromProduct
        //instance.removePurchaseOrdersFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeQuotationsFromProduct', function() {
      it('should call removeQuotationsFromProduct successfully', function(done) {
        //uncomment below and update the code to test removeQuotationsFromProduct
        //instance.removeQuotationsFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSoftwaresOfProduct', function() {
      it('should call removeSoftwaresOfProduct successfully', function(done) {
        //uncomment below and update the code to test removeSoftwaresOfProduct
        //instance.removeSoftwaresOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSpecificationsFromProduct', function() {
      it('should call removeSpecificationsFromProduct successfully', function(done) {
        //uncomment below and update the code to test removeSpecificationsFromProduct
        //instance.removeSpecificationsFromProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameSpecificationsOfProduct', function() {
      it('should call renameSpecificationsOfProduct successfully', function(done) {
        //uncomment below and update the code to test renameSpecificationsOfProduct
        //instance.renameSpecificationsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceCategoriesOfProduct', function() {
      it('should call replaceCategoriesOfProduct successfully', function(done) {
        //uncomment below and update the code to test replaceCategoriesOfProduct
        //instance.replaceCategoriesOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceDocumentsOfProduct', function() {
      it('should call replaceDocumentsOfProduct successfully', function(done) {
        //uncomment below and update the code to test replaceDocumentsOfProduct
        //instance.replaceDocumentsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceEdgeDeviceFeaturesOfProduct', function() {
      it('should call replaceEdgeDeviceFeaturesOfProduct successfully', function(done) {
        //uncomment below and update the code to test replaceEdgeDeviceFeaturesOfProduct
        //instance.replaceEdgeDeviceFeaturesOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replacePurchaseOrdersOfProduct', function() {
      it('should call replacePurchaseOrdersOfProduct successfully', function(done) {
        //uncomment below and update the code to test replacePurchaseOrdersOfProduct
        //instance.replacePurchaseOrdersOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceQuotationsOfProduct', function() {
      it('should call replaceQuotationsOfProduct successfully', function(done) {
        //uncomment below and update the code to test replaceQuotationsOfProduct
        //instance.replaceQuotationsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceSoftwaresOfProduct', function() {
      it('should call replaceSoftwaresOfProduct successfully', function(done) {
        //uncomment below and update the code to test replaceSoftwaresOfProduct
        //instance.replaceSoftwaresOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setProductVariantConfiguration', function() {
      it('should call setProductVariantConfiguration successfully', function(done) {
        //uncomment below and update the code to test setProductVariantConfiguration
        //instance.setProductVariantConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProduct', function() {
      it('should call updateProduct successfully', function(done) {
        //uncomment below and update the code to test updateProduct
        //instance.updateProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductFeature', function() {
      it('should call updateProductFeature successfully', function(done) {
        //uncomment below and update the code to test updateProductFeature
        //instance.updateProductFeature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductOption', function() {
      it('should call updateProductOption successfully', function(done) {
        //uncomment below and update the code to test updateProductOption
        //instance.updateProductOption(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductPicture', function() {
      it('should call updateProductPicture successfully', function(done) {
        //uncomment below and update the code to test updateProductPicture
        //instance.updateProductPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductPictureLink', function() {
      it('should call updateProductPictureLink successfully', function(done) {
        //uncomment below and update the code to test updateProductPictureLink
        //instance.updateProductPictureLink(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProductVariant', function() {
      it('should call updateProductVariant successfully', function(done) {
        //uncomment below and update the code to test updateProductVariant
        //instance.updateProductVariant(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSpecificationsOfProduct', function() {
      it('should call updateSpecificationsOfProduct successfully', function(done) {
        //uncomment below and update the code to test updateSpecificationsOfProduct
        //instance.updateSpecificationsOfProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadProductPicture', function() {
      it('should call uploadProductPicture successfully', function(done) {
        //uncomment below and update the code to test uploadProductPicture
        //instance.uploadProductPicture(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
