import DS from 'ember-data';
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  ask: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
