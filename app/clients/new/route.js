
// /app/clients/new/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('client', {
      companyName: this.get('companyName'),
      email: this.get('email'),
      totalProjects: 0,
      createdAt: new Date()
    });
  },

  actions: {
    createNewClient: function() {
      this.modelFor('clients/new').save();
      this.transitionTo('clients');
    },
    cancelNewClient: function() {
      this.modelFor('clients/new').rollback();
      this.transitionTo('clients');
    }
  }
});
