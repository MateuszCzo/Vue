const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            books: [
                {title: "title1", author: "author1", isFav: true},
                {title: "title2", author: "author2", isFav: false},
                {title: "title3", author: "author3", isFav: false},
            ],
            x: 0,
            y: 0,
            url: "https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3"
        }
    },
    methods: {
        toggleVisibilityBooks() {
            this.showBook = !this.showBook;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data) console.log(data);
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
})

app.mount('#app')