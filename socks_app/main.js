const app = Vue.createApp({
        data() {
            return {
                pre: false
            }
        }

    }


)
app.component('product-details', {
    props: {
        details: Array,
        brand: String,
        product: String,
        variant: Number,
        onSale: Boolean,
        pre: {
            type: Boolean,
            required: true


        }
    },
    template:
    /*html*/
        `<img :src="image" style="height: 300px; width:300px">
<p v-if="number>10" style="color: green;">instock

</p>
<p > shapping:{{shiping}}</p>
<p class="color-circle" v-for="vari in variants" :key="vari.id" @mouseover="update(vari.image)" :style="{backgroundColor:vari.color}"></p>
<h3>Details</h3>
<p v-for="detail in details">{{detail}}</p>
<button class="button" :disabled="!instock" :class="{disabledButton:!instock}" v-on:click="addToCard"> add to cards</button>

<p v-if="number>10">almost 2 pieces left</p>
<p v-else style="color: brown;"> outstock</p>
`,
    data() {
        return {
            product: 'socks',
            brand: "vue",
            sales: "check",
            name: "make a sale",
            image: 'sock2.jpg',
            instock: true,
            number: 20,
            pre: true,
            details: ["80% cotton", "20% polyester"],
            variants: [{
                id: 2234,
                color: "green",
                image: "sock1.jpg",
                quantity: 10
            }, {
                id: 2235,
                color: "blue",
                image: "sock2.jpg",
                quantity: 10
            }],
            card: 0
        }
    },
    methods: {
        addToCard() {
            this.card += 1
        },
        update(variantImage) {
            this.image = variantImage
        }
    },
    //computing the value of the computed property
    //automatically
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        shiping() {
            if (this.pre) {
                return "free"
            } else {
                return 2.99
            }
        },


    }
})
app.component('form-com', {
    template: /*html*/ `   <form @submit.prevent="onSubmit">
<p>
<label for="name">Name</label>  
<input type="text" id="name" v-model="name" placeholder="name">
</p>
<p>
<label for="email">Email</label>
<input type="email" id="email" v-model="email" placeholder="email">
</p>
<input type="submit" value="submit">
</form>
`,
    data() {
        return {
            name: '',
            email: '',
            review: []
        }
    },
    method: {
        onSubmit() {
            alert(this.name + " " + this.email);
            this.review.push({
                name: this.name,
                email: this.email

            })
            console.log(this.review);

            this.name = '',
                this.email = ''

        }


    }

})
const mountedApp = app.mount('#app')