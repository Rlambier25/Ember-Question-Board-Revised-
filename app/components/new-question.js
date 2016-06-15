
import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var questionInput = {
        ask: this.get('ask') ? this.get('ask') : "",
        author: this.get('author') ? this.get('author') : "",
        note: this.get('note') ? this.get('note') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', questionInput);
    }
  }
});
