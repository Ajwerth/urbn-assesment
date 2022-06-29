<template>
  <div class="card">
    <p>{{cardName}}</p>
    <img :src="cardImg" :alt="cardName"/>
    <button>+ Add Card</button>
  </div>
</template>

<script>
// simple card component
export default {
  name: 'Card',
  props: [
    'cardName',
    'cardImg',
  ],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
</style>
