
// /app/client/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('client', params.client_id);
  }
});
