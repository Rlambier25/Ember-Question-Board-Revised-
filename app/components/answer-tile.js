import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswer: Ember.inject.service(),

  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),

  actions: {
    like(answer) {
      this.sendAction('like', answer);
    }
  }
});
