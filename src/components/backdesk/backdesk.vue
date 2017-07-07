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
    z-index:1;
    background: rgba(0,0,0,0.5);
    animation: backdesk-show 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0ms forwards;
  }
  @keyframes backdesk-show {
      0%{
          opacity: 0;
      }
      100%{
          opacity: 1;
      }
  }
  @keyframes backdesk-hide {
      0%{
          opacity: 1;
      }
      100%{
          opacity: 0;
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
          this.$el.querySelector('.vui-back').style.animation = 'backdesk-hide 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0ms forwards'
          setTimeout(() => {
              this.util.removeElement('[vui-backdesk]')
          }, 300)
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
