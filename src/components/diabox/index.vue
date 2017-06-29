<template>
  <div>
    <overlay :oid="did">
      <div class="dialog-body">
        <header class="title">
          <slot name="title">
            {{title}}
          </slot>
        </header>
        <div class="content">
            <slot name="content">
                {{content}}
            </slot>
        </div>
        <div class="dialog-button">
            <button v-overhide.id="did">取消</button>
            <button @click="dialogSure">确定</button>
        </div>
      </div>
    </overlay>
  </div>
</template>
<style>
.dialog-body{
  box-sizing: border-box;
  max-width:80%;
  min-width:50%;
  padding:10px;
  background: #fff;
  margin:0 auto;
}
.dialog-body title{
  width:100%;
  text-align: center;
}
</style>
<script>
  import overlay from '../overlay/index.vue'
  export default {
      props: {
          title: {
              type: String,
              default: 'title'
          },
          content: {
              type: String,
              default: 'content'
          },
          did: {
              type: String,
              require: true
          }
      },
      components: {
          overlay
      },
      data () {
          return {
          }
      },
      methods: {
          dialogSure () {
              this.$emit('sure')
              this.$emit('overhide')
          }
      }
  }
</script>
