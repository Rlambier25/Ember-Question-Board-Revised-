import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['likes:desc'],
  sortedAnswers: Ember.computed.sort('answer', 'sortBy'),

  actions: {
    like(answer) {
      this.sendAction('like', answer);
    }
  }
});
