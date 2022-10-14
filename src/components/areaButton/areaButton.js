import axios from "axios"

window.onresize = changeWidth

function changeWidth() {
    this.__VUE_HOT_MAP__['c7c196a2'].instances[0].$data.widthScreenAtual = window.screen.width
}

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
            valueSelect: "",
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

        },

        valueSelect(newValue) {
           switch (newValue) {
            case "getAll":
                this.getAll()
                break;
                
            case "getId":
                this.getId()
                break;
                
            case "post":
                this.post()
                break;
                
            case "put":
                this.put()
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