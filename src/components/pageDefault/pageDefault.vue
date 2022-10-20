<template>
  <div class="bg-slate-800 h-full 2xl:h-screen">
    <header class="text-center">
      <h1 class="text-gray-300 font-semibold text-2xl py-4">GLUTTON</h1>
    </header>

    <!-- <div
      v-show="show"
      class="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        borda
        
        
        bg-slate-700
      "
    >
      <div class="flex justify-between mb-10">
        <span class="text-center ml-7">ESCREVA SEU JSON</span>
        <span>X</span>
      </div>
      <div class="flex flex-col">
        <textarea v-model="dataSend"></textarea>
        <button @click.prevent="send">SEND</button>
      </div>
    </div> -->

    <div class="border-y-[.5px] border-violet-400 py-3 px-3 mb-6">
      <div class="flex flex-col items-center mb-6">
        <label for="url" class="text-gray-300 text-lg">Insira uma URL</label>
        <input
          id="url"
          class="
            w-[34%]
            rounded-md
            px-1
            placeholder-slate-600
            focus:outline-none focus:border-2 focus:ring-1 focus:border-blue-700
          "
          type="text"
          placeholder="Ex.: https://jsonplaceholder.typicode.com/posts?_limit=5"
          v-model="url"
        />
      </div>
      <area-button
        @response-api="showResponse"
        @loading="showLoading"
        @showModal="showModal"
        :Url="url"
        Post
        Delete
        Patch
      ></area-button>
    </div>

    <div class="px-4">
      <section class="mb-7 2xl:h-[40rem]">
        <div class="border-b-[.5px] flex justify-between p-3 mb-5">
          <span class="text-gray-300 font-medium">Data</span>
          <span
            :class="
              status > 199 && status < 299
                ? 'bg-green-500 px-2 font-medium text-green-900 rounded-md'
                : status !== ''
                ? 'bg-red-500 px-2 font-medium text-red-900 rounded-md'
                : ''
            "
          >
            {{ status }}
          </span>
        </div>

        <area-response
          class="h-96 overflow-auto"
          :class="loading ? 'flex justify-center items-center' : 'pl-3 '"
        >
          <pre
            v-show="!loading"
          ><code ref="data" class="language-js line-numbers">{{data}}</code></pre>

          <img
            v-show="loading"
            class="animate-spin h-20"
            src="../../asset/recarregar.png"
            alt=""
          />
        </area-response>
      </section>

      <div class="flex flex-col justify-between pb-9 lg:flex-row">
        <section class="mb-7 lg:w-[49%] lg:mb-0">
          <div class="border-b-[.5px] p-3 mb-5">
            <span class="text-gray-300 font-medium">Headers</span>
          </div>

          <area-response
            class="h-64 overflow-auto"
            :class="loading ? 'flex justify-center items-center' : 'pl-3 '"
          >
            <pre
              v-show="!loading"
            ><code ref="headers" class="language-js line-numbers">{{headers}}</code></pre>

            <img
              v-show="loading"
              class="animate-spin h-20"
              src="../../asset/recarregar.png"
              alt=""
            />
          </area-response>
        </section>

        <section class="lg:w-[49%]">
          <div class="border-b-[.5px] p-3 mb-5">
            <span class="text-gray-300 font-medium">Config</span>
          </div>

          <area-response
            class="h-64 overflow-auto"
            :class="loading ? 'flex justify-center items-center' : 'pl-3 '"
          >
            <pre
              v-show="!loading"
            ><code ref="config" class="language-js line-numbers">{{config}}</code></pre>

            <img
              v-show="loading"
              class="animate-spin h-20"
              src="../../asset/recarregar.png"
              alt=""
            />
          </area-response>
        </section>
      </div>
    </div>

    <footer class="text-center pb-5">
      <a
        href="https://github.com/Christian-M-Silva"
        target="_blank"
        class="bg-red-500 font-bold shadow-lg shadow-red-500/50 rounded-md p-2"
        >DEVELOP 🎮 <span class="text-red-700">CHRISTIAN</span></a
      >
    </footer>

    <div
      class="
        modal
        fade
        fixed
        top-0
        left-0
        hidden
        w-full
        h-full
        outline-none
        overflow-x-hidden overflow-y-auto
      "
      id="exampleModalScrollable"
      tabindex="-1"
      aria-labelledby="exampleModalScrollableLabel"
      aria-hidden="true"
    >
      <div
        class="
          modal-dialog modal-dialog-scrollable
          relative
          w-auto
          pointer-events-none
        "
      >
        <div
          class="
            modal-content
            border-none
            shadow-lg
            relative
            flex flex-col
            w-full
            pointer-events-auto
            bg-slate-900 bg-clip-padding
            rounded-md
            outline-none
            text-current
          "
        >
          <div
            class="
              modal-header
              flex flex-shrink-0
              items-center
              justify-between
              p-4
              border-b border-gray-200
              rounded-t-md
            "
          >
            <h5
              class="text-xl font-medium leading-normal text-gray-400"
              id="exampleModalScrollableLabel"
            >
              SEND JSON
            </h5>
            <button
              type="button"
              class="
                btn-close
                box-content
                w-4
                h-4
                p-1
                text-black
                border-none
                rounded-none
                opacity-50
                focus:shadow-none focus:outline-none focus:opacity-100
                hover:text-black hover:opacity-75 hover:no-underline
              "
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body relative p-4">
            <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
            <p class="text-gray-400 mb-3">Não se esqueça de colocar as aspas e virgulas no lugar certo ("key": "value")</p>
            <textarea
              id="message"
              rows="4"
              class="
                block
                p-2.5
                w-full
                text-sm text-gray-900
                bg-gray-50
                rounded-lg
                border border-gray-300
                focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              v-model="dataSend"
            ></textarea>
            {{ dataSend }}
          </div>
          <div
            class="
              modal-footer
              flex flex-shrink-0 flex-wrap
              items-center
              justify-end
              p-4
              border-t border-gray-200
              rounded-b-md
            "
          >
            <button
              type="button"
              class="
                inline-block
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
                ml-1
              "
              @click.prevent="send"
            >
              Send JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./pageDefault.css"></style>
<script src="./pageDefault.js"></script>
