
// /app/client/controller.js
import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editClient: function() {
      this.set('isEditing', true);
    },
    saveChanges: function() {
      var self = this;
      this.get('model').save().then(function() {
        console.log('SUCCESS');
        self.set('isEditing', false);
      }, function() {
        console.log('FAIL');
      });
    },
    cancelChanges: function() {
      this.get('model').rollback();
      this.set('isEditing', false);
    },
    deleteClient: function() {
      var client = this.get('model');
      client.deleteRecord();
      if (confirm("Are you sure you want to delete this client?")) {
        client.save();
        this.transitionToRoute('clients');
      } else {
        client.rollback();
      }
    }
  }
});
