<template>
  <div class="bg-slate-800 h-full 2xl:h-screen">
    <header class="text-center">
      <h1 class="text-gray-300 font-semibold text-2xl py-4">GLUTTON</h1>
    </header>
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
        @clear="clean"
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
  </div>
</template>

<style src="./pageDefault.css"></style>
<script src="./pageDefault.js"></script>
