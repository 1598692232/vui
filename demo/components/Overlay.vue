
<template>
  <div class="demo">
    <button v-overlay.id="'v3'">modal</button>
    <overlay oid="v3"></overlay>
  </div>
</template>
<script>
  import overlay from '../../src/components/overlay/index.vue'
  export default{
    data () {
      return {
      }
    },
    components: {
      overlay
    },
    methods: {

    }
  }
</script>
