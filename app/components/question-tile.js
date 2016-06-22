import Ember from 'ember';

export default Ember.Component.extend({

  fullSource: Ember.computed('question.author', 'question.country', function() {
    return this.get('question.author') + ', ' + this.get(question.ask);
  }),

  actions: {
    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete the question?')){
      this.sendAction('destroyQuestion', question);
      }
    }
  }
});
