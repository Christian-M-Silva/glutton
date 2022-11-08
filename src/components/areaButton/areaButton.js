import axios from "axios"
import 'tw-elements';
import * as indentation from 'indent-textarea';
window.onresize = changeWidth

function changeWidth() {
    this.__VUE_HOT_MAP__['c7c196a2'].instances[0].$data.widthScreenAtual = window.screen.width
}

// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

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
            tokenJwt: '',
            showModalPostAndPatch: false,
            showModalToken: false
        }
    },

    methods: {
        get() {
            this.$emit('loading', true)

            const headers = {
                headers: {
                    'Authorization': `Bearer ${this.tokenJwt}`
                }
            }

            axios.get(this.urlReceived, headers)
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
            this.showModalPostAndPatch = false

            this.$emit('loading', true)

            const data = JSON.parse(this.dataSend)
            const headers = {
                headers: {
                    'Authorization': `Bearer ${this.tokenJwt}`
                }
            }

            axios.post(this.urlReceived, data, headers, {
                // cancelToken: source.token
              })
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
            this.showModalPostAndPatch = false

            this.$emit('loading', true)

            const headers = {
                headers: {
                    'Authorization': `Bearer ${this.tokenJwt}`
                }
            }
            const data = JSON.parse(this.dataSend)

            axios.patch(this.urlReceived, data, headers)
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

            const headers = {
                headers: {
                    'Authorization': `Bearer ${this.tokenJwt}`
                }
            }

            axios.delete(this.urlReceived, headers)
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

        cancel(){
            alert("cancel")
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

                case "post":
                    this.showModalPostAndPatch = true
                    break;

                case "patch":
                    this.showModalPostAndPatch = true
                    break;

                case "delete":
                    this.del()
                    break;

                case "tokenJwt":
                    this.showModalToken = true
                    break;

                case "clear":
                    this.clear()
                    break;

                case "abort":
                    this.cancel()
                    break;

            }
        },

        dataSend() {
            const textarea = document.querySelector('textarea');
            indentation.watch(textarea);
        },
    },
}