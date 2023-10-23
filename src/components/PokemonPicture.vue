<template>
  <div class="pokemon-container">
    <img class="hidden-pkmn" :src="imgSrc" alt="Pokemon">
    <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="Pokemon"> 
</div>
  
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed:{
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }

}
</script>

<style scoped>
.hidden-pkmn{
  filter: brightness(0);
}
.pokemon-container {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    margin: auto;
    height: 200px;   
}
img {
    position: absolute;
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
</style>