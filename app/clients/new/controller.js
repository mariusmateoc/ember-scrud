
// /app/clients/new/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNewClient: function() {
      var client = this.store.createRecord('client', {
        companyName: this.get('companyName'),
        email: this.get('email'),
        totalProjects: 0,
        createdAt: new Date()
      });
      // Clear the fields
      this.set('companyName', '');
      this.set('email', '');

      client.save();
      this.transitionToRoute('clients');
    },
    cancelNewClient: function() {
      this.transitionToRoute('clients');
    }
  }
});
