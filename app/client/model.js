
// /app/client/model.js
import DS from 'ember-data';

var Client = DS.Model.extend({
  companyName: DS.attr('string'),
  email: DS.attr('string'),
  totalProjects: DS.attr('number'),
  createdAt: DS.attr('date')
});

Client.reopenClass({
  FIXTURES: [
    {
      id: 1,
      companyName: 'Apple.Inc',
      email: 'apple@mail.com',
      totalProjects: 4,
      createdAt: new Date(2014, 10, 10)
    },{
      id: 2,
      companyName: 'Telefonica',
      email: 'telefonica@mail.com',
      totalProjects: 2,
      createdAt: new Date(2014, 8, 12)
    },{
      id: 3,
      companyName: 'Delloite',
      email: 'delloite@mail.com',
      totalProjects: 3,
      createdAt: new Date(2014, 9, 7)
    }
  ]
});

export default Client;