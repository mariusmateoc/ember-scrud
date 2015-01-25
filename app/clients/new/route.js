
// /app/clients/new/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return this.store.createRecord('client', {
  //     companyName: this.get('companyName'),
  //     email: this.get('email'),
  //     totalProjects: 0,
  //     createdAt: new Date()
  //   });
  // },

  createClient: function() {
    var newClient = this.store.createRecord('client', {
      companyName: this.get('companyName'),
      email: this.get('email'),
      totalProjects: 0,
      createdAt: new Date()
    });
    newClient.save();
    console.log(this.get('companyName'));
    return newClient;
  },

  actions: {
    createNewClient: function() {
      // Create new Record
      this.store.createRecord('client', {
        companyName: this.get('companyName'),
        email: this.get('email'),
        totalProjects: 0,
        createdAt: new Date()
      });
      // console.log(this.createClient());
      // Navigate back to clients
      this.transitionTo('clients');
    },
    cancelNewClient: function() {
      // Discard changes
      // Navigate back to clients route
      this.transitionTo('clients');
    }
  }
});
