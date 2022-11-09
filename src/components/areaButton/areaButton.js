import axios from "axios"
import 'tw-elements';
import * as indentation from 'indent-textarea';
window.onresize = changeWidth

function changeWidth() {
    this.__VUE_HOT_MAP__['c7c196a2'].instances[0].$data.widthScreenAtual = window.screen.width
}

const CancelToken = axios.CancelToken;
let cancel;

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
            showModalToken: false,
            showButtonPost: false,
            showButtonPatch: false,
        }
    },

    methods: {
        chooseModalButton(value) {
            this.showModalPostAndPatch = true
            if (value == "post")
                this.showButtonPost = true
            else
                this.showButtonPatch = true
        },

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
            const config = {
                headers: {
                    'Authorization': `Bearer ${this.tokenJwt}`
                },
            }

            axios.post(this.urlReceived, data, config)
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

        cancel() {
            let config = {
                cancelToken: new CancelToken(function executor(c) {
                    cancel = c;
                })
            }

            axios.get(this.urlReceived, config)
                .catch(erro => {
                    this.$emit("response-api", erro)
                })
                .finally(() => {
                    this.$emit('loading', false)
                })

            cancel("Request canceled by user");

        },

        clear() {
            this.$emit('clear')
        },
    },

    watch: {
        showModalPostAndPatch(value) {
            if (!value) {
                this.showButtonPatch = false
                this.showButtonPost = false
            }
        },

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
                    this.chooseModalButton("post")
                    break;

                case "patch":
                    this.chooseModalButton("patch")
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