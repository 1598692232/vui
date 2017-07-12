
<template>
    <div id="app">
        <div class="scroll-demo">
            <head-top title="Scroller" left-url="#/"></head-top>
            <div style="margin-top:0.64rem;position: relative;height:6rem;">
                <scroll :on-refresh="refresh" :on-load="loadData">
                    <div slot="refresh">上拉刷新</div>
                    <ul class="list">
                        <li v-for="c in list">{{c}}</li>
                    </ul>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
  import scroll from '@/components/scroll/index.vue'
  import headTop from './header'
  export default {
    //        name: 'app',
      data() {
          return {
              msg: 'Welcome to Your Vue.js App',
              list: []
          }
      },
      created() {
          for (let i = 0; i < 60; i++) {
              this.list.push(i)
          }
      },

      components: {
          scroll,
          headTop
      },
      methods: {
          refresh(done) {
              setTimeout(() => {
                  console.log('refresh')
                  done()
              }, 1000)
          },
          loadData(done) {
              console.log('loadData')
              setTimeout(() => {
                  done()
              }, 1000)
          }
      }
  }
</script>


