
// /app/project/controller.js
import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editProject: function() {
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
    deleteProject: function() {
      var project = this.get('model');
      project.deleteRecord();
      if (confirm("Are you sure you want to delete this project?")) {
        project.save();
        this.transitionToRoute('projects');
      } else {
        project.rollback();
      }
    }
  }
});
