import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
    actions: {
      answerFormShow() {
        this.set('addNewAnswer', true);
  },

  saveAnswer() {
    var params = {
      answer: this.get('answer'),
      author: this.get('author'),
      question: this.get('question'),
      votes: 0
  };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
