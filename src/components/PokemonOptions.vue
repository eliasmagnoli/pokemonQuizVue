<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id"
          @click="this.$emit( 'selection', pokemon.id )">
          {{ pokemon.name }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
  methods: {
     hola() {
      /* this.$emit() */
    } 
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
li {
    background-color: #202020;
    border-radius: 5px;
    color: azure;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    padding:.5rem 8rem;
    font-size: 18px;
    text-transform: capitalize;
    transition: 100ms ease all;
}

li:hover {
    background-color: rgb(243, 91, 91);
}

.options-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 0;
}
</style>