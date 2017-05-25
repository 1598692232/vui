<template>
  <div class="overlay" v-if="!hide" :id="oid">
    <div class="over-body" @click="clickHideOverlay">
      <div class="over-body-table">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style>
  .overlay{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:100;
    background: rgba(0,0,0,0.5);
  }
  .overlay .over-body{
    position: relative;
    width:100%;
    height:100%;
    display: table;
  }
  .overlay .over-body > div{
    display: table-cell;
    vertical-align: middle;
  }
</style>
<script>
  import channel from './channel.js'
  export default {
    props: {
      oid: {
        type: String,
        require: true
      }
    },
    data () {
      return {
        hide: true
      }
    },
    mounted () {
      var _$ = this
      channel.$on('overshow.' + this.oid, (id) => {
        _$.hide = false
      })
      channel.$on('overhide.' + this.oid, (id) => {
        _$.hide = true
      })
    },
    methods: {
      clickHideOverlay (e) {
        if (e.target.nodeName === 'DIV' && e.target.className === 'over-body-table') {
          this.hide = true
        }
      },
      hideOverlay () {
        this.hide = true
      }
    }
  }
</script>
