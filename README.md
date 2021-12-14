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
