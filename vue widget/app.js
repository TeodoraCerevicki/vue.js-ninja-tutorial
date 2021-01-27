
const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3&ab_channel=TheNetNinja',
            show: true,
            books: [
                {
                    title: "book1",
                    author: "author1",
                    isFav: true
                },
                {
                    title: "book2",
                    author: "author2",
                    isFav: true
                },
                {
                    title: "book3",
                    author: "author3",
                    isFav: false
                },
                {
                    title: "book4",
                    author: "author4",
                    isFav: false
                }
            ]
        }
    },

    methods: {

        toggleShowBooks() {
            this.show = !this.show
        },

        handleEvent(e, data) {
            console.log('event');

            if(data) {
                console.log(data)
            }
        },

        toggleIsFav(book) {
            book.isFav = !book.isFav
        }
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')