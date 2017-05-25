<template>
  <div class="demo">
    <button v-overlay.id="did">modal</button>
    <Diabox title="this is title" content="this is content" @sure="clickSure" :did="did">
      <p slot="title">这里才是真正的title</p>
    </Diabox>
    <button v-overlay.id="did2">modal2</button>
    <Diabox title="this is title2" content="this is content2" @sure="clickSure" :did="did2">
    </Diabox>
  </div>
</template>
<script>
  import Diabox from '../../src/components/diabox/index.vue'
  export default{
    data () {
      return {
        did: 'dialog-131123',
        did2: 'dialog-131124'
      }
    },
    components: {
      Diabox
    },
    methods: {
      clickSure () {
        console.log('232222')
      }
    }

  }
</script>
