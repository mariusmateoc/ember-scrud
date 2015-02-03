import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNewEmployee: function() {
      var employee = this.store.createRecord('employee', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        occupation: this.get('occupation'),
      });
      // Clear the fields
      this.set('firstName', '');
      this.set('lastName', '');
      this.set('email', '');
      this.set('occupation', '');

      employee.save();
      this.transitionToRoute('employees');
    },
    cancelNewEmployee: function() {
      this.transitionToRoute('employees');
    }
  }
});
