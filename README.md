# Vue
Vue.js 
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
    .component('plan-picker', {
        template: "#plan-picker-template",
        data() {
            return {
                myplans: ['test', 'hello', 'make-it']

            }
        }

    })
    .mount("#myapp_test")```
