import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(questionInput){
      var newQuestion = this.store.createRecord('question', questionInput);
      newQuestion.save();
      this.transitionTo('index'); //not necessary
    }
  }
});

//forwards questionInput into newQuestion variable which creates a new instance of the object?
