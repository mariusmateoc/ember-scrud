
// /app/clients/new/route.js
import Ember from 'ember';

export default Ember.Route.extend({
  showModal: function() {
    return this.$('.crud-modal').modal()
});
