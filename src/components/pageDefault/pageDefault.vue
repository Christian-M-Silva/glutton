<template>
  <div class="bg-slate-800 h-full">
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
        :Url="url"
        GetId
        Post
        Put
        Delete
        Patch
      ></area-button>
    </div>

    <div class="px-4">
      <section class="mb-7">
        <div class="border-b-[.5px] flex justify-between p-3 mb-5">
          <span class="text-gray-300 font-medium">Data</span>
          <span
            :class="
              status > 199 && status < 299
                ? 'bg-green-500 px-2 font-medium text-green-900 rounded-md'
                : status > 399 && status < 600
                ? 'bg-red-500 px-2 font-medium text-red-900 rounded-md'
                : ''
            "
          >
            {{ status }}
          </span>
        </div>

        <area-response class="pl-3 h-72 overflow-auto">
          <pre><code ref="data" class="language-js line-numbers">{{data}}</code></pre>
        </area-response>
      </section>

      <div class="flex justify-between pb-7">
        <section class="w-[49%]">
          <div class="border-b-[.5px] p-3 mb-5">
            <span class="text-gray-300 font-medium">Headers</span>
          </div>

          <area-response class="pl-3 h-64 overflow-auto"> 
            <pre><code >area response</code></pre>
          </area-response>
        </section>

        <section class="w-[49%]">
          <div class="border-b-[.5px] p-3 mb-5">
            <span class="text-gray-300 font-medium">Config</span>
          </div>

          <area-response class="pl-3 h-64 overflow-auto"><pre><code >area response</code></pre></area-response>
        </section>
      </div>
    </div>

    <footer class="text-center pb-2">
      <span>DEVELOP BY CHRISTIAN</span>
    </footer>
  </div>
</template>

<style src="./pageDefault.css"></style>
<script src="./pageDefault.js"></script>