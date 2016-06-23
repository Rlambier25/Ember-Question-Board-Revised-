import Ember from 'ember';

export default Ember.Component.extend({
favoriteAnswer: Ember.inject.service(),

  

  actions: {
    like(answer) {
      this.sendAction('like', answer);
    },

    addFavorite(answer) {
      this.get('favoriteAnswer').add(answer);
    }
  }
});
