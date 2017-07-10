<template>
  <div vui-diabox>
      <div class="dialog-body">
          <header class="title" v-html="title">
          </header>
          <div class="content" v-html="content">
          </div>
          <div class="dialog-button">
              <button @click="_dialogCancel" class="cancel">取消</button>
              <button @click="_dialogSure" class="sure">确定</button>
          </div>
      </div>
  </div>
</template>
<style lang="less">
    [vui-diabox]{
        position:fixed;
        text-align:center;
        top:30%;
        width:100%;
        left:0;
        font-size:0.13rem;
        z-index:1;
        .dialog-body{
            display: inline-block;
            box-sizing: border-box;
            max-width:80%;
            min-width:50%;
            padding:10px;
            background: #fff;
            margin:0 auto;
            animation: diabox-show 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0ms forwards;
            .title{
                width:100%;
                text-align: center;
                line-height:0.35rem;
                font-weight: bold;
                font-size:0.14rem;
            }
            .content{
                margin:0.1rem 0;
                line-height:1.5;
            }
            .dialog-button{
                button{
                    color:#fff;
                    line-height:0.3rem;
                    border-radius:5px;
                    border:0;
                    padding:0 0.15rem
                }
                .cancel{
                    background: #e1e1e1;
                    margin-right:0.15rem;
                }
                .sure{
                    background: #0a9dc7;
                }
            }
        }
    }
    @keyframes diabox-show {
        0%{
            opacity: 0;
            transform: scale(1.2);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes diabox-hide{
        0%{
            opacity: 1;
            transform: scale(1);
        }
        100%{
            opacity: 0;
            transform: scale(1.2);
        }
    }

</style>
<script>
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

          onSure: {
              type: Function,
              default: () => {}
          },

          onCancel: {
              type: Function,
              default: () => {}
          }
      },

      destroyed() {
          this.$el.querySelector('.dialog-body').style.animation = 'diabox-hide 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0ms forwards'
      },


      methods: {
          _dialogSure () {
              this.onSure()
          },

          _dialogCancel () {
              this.onCancel()
          }
      }
  }
</script>
