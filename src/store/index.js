import { createStore } from 'vuex';

export default createStore({
  state: {
    deck: [],
  },
  mutations: {
    ADD_CARD_TO_DECK: (state, card) => {
      state.deck.push(card);
    },
  },
  actions: {
    addCardToDeckAction(context, card) {
      context.commit('ADD_CARD_TO_DECK', card);
    },
  },
  modules: {
  },
});
