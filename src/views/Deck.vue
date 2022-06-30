<template>
  <div class="deck">
    <h1>Your Deck</h1>
    <Card />
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
      const [selectedCards] = await axios.all(
        deck.map(
          (cardId) => axios.get(`https://api.magicthegathering.io/v1/cards/${cardId}`),
        ),
      );
      this.cardsInDeck = selectedCards.data;
    },
  },
  mounted() {
    this.fetchCards(this.deck);
  },
};
</script>
