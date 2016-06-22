import Ember from 'ember';

export default Ember.Service.extend({
  favoriteAnswers: [],

  add(answer) {
    this.get('favoriteAnswers').pushObject(answer);
  }
});
