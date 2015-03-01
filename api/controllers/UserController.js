/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  find: function(req ,res){
  		sails.log.debug('Find');
  		res.ok();
  },

  findOne: function(req ,res){
  		sails.log.debug('FindOne');
  		res.ok();
  },

  create: function(req ,res){
  		sails.log.debug('create');
  		res.ok();
  },

  update: function(req ,res){
  		sails.log.debug('Update');
  		res.ok();
  },

  destroy: function(req ,res){
  		sails.log.debug('Destroy');
  		res.ok();
  }
};

