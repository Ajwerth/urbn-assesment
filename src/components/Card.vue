<template>
  <div class="card">
    <p>{{cardName}}</p>
    <img :src="cardImg" :alt="cardName"/>
    <button @click="addCardToDeckAction(cardId)">+ Add Card</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Card',
  props: [
    'cardName',
    'cardImg',
    'cardId',
  ],
  data: () => ({
  }),
  methods: {
    ...mapActions([
      'addCardToDeckAction',
    ]),
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin: 10px;
}
</style>
