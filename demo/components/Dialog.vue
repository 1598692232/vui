<template>
  <div class="demo">
    <div style="font-size:12px">
      <head-top title="Dialog" left-url="#/"></head-top>
      <div style="margin-top:0.64rem">
        <button @click="showModal1">modal</button>
        <button @click="showModal2">modal2</button>
      </div>

    </div>

  </div>
</template>
<script>
  import Diabox from '@/components/diabox'
  import headTop from './header'
  export default{
      data () {
          return {
              did: 'dialog-131123',
              did2: 'dialog-131124'
          }
      },
      components: {
          headTop
      },
      methods: {
          showModal1 () {
              Diabox.show({
                  title: '<span>title1</span>',
                  content: '<div>content1 content1 content1 content1 content1 content1</div>',
                  onSure: () => {
                      console.log('sure1')
                      Diabox.close()
                  },
                  onCancel: () => {
                      console.log('cancel1')
                      Diabox.close()
                  }
              })
          },
          showModal2 () {
              Diabox.show({
                  title: '<span>title2</span>',
                  content: '<div>content2 content2 content2 content2 content2 content2</div>',
                  onSure: () => {
                      console.log('sure2')
                      Diabox.close()
                  },
                  onCancel: () => {
                      console.log('cancel2')
                      Diabox.close()
                  }
              })
          }
      },
      mounted() {

      }

  }
</script>
