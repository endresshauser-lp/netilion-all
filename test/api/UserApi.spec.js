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
    instance = new NetilionApiDocumentation.UserApi();
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

  describe('UserApi', function() {
    describe('addUserGroupsToUser', function() {
      it('should call addUserGroupsToUser successfully', function(done) {
        //uncomment below and update the code to test addUserGroupsToUser
        //instance.addUserGroupsToUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addUserRolesToUser', function() {
      it('should call addUserRolesToUser successfully', function(done) {
        //uncomment below and update the code to test addUserRolesToUser
        //instance.addUserRolesToUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCurrentUserDataExport', function() {
      it('should call createCurrentUserDataExport successfully', function(done) {
        //uncomment below and update the code to test createCurrentUserDataExport
        //instance.createCurrentUserDataExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTechnicalUser', function() {
      it('should call createTechnicalUser successfully', function(done) {
        //uncomment below and update the code to test createTechnicalUser
        //instance.createTechnicalUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCurrentUserDatasExport', function() {
      it('should call deleteCurrentUserDatasExport successfully', function(done) {
        //uncomment below and update the code to test deleteCurrentUserDatasExport
        //instance.deleteCurrentUserDatasExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCurrentUserNotifications', function() {
      it('should call deleteCurrentUserNotifications successfully', function(done) {
        //uncomment below and update the code to test deleteCurrentUserNotifications
        //instance.deleteCurrentUserNotifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTechnicalUser', function() {
      it('should call deleteTechnicalUser successfully', function(done) {
        //uncomment below and update the code to test deleteTechnicalUser
        //instance.deleteTechnicalUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUser', function() {
      it('should call getCurrentUser successfully', function(done) {
        //uncomment below and update the code to test getCurrentUser
        //instance.getCurrentUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUserAccessRights', function() {
      it('should call getCurrentUserAccessRights successfully', function(done) {
        //uncomment below and update the code to test getCurrentUserAccessRights
        //instance.getCurrentUserAccessRights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUserDataExportbyId', function() {
      it('should call getCurrentUserDataExportbyId successfully', function(done) {
        //uncomment below and update the code to test getCurrentUserDataExportbyId
        //instance.getCurrentUserDataExportbyId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUserDataExports', function() {
      it('should call getCurrentUserDataExports successfully', function(done) {
        //uncomment below and update the code to test getCurrentUserDataExports
        //instance.getCurrentUserDataExports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUserDataExportsFile', function() {
      it('should call getCurrentUserDataExportsFile successfully', function(done) {
        //uncomment below and update the code to test getCurrentUserDataExportsFile
        //instance.getCurrentUserDataExportsFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUserNotifications', function() {
      it('should call getCurrentUserNotifications successfully', function(done) {
        //uncomment below and update the code to test getCurrentUserNotifications
        //instance.getCurrentUserNotifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSignInsOfUser', function() {
      it('should call getSignInsOfUser successfully', function(done) {
        //uncomment below and update the code to test getSignInsOfUser
        //instance.getSignInsOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpecificationsOfUser', function() {
      it('should call getSpecificationsOfUser successfully', function(done) {
        //uncomment below and update the code to test getSpecificationsOfUser
        //instance.getSpecificationsOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTechnicalUsers', function() {
      it('should call getTechnicalUsers successfully', function(done) {
        //uncomment below and update the code to test getTechnicalUsers
        //instance.getTechnicalUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsageOfUser', function() {
      it('should call getUsageOfUser successfully', function(done) {
        //uncomment below and update the code to test getUsageOfUser
        //instance.getUsageOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserById', function() {
      it('should call getUserById successfully', function(done) {
        //uncomment below and update the code to test getUserById
        //instance.getUserById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserGroupsOfUser', function() {
      it('should call getUserGroupsOfUser successfully', function(done) {
        //uncomment below and update the code to test getUserGroupsOfUser
        //instance.getUserGroupsOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserRolesOfUser', function() {
      it('should call getUserRolesOfUser successfully', function(done) {
        //uncomment below and update the code to test getUserRolesOfUser
        //instance.getUserRolesOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsers', function() {
      it('should call getUsers successfully', function(done) {
        //uncomment below and update the code to test getUsers
        //instance.getUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lookupUser', function() {
      it('should call lookupUser successfully', function(done) {
        //uncomment below and update the code to test lookupUser
        //instance.lookupUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeSpecificationsFromUsers', function() {
      it('should call removeSpecificationsFromUsers successfully', function(done) {
        //uncomment below and update the code to test removeSpecificationsFromUsers
        //instance.removeSpecificationsFromUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserGroupFromUser', function() {
      it('should call removeUserGroupFromUser successfully', function(done) {
        //uncomment below and update the code to test removeUserGroupFromUser
        //instance.removeUserGroupFromUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserRolesFromUser', function() {
      it('should call removeUserRolesFromUser successfully', function(done) {
        //uncomment below and update the code to test removeUserRolesFromUser
        //instance.removeUserRolesFromUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('renameSpecificationsOfUsers', function() {
      it('should call renameSpecificationsOfUsers successfully', function(done) {
        //uncomment below and update the code to test renameSpecificationsOfUsers
        //instance.renameSpecificationsOfUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceUserGroupsOfUser', function() {
      it('should call replaceUserGroupsOfUser successfully', function(done) {
        //uncomment below and update the code to test replaceUserGroupsOfUser
        //instance.replaceUserGroupsOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceUserRolesOfUser', function() {
      it('should call replaceUserRolesOfUser successfully', function(done) {
        //uncomment below and update the code to test replaceUserRolesOfUser
        //instance.replaceUserRolesOfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetPasswordTechnicalUser', function() {
      it('should call resetPasswordTechnicalUser successfully', function(done) {
        //uncomment below and update the code to test resetPasswordTechnicalUser
        //instance.resetPasswordTechnicalUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSpecificationsOfUsers', function() {
      it('should call updateSpecificationsOfUsers successfully', function(done) {
        //uncomment below and update the code to test updateSpecificationsOfUsers
        //instance.updateSpecificationsOfUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUser', function() {
      it('should call updateUser successfully', function(done) {
        //uncomment below and update the code to test updateUser
        //instance.updateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
