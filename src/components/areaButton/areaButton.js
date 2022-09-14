import axios from "axios"

// axios.interceptors.response.use(function (response) {
//     return response;

// }, function (erro) {

//     console.log(erro)
//     return Promise.reject(erro);
//     this.$emit("response-api", erro)
// })

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
        }
    },

    methods: {
        getAll() {
          


            axios.get(this.urlReceived)
                .then(response => {
                    this.$emit("response-api", response)
                })
                .catch(erro => {
                    this.$emit("response-api", erro)
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

        multiples() {
            alert("Multiples")
        },

        transform() {
            alert("Transform")
        },

        error() {
            alert("Error")
        },

        cancel() {
            alert("Cancel")
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
        }
    }
}

