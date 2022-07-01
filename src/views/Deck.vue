<template>
  <div class="wrapper">
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
          :inDeck=true
        />
      </div>
      <p v-if="!hasSelectedCards">No Cards Selected</p>
    </div>
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
      try {
        // had to create a new variable here to hold the cards array
        // so I could use the spread opperator when adding the resulst to this.cardsInDeck
        const cards = await axios.all(deck.map(async (cardId) => {
          const response = await axios.get(`https://api.magicthegathering.io/v1/cards/${cardId}`);
          return response.data.card;
        }));
        this.cardsInDeck = [...cards];
      } catch (error) {
        this.fetchError = error;
      }
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
