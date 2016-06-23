import Ember from 'ember';

export default Ember.Component.extend({
favoriteAnswer: Ember.inject.service(),

  sortBy: ['likes:asc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    like(answer) {
      this.sendAction('like', answer);
    },

    addFavorite(answer) {
      this.get('favoriteAnswer').add(answer);
    }
  }
});
