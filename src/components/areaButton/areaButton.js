import axios from "axios"

window.onresize = changeWidth

function changeWidth() {
    this.__VUE_HOT_MAP__['c7c196a2'].instances[0].$data.widthScreenAtual = window.screen.width
}

export default {

    name: 'areaButton',

    props: {
        Post: Boolean,
        Patch: Boolean,
        Delete: Boolean,
        Url: String
    },


    data() {
        return {
            urlReceived: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
            widthScreenAtual: window.screen.width,
            valueSelect: "",
        }
    },

    methods: {
        get() {
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

        post() {
            // alert("Post")

            this.$emit('showModal', true)
            // this.$emit('loading', true) depois é só descomentar
            axios.post(this.urlReceived, data)
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

        },

        valueSelect(newValue) {
            switch (newValue) {
                case "get":
                    this.get()
                    break;

                case "post":
                    this.post()
                    break;

                case "patch":
                    this.patch()
                    break;

                case "delete":
                    this.del()
                    break;

                case "clear":
                    this.clear()
                    break;

            }
        }
    },
}