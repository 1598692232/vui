<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>

  </div>
</template>

<script>

  export default {

      name: 'app',

      data () {
          return {
              transitionName: 'fade'
          }
      },

      watch: {
          '$route' (to, from) {
              const toDepth = to.path.length
              const fromDepth = from.path.length
              this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
          }
      }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  *{
    margin:0;
    padding:0;
  }

  .router{
    position: absolute;
    width:100%;
    height:100%;
    transition: all .5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .v-btn{
    padding:0 0.1rem;
    line-height: 0.35rem;
    background: #6281C4;
    color:#fff;
    border:0;
    border-radius:0.175rem;
  }

  .slide-left-enter, .slide-right-leave-active{
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active, .slide-right-enter{
    opacity: 0;
    -webkit-transform: translate(-30%, 0);
    transform: translate(-30%, 0);
  }
</style>

