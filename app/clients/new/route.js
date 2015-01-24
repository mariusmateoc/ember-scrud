
// /app/clients/new/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNewClient: function() {
      // Create new Record
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
