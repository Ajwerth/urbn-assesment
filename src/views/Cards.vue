<template>
  <!--
    Card View, treating this sort of like a HOC fetching data for
    the cards here and passing it down to the card component
  -->
  <div class="wrapper">
    <h1>Cards</h1>
    <div class="cards-container">
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
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card.vue';

export default {
  name: 'Cards',
  components: {
    Card,
  },
  data: () => ({
    cards: [],
    fetchError: '',
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
  .cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (max-width: 595px) {
    .cards-contianer{
      justify-content: center;
    }
  }

  /* Small screen devices (600px and above) */
  @media only screen and (min-width: 600px) {
    .cards-container{
      justify-content: space-between;
    }
  }
</style>
