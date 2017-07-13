<template>
  <div class="demo">
    <div style="font-size:12px">
      <head-top title="Dialog" left-url="#/"></head-top>
      <div style="margin-top:0.64rem;padding-top:0.2rem">
        <button @click="showModal1" class="v-btn">dialog1</button>
        <button @click="showModal2" class="v-btn">dialog2</button>
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
              m1: null,
              m2: null
          }
      },
      components: {
          headTop
      },
      methods: {
          showModal1 () {
              this.m2 && this.m2.close()
              this.m2 = null
              this.$nextTick(() => {
                  this.m1 = new Diabox().show({
                      title: '<span>title1</span>',
                      content: '<div>content1 content1 content1 content1 content1 content1</div>',
                      onSure: () => {
                          console.log('sure1')
                          this.showModal2()
                      },
                      onCancel: () => {
                          console.log('cancel1')
                          this.m1.close()
                          this.m1 = null
                      }
                  })
              })
          },

          showModal2 () {
              this.m1 && this.m1.close()
              this.m1 = null
              this.$nextTick(() => {
                  this.m2 = new Diabox().show({
                      title: '<span>title2</span>',
                      content: '<div>content2 content2 content2 content2 content2 content2</div>',
                      backShow: false,
                      onSure: () => {
                          console.log('sure2')
                          this.showModal1()
                      },
                      onCancel: () => {
                          console.log('cancel2')
                          this.m2.close()
                          this.m2 = null
                      }
                  })
              })
          }
      },
      mounted() {

      }

  }
</script>
