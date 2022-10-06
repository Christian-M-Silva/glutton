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
    },
}


// DEPOIS DAR UMA OLHADA NESSE COD

// VUE

{/* <div id="app">
  <button @click="getScreenSize">Qual tamanho da tela ?</button>
  {{teste}}
</div> */}


// JS

// // Defining event listener function
// function displayWindowSize(){
//     // Get width and height of the window excluding scrollbars
//     var w = document.documentElement.clientWidth;
//     var h = document.documentElement.clientHeight;
    
//     //Execta aqui o que quer para alterarcao da tela
//     alert(w);
    
//     // Display result inside a div element
//     //document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;
// }
    
// // Attaching the event listener function to window's resize event
// window.addEventListener("resize", displayWindowSize);

// // Calling the function for the first time
// //displayWindowSize();

// var screenSize = () => { return window.screen.width ;}

// new Vue({
//   el: '#app',
//   data: {
//   teste: window.screen.width,
//   },
//   methods: {
//     getScreenSize() {
//       alert(screenSize());
//     }
//   }
// })

