const app = Vue.createApp({
    data() {
        return {
            product: 'socks',
            sales: "check",
            name: "make a sale",
            image: 'sock2.jpg',
            instock: false,
            number: 100,
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
    }
})
const mountedApp = app.mount('#app')