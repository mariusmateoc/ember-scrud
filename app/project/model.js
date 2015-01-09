
// /app/project/model.js
import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr('string'),
  projectType: DS.attr('string'),
  amount: DS.attr('number')
});

Project.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Website Redesign',
      projectType: 'Design',
      amount: 12000
    },{
      id: 2,
      name: 'Backend Development',
      projectType: 'Development',
      amount: 23400
    },{
      id: 3,
      name: 'Social Media Presence',
      projectType: 'Marketing',
      amount: 7800
    }
  ]
});

export default Project;