<template>
  <!--
    Card View, treating this sort of like a HOC fetching data for
    the cards here and passing it down to the card component
  -->
  <div class="wrapper">
    <h1>Cards</h1>
    <h3>Cards in Deck </h3>
    <div v-if="numOfCardsSelected > 0" class="cards-container">
    <!--
      Using card.id for the key, according to the api documentation
      the ID is unique for each card
    -->
      <Card
        v-for="(card) in cards"
        :key="card.id"
        :cardId="card.id"
        :cardName="card.name"
        :cardImg="card.imageUrl"
        :inDeck=false
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'Cards',
  components: {
    Card,
  },
  data: () => ({
    cards: [],
    fetchError: '',
    numCardsSelected: 0,
  }),
  mounted() {
    // Fetch Cards From MTG API
    axios.get('https://api.magicthegathering.io/v1/cards')
      .then((response) => {
        // Variant cards don't have image urls, only add cards with image urls to cards array
        const noVariants = response.data.cards.filter(
          (card) => (card.imageUrl !== undefined),
        );
        this.cards = [...noVariants];
      })
      .catch((error) => {
        // Handle error
        this.fetchError = error;
        console.log(error);
      });
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
