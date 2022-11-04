import axios from "axios"
import 'tw-elements';
import * as indentation from 'indent-textarea';
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
        Url: String,
        dataString: String
    },


    data() {
        return {
            urlReceived: 'https://jsonplaceholder.typicode.com/posts?_limit=5',
            widthScreenAtual: window.screen.width,
            valueSelect: "",
            dataSend: "{\n\n}",
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
            this.$emit('loading', true)
            const data = JSON.parse(this.dataSend)
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
            this.$emit('loading', true)
            const data = JSON.parse(this.dataSend)
            axios.patch(this.urlReceived, data)
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

        del() {
            this.$emit('loading', true)
            axios.delete(this.urlReceived)
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

        clear() {
            this.$emit('clear')
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

                // case "post":
                //     <button data-bs-toggle="modal" data-bs-target="#showModal">
                //     POST
                //   </button>
                //     break;

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
        },

        dataSend() {
            const textarea = document.querySelector('textarea');
            indentation.watch(textarea);
        },
    },
}