<template>
  <div>
    <div
      v-if="widthScreenAtual > 529"
      class="flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <button
          @click="get"
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
          GET
        </button>

        <button
          v-if="Post"
          class="
            bg-green-500
            p-2
            shadow-green-500/50
            hover:bg-green-500 hover:shadow-green-500/50 hover:shadow-lg
            font-medium
            text-green-900
            focus:p-[.7rem]
          "
          @click="chooseModalButton('post')"
        >
          POST
        </button>
        <button
          v-if="Patch"
          class="
            bg-teal-500
            p-2
            shadow-teal-500/50
            hover:bg-teal-500 hover:shadow-teal-500/50 hover:shadow-lg
            font-medium
            text-teal-900
            focus:p-[.7rem]
          "
          @click="chooseModalButton('patch')"
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

        <button
          class="
            bg-emerald-500
            p-2
            shadow-emerald-500/50
            hover:bg-emerald-500 hover:shadow-emerald-500/50 hover:shadow-lg
            text-emerald-900
            font-medium
            focus:p-[.7rem]
          "
          @click="showModalToken = true"
        >
          TOKEN
        </button>

        <button
          class="
            bg-orange-500
            p-2
            shadow-orange-500/50
            hover:bg-orange-500 hover:shadow-orange-500/50 hover:shadow-lg
            text-orange-900
            font-medium
            focus:p-[.7rem]
          "
          @click="cancel"
        >
          ABORT
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
      <select
        v-model="valueSelect"
        name="select"
        class="form-select rounded-md"
      >
        <option value="">SELECIONE UM M??TODO</option>
        <option value="get">GET</option>
        <option value="post">POST</option>
        <option value="patch">PATCH</option>
        <option value="delete">DELETE</option>
        <option value="clear">CLEAR</option>
        <option value="tokenJwt">TOKEN JWT</option>
        <option value="abort">ABORT</option>
      </select>
    </div>

    <!-- Modal -->
    <div
      class="
        swirl-in-fwd
        modal
        fixed
        top-0
        left-0
        w-full
        h-full
        outline-none
        overflow-x-hidden overflow-y-auto
      "
      tabindex="-1"
      aria-labelledby="showModalLabel"
      v-show="showModalPostAndPatch"
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
              id="showModalLabel"
            >
              SEND JSON
            </h5>
            <button
              type="button"
              class="
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
              @click="showModalPostAndPatch = false"
            >
              <img src="../../asset/x.png" alt="" />
            </button>
          </div>
          <div class="modal-body relative p-4">
            <p class="text-gray-400 mb-3">
              N??o se esque??a de colocar as aspas e virgulas no lugar certo
              ("key": "value")
            </p>
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
              flex-col
              gap-3
              xs:flex-row xs:gap-0
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
              @click.prevent="post"
              data-bs-dismiss="modal"
              aria-label="Close"
              v-show="showButtonPost"
            >
              Send JSON for post
            </button>
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
              @click.prevent="patch"
              data-bs-dismiss="modal"
              aria-label="Close"
               v-show="showButtonPatch"
            >
              Send JSON for patch
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Token-->
    <div
      class="
        modal
        swirl-in-fwd
        fixed
        top-0
        left-0
        w-full
        h-full
        outline-none
        overflow-x-hidden overflow-y-auto
      "
      tabindex="-1"
      aria-labelledby="showModalLabel"
      v-show="showModalToken"
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
              id="showModalLabel"
            >
              SEND TOKEN JWT
            </h5>
            <button
              type="button"
              class="
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
              @click="showModalToken = false"
            >
              <img src="../../asset/x.png" alt="" />
            </button>
          </div>
          <div class="modal-body relative p-4">
            <span class="pr-2 text-gray-300">Token JWT:</span>
            <input
              type="text"
              class="
                rounded-md
                placeholder-slate-600
                focus:outline-none
                focus:border-2
                focus:ring-1
                focus:border-blue-700
              "
              v-model="tokenJwt"
            />
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
              flex-col
              gap-3
              xs:flex-row xs:gap-0
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
              data-bs-dismiss="modal"
              @click="showModalToken = false"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./areaButton.js"></script>
<style src="./areaButton.css"></style>
