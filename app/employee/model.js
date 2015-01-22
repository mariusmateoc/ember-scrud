
// /app/employee/model.js
import DS from 'ember-data';

var Employee = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  occupation: DS.attr('string'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});

Employee.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Tapia',
      email: 'john.tapia@mail.com',
      occupation: 'UI Designer'
    },{
      id: 2,
      firstName: 'Monica',
      lastName: 'Kunkel',
      email: 'monica.kunkel@mail.com',
      occupation: 'Frontend Developer'
    },{
      id: 3,
      firstName: 'Patrick',
      lastName: 'Poovel',
      email: 'patrick.poovel@mail.com',
      occupation: 'Marketing Director'
    },{
      id: 4,
      firstName: 'Christopher',
      lastName: 'Anderson',
      email: 'christopher.anderson@mail.com',
      occupation: 'Backend Developer'
    }
  ]
});

export default Employee;