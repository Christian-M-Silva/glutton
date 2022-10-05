import axios from "axios"

export default {

    name: 'areaButton',

    props: {
        GetId: Boolean,
        Post: Boolean,
        Put: Boolean,
        Patch: Boolean,
        Delete: Boolean,
        Url: String
    },

    data() {
        return {
            urlReceived: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
            widthScreenAtual: window.screen.width,
        }
    },

    methods: {
        getAll() {
            this.$emit('loading', true)
            axios.get(this.urlReceived)
                .then(response => {
                    this.$emit("response-api", response)
                })
                .catch(erro => {
                    this.$emit("response-api", erro)
                })
                .finally(() => {
                    this.$emit('loading', false)
                })
        },

        getId() {
            alert("GetId")
        },

        post() {
            alert("Post")
        },

        put() {
            alert("Put")
        },

        patch() {
            alert("Patch")
        },

        del() {
            alert("Delete")
        },

        clear() {
            alert("Clear")
        },
    },

    watch: {
        Url() {
            this.urlReceived = this.Url

            if (this.urlReceived == '') {
                this.urlReceived = 'https://jsonplaceholder.typicode.com/posts?_limit=5'
            }

            console.log(this.$attrs)
        }
    },
}

