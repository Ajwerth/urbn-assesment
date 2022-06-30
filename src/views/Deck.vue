<template>
  <div class="deck">
    <h1>Your Deck</h1>
    <!-- if there isn't at least one card in deck don't load card component -->
    <div class="cards-container" v-if="hasSelectedCards">
      <Card
        v-for="(card) in cardsInDeck"
        :key="card.id"
        :cardId="card.id"
        :cardName="card.name"
        :cardImg="card.imageUrl"
      />
    </div>
    <p v-if="!hasSelectedCards">No Cards Selected</p>
  </div>
</template>
<script>
import axios from 'axios';
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'Deck',
  components: {
    Card,
  },
  data: () => ({
    hasSelectedCards: false,
    cardsInDeck: [],
    fetchError: '',
  }),
  computed: {
    ...mapState([
      'deck',
    ]),
  },
  methods: {
    // Loop through deck array and fetch the data for each card using cardId
    async fetchCards(deck) {
      this.cardsInDeck.push(await axios.all(
        deck.map(
          (cardId) => axios.get(`https://api.magicthegathering.io/v1/cards/${cardId}`)
            .then((response) => response.data),
        ),
      ));
    },
  },
  mounted() {
    // check to make sure there is atleast one card in the deck
    if (this.deck.length > 0) {
      this.hasSelectedCards = true;
    }
    this.fetchCards(this.deck);
  },
};
</script>
