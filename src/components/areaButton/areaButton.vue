<template>
  <div>
    <div
      v-if="widthScreenAtual > 529"
      class="flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <button
          @click="getAll"
          class="
            p-2
            hover:shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/50
            bg-cyan-500
            shadow-cyan-500/50
            font-medium
            text-cyan-900
            focus:p-[.7rem]
          "
        >
          GET ALL
        </button>
        <button
          v-if="GetId"
          @click="getId"
          class="
            bg-blue-500
            p-2
            shadow-blue-500/50
            hover:bg-blue-500
            p-2
            hover:shadow-blue-500/50 hover:shadow-lg
            font-medium
            text-blue-900
            focus:p-[.7rem]
          "
        >
          GET ID
        </button>
        <button
          v-if="Post"
          @click="post"
          class="
            bg-green-500
            p-2
            shadow-green-500/50
            hover:bg-green-500 hover:shadow-green-500/50 hover:shadow-lg
            font-medium
            text-green-900
            focus:p-[.7rem]
          "
        >
          POST
        </button>
        <button
          v-if="Put"
          @click="put"
          class="
            bg-lime-500
            p-2
            shadow-lime-500/50
            hover:bg-lime-500 hover:shadow-lime-500/50 hover:shadow-lg
            font-medium
            text-lime-900
            focus:p-[.7rem]
          "
        >
          PUT
        </button>
        <button
          v-if="Patch"
          @click="patch"
          class="
            bg-teal-500
            p-2
            shadow-teal-500/50
            hover:bg-teal-500 hover:shadow-teal-500/50 hover:shadow-lg
            font-medium
            text-teal-900
            focus:p-[.7rem]
          "
        >
          PATCH
        </button>
        <button
          v-if="Delete"
          @click="del"
          class="
            bg-red-500
            p-2
            shadow-red-500/50
            hover:bg-red-500 hover:shadow-red-500/50 hover:shadow-lg
            text-red-900
            font-medium
            focus:p-[.7rem]
          "
        >
          DELETE
        </button>
      </div>

      <button
        @click="clear"
        class="
          bg-indigo-500
          p-2
          shadow-indigo-500/50
          hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg
          text-zinc-800
          font-medium
        "
      >
        Clear
      </button>
    </div>

    <div v-if="widthScreenAtual < 530" class="flex items-center justify-center">
      <select v-model="valueSelect" name="select" class="form-select rounded-md">
        <option value="">SELECIONE UM MÉTODO</option>
        <option value="getAll">GET ALL</option>
        <option value="getId">GET ID</option>
        <option value="post">POST</option>
        <option value="put">PUT</option>
        <option value="patch">PATCH</option>
        <option value="delete">DELETE</option>
        <option value="clear">CLEAR</option>
      </select> 
    </div>
  </div>
</template>

<script src="./areaButton.js"></script>
<style src="./areaButton.css"></style>
