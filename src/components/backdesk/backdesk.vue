<template>
  <div vui-backdesk>
      <div class="vui-back"></div>
  </div>
</template>
<style>
  .vui-back{
    position: fixed;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background: rgba(0,0,0,0.5);
    animation: show 0.3s linear forwards;
  }
  @keyframes show {
      0%{
          opacity: 0;
      }
      100%{
          opacity: 1;
      }
  }
</style>
<script>
  import Util from '../../util/util'

  const duration = 200

  export default{
    data() {
      return {
        state: 0,
        util: ''
      }
    },

    mounted() {
      this.util = new Util()
    },

    destroyed() {
      this.util.removeElement('[vui-backdesk]')
    },

    methods: {
      show (allowTouchMove) {
        !allowTouchMove && document.body.addEventListener('touchmove', (e) => {
          e.preventDefault()
        })

        this.state = 1
      },

      hide (allowTouchMove) {
        allowTouchMove && document.body.removeEventListener('touchmove', (e) => {
          e.preventDefault()
        })

        this.state = 0
        return this.util.timeout(duration)
      }
    }
  }
</script>
