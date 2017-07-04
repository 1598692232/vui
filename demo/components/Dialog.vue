<template>
  <div class="demo">
    <div style="font-size:12px">
      <head-top title="Dialog" left-url="#/"></head-top>
      <button v-overlay.id="did">modal</button>
      <Diabox title="this is title" content="this is content" @sure="clickSure" :did="did">
        <p slot="title">这里才是真正的title</p>
      </Diabox>
      <button v-overlay.id="did2">modal2</button>
      <Diabox title="this is title2" content="this is content2" @sure="clickSure" :did="did2">
      </Diabox>
    </div>

  </div>
</template>
<script>
  import Diabox from '../../src/components/diabox/index.vue'
  import headTop from './header'
  export default{
      data () {
          return {
              did: 'dialog-131123',
              did2: 'dialog-131124'
          }
      },
      components: {
          Diabox,
          headTop
      },
      methods: {
          clickSure () {
              console.log('232222')
          }
      }

  }
</script>
