<template>
  <div>
    <pre>{{ currentHandle }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    data(){
      return {
        id: this.$route.params.id
      };
    },
    computed: {
    ...mapState(["trustdata"]),
    currentHandle() {
      let result
      for (let i = 0; i < this.trustdata.length; i++) {
        if (this.trustdata[i].handle === this.id) {
          return result = this.trustdata[i];
          break;
        }
      } 
    }
  },
  }
</script>