import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNewProject: function() {
      var client = this.store.createRecord('project', {
        name: this.get('name'),
        projectType: this.get('projectType'),
        amount: this.get('amount'),
      });
      // Clear the fields
      this.set('name', '');
      this.set('projectType', '');
      this.set('amount', '');

      client.save();
      this.transitionToRoute('projects');
    },
    cancelNewProject: function() {
      this.transitionToRoute('projects');
    }
  }
});
