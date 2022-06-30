import { createStore } from 'vuex';

export default createStore({
  state: {
    deck: [],
  },
  mutations: {
    ADD_CARD_TO_DECK: (state, cardId) => {
      state.deck.push(cardId);
    },
  },
  actions: {
    addCardToDeckAction(context, cardId) {
      context.commit('ADD_CARD_TO_DECK', cardId);
    },
  },
  modules: {
  },
});
