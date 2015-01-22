
// /app/employee/controller.js
import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editEmployee: function() {
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
    deleteEmployee: function() {
      var employee = this.get('model');
      employee.deleteRecord();
      if (confirm("Are you sure you want to delete this employee?")) {
        employee.save();
        this.transitionToRoute('employees');
      } else {
        employee.rollback();
      }
    }
  }
});
