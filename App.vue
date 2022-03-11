<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
 <movie_poster make="vue is awesome" message="component 1" image="https://doodleipsum.com/200x200/flat?i=fefedbaa7c2dbf4b2773ccacb003f18f"/>
 <movie_poster make="vue is great"  message="component 2" image="https://doodleipsum.com/400x400/flat?i=fefedbaa7c2dbf4b2773ccacb003f18f"/>
 <movie_poster make="vue is great"  message="component 2" image="https://doodleipsum.com/400x400/flat?i=fefedbaa7c2dbf4b2773ccacb003f18f"/>
 
 
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import vue_cards from './components/cards_make.vue'
import movie_poster from './components/movie_poster.vue'
export default {
  name: 'App',
  components: {
    [HelloWorld.name]: HelloWorld,
    [vue_cards.name]: vue_cards,
    [movie_poster.name]: movie_poster
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
