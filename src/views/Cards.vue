<template>
  <div class="hello">
    <h1>Cards</h1>
    <!-- build a simple card component -->
    <div v-for="card in cards" :key="card.id">
      <p>{{card.name}}</p>
      <img :src="card.imageUrl" :alt="card.name"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cards',
  data: () => ({
    cards: [],
  }),
  mounted() {
    // Fetch Cards From MTG API
    axios.get('https://api.magicthegathering.io/v1/cards')
      .then((response) => {
        this.cards = [...response.data.cards];
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
