<template>
  <div class="max-w-6xl mx-auto sm:px-2 md:px-2">
    <div class="mt-20 hidden md:px-1 lg:px-4 sm:block w-7/12">
      <div
        class="rounded-lg xl:max-w-screen-xl"
        :class="
          currentHandle.rank < 4
            ? 'bg-trust-blue'
            : 'bg-white border-2 border-trust-blue'
        "
      >
        <div class="h-24 md:h-56 flex flex-row items-center">
          <div class="-mt-2 md:-mt-36 mr-1.5 -ml-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-12 md:h-28 md:w-16 lg:h-28 lg:w-16 fill-current"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
              :class="
                currentHandle.rank < 4 ? 'text-trust-green' : 'text-trust-blue'
              "
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
              />
            </svg>
          </div>
          <div>
            <div
              class="flex-none ml-2 mr-4 inline-block p-0.5 rounded-full"
              :class="
                currentHandle.rank < 4 ? 'bg-trust-yellow' : 'bg-trust-blue'
              "
            >
              <img
                class="h-12 w-12 md:h-14 md:w-14 lg:h-24 lg:w-24 rounded-full"
                :src="currentHandle.image"
                alt=""
              />
            </div>
            <div
              class="flex flex-col w-60 md:w-64 lg:w-60"
              :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
            >
              <div
                class="
                  font-karla font-bold
                  sm:text-base
                  md:text-lg
                  lg:text-2xl
                  flex-none
                  truncate
                "
              >
                {{ currentHandle.name }}
              </div>
              <div
                class="font-karla font-normal flex-none text-xs md:text-base"
              >
                @{{ currentHandle.handle }}
              </div>
            </div>
          </div>
          <div
            class="ml-2 md:ml-8 flex flex-col w-32 items-end"
            :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
          >
            <div
              class="
                font-raleway font-semibold
                sm:text-xl
                md:text-2xl
                lg:text-4xl
                flex-none
              "
            >
              {{ currentHandle.voteCredits }}
            </div>
            <div class="font-karla flex-none text-xs">VOTE CREDITS</div>
          </div>
          <div
            class="px-2 md:px-4 lg:px-6"
            :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
          >
            |
          </div>
          <div
            class="flex flex-col w-32 items-start mr-8 md:mr-0 lg:mr-2"
            :class="currentHandle.rank < 4 ? 'text-white' : 'text-trust-blue'"
          >
            <div
              class="
                font-raleway font-semibold
                sm:text-xl
                md:text-2xl
                lg:text-4xl
                flex-none
                mr-2
                md:mr-4
              "
            >
              {{ currentHandle.votes }}
            </div>
            <div class="font-karla flex-none text-xs">VOTES</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  head() {
    return {
      title: this.currentHandle.handle,
      meta: [
        {
          name: "description",
          content: "This is the handle page!",
          hid: "description",
        },
      ],
    };
  },
  computed: {
    ...mapState(["trustdata"]),
    currentHandle() {
      let result;
      for (let i = 0; i < this.trustdata.length; i++) {
        if (this.trustdata[i].handle === this.id) {
          result = this.trustdata[i];
          break;
        }
      }
      return result;
    },
  },
};
</script>
