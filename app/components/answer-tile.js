import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like(answer) {
      this.sendAction('like', answer);
    }
  }
});
