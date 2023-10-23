import pokemonApi from "@/api/pokemonApi"


//CREO EL ARREGLO DESDE LA POSICION 0 A LA 650
const getPokemons = () => {
  
  const pokemonsArr = Array.from(Array(650))

  return pokemonsArr.map(( _ , index ) => index + 1)
}

//CREAMOS ESTA FUNCION LA CUAL AGARRA EL ARREGLO ANTERIOR Y LO MEZCLA 
const getPokemonOptions = async() => {

  //GENERADOR DE NUMEROS RANDOMS
  const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 ) // le aplico ( "- 0.5" ) para la posibilidad de numeros negativos
  const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))//{SPLICE()} FUNCION PARA CORTAR EL ARREGRO DESDE TAL POSICION HASTA TAL OTRA (DESDE LA 0 A LA 4 EN ESTE CASO)
  
  return pokemons
}

const getPokemonsNames = async([a,b,c,d] = []) => {
  
  // const resp = await pokemonApi.get(`/1`)
  // console.log(resp)
  
  const promiseArr = [
    pokemonApi.get(`/${ a }`),
    pokemonApi.get(`/${ b }`),
    pokemonApi.get(`/${ c }`),
    pokemonApi.get(`/${ d }`),
  ]

  const [p1, p2, p3,p4] = await Promise.all( promiseArr )

  return [
    {name: p1.data.name, id: p1.data.id},
    {name: p2.data.name, id: p2.data.id},
    {name: p3.data.name, id: p3.data.id},
    {name: p4.data.name, id: p4.data.id},
  ]


}

export default getPokemonOptions