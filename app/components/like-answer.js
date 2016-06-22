import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['likes:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    like(answer) {
      this.sendAction('like', answer);
    }
  }
});
