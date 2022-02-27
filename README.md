# Vue
Vue.js 
# Vue Components
```javascript
Vue.createApp({
                data() {
                    return {
                        myplans: ['test', 'hello', 'make-it']
                    }
                }


            })
            .component('paln', {
                template: "#test_it",
                props: {
                    name: {
                        type: String,
                        required: true
                    },
                }
            })    
            
```
# Vue Methods
```javascript
   let myapp = Vue.createApp({
            data: function() {
                return {
                    gretting: 'hello world ,this is vue app',
                    test1: false,
                    test2: false,
                    plans: ['helo', 'world']

                }
            },
            methods: {
                toggle() {
                    this.test1 = !this.test1
                }
            }
        });


```
# Vue App configuraton
```javascript
<template>
<link rel="stylesheet" href="./style.css">
  <img alt="Vue logo" src="./assets/logo.png">
  <create_event/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line camelcase
import create_event from './components/base_compoent.vue'
// eslint-disable-next-line camelcase
import base_From from './components/baseFrom.vue'
export default {
  name: 'App',
  components: {
    [HelloWorld.name]: HelloWorld,
    [create_event.name]: create_event,
    [base_From.name]: base_From
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
</style>```
# else-if (conditions)
```javascript
   <img :src="image" style="height: 300px; width:300px">
        <p v-if="number>10" style="color: green;">instock
            <button class="button" v-on:click="addToCard"> add to cards</button>

        </p>
        <p class="color-circle" v-for="vari in variants" :key="vari.id" @mouseover="update(vari.image)">{{vari.color}}</p>
        <h3>Details</h3>
        <p v-for="detail in details">{{detail}}</p>

        <p v-if="number>10">almost 2 pieces left</p>
        <p v-else style="color: brown;"> outstock</p>

  ```
