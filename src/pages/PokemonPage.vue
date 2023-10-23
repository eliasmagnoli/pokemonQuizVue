<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este <span>pokémon</span>?</h1>
    <PokemonPictureVue 
    :pokemonId="pokemon.id" 
    :showPokemon="showPokemon"/>
    <PokemonOptionsVue
     :pokemons="pokemonArr"
     @selection="checkAnswer($event)"
     />
     <template v-if="showAnswer">
      <h2 :style="{ color: isCorrect ? '#7dd37b' : '#f36d7d'}">
        {{message}}
      </h2>
       <button @click="newGame">
         Nuevo Juego
       </button>
     </template>
  </div>

</template>

<script>
import PokemonOptionsVue from '@/components/PokemonOptions.vue'
import PokemonPictureVue from '@/components/PokemonPicture.vue'

import getPokemonOptions from "@/helpers/getPokemonOptions.js"

export default {
  components: {
    PokemonOptionsVue,
    PokemonPictureVue
  },
  data(){
    return {
      isCorrect: false,
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message:''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(selectedId) {
      this.showPokemon = true
      this.showAnswer = true

      
      if (selectedId === this.pokemon.id) {
        this.isCorrect = true
        this.message = `Correcto, ${this.pokemon.name} es el Pokémon!`
      } else {
        this.isCorrect = false
        this.message = `Oops, era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showAnswer = false
      this.showPokemon = false 
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>

h1{
  color: #202020;
}
span{
  color: rgb(243, 91, 91);
}
button{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
    background-color: #202020;
    border-radius: 5px;
    color: azure;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    padding:.5rem 4rem;
    font-family: 'Passero One', sans-serif;
    font-size: 20px;
}
button:hover{
  background-color: rgb(243, 91, 91);
}
</style>