import DS from 'ember-data';
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', { async: true }),
  votes: DS.attr()
});
