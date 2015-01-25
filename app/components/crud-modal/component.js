
// /app/components/crud-modal/component.js
import Ember from 'ember';

export default Ember.Component.extend({
  // Set default names for our buttons
  cancelButtonText: "Cancel",
  submitButtonText: "Yes",

  actions: {
    submit: function() {
      this.$('.crud-modal').modal('hide');
      this.sendAction('submit');
    }
  },

  showModal: function() {
    this.$('.crud-modal').modal().on('hidden.bs.modal', function() {
      this.sendAction('cancel');
    }.bind(this));
  }.on('didInsertElement')
});
