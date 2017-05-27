<template>
    <div vui-modal>
        <div class="vui-modal" :style="{background:theme}" :class="{
        'vui-modal-bottom-enter':direction == 'bottom',
        'vui-modal-up-enter':direction == 'top',
        'vui-modal-left-enter':direction == 'left',
        'vui-modal-right-enter':direction == 'right',
        'vui-modal-bottom-leave':direction == 'bottom' && close ,
        'vui-modal-up-leave':direction == 'up' && close ,
        'vui-modal-left-leave':direction == 'left' && close,
        'vui-modal-right-leave':direction == 'right' && close,
        }">
            <slot name="header">
                <header class="vui-modal-header">
                    <p>{{title}}</p>
                    <span class="vui-modal-close" @click="hide(true)">关闭</span>
                </header>
            </slot>
            <section class="vui-modal-content">
                <div vui-modal-content>
                    <slot name="content"></slot>
                </div>
            </section>
        </div>
    </div>
</template>
<style>
    .vui-modal {
        position: fixed;
        width:100%;
        height:100%;
        background: #a9a9a9;
    }
    .vui-modal-bottom-enter{
        animation:slide-bottom-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-bottom-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal-bottom-leave{
        animation:slide-bottom-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-bottom-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal-up-enter{
        animation:slide-up-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-up-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal-up-leave{
        animation:slide-up-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-up-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal-left-enter{
        animation:slide-left-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-left-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal-left-leave{
        animation:slide-left-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-left-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal-right-enter{
        animation:slide-right-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-right-enter 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal-right-leave{
        animation:slide-right-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:slide-right-leave 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .vui-modal .vui-modal-header{
        position: absolute;
        left:0;
        top:0;
        height:44px;
        width:100%;
    }
    .vui-modal .vui-modal-header>p{
        width:70%;
        float: left;
        margin-left:15%;
        text-align: center;
        line-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .vui-modal .vui-modal-header>.vui-modal-close {
        display: inline-block;
        padding:0 10px;
        max-width:15%;
        line-height:44px;
        height:44px;
        float: right;
        background: transparent;
        border:none
    }
    .vui-modal .vui-modal-content{
        margin-top: 44px;
    }

    @keyframes slide-bottom-enter {
        0% {
            top:100%;
            left:0
        }
        100% {
            top:0;
            left:0
        }
    }
    @keyframes slide-bottom-leave {
        0% {
            top:0;
            left:0
        }
        100% {
            top:100%;
            left:0
        }
    }
    @keyframes slide-left-enter {
        0% {
            left:-100%;
            top:0
        }
        100% {
            top:0;
            left:0
        }
    }
    @keyframes slide-left-leave {
        0% {
            top:0;
            left:0
        }
        100% {
            left:-100%;
            top:0
        }
    }
    @keyframes slide-right-enter {
        0% {
            right:-100%;
            top:0
        }
        100% {
            top:0;
            right:0
        }
    }
    @keyframes slide-right-leave {
        0% {
            top:0;
            right:0
        }
        100% {
            right:-100%;
            top:0
        }
    }
    @keyframes slide-up-enter {
        0% {
            left:0;
            top:-100%
        }
        100% {
            left:0;
            top:0
        }
    }
    @keyframes slide-up-leave {
        0% {
            left:0;
            top:0
        }
        100% {
            left:0;
            top:-100%
        }
    }
</style>
<script>
    import ModalCache from './modalCache'
    export default {
      props: {
        title: {
          type: String,
          default: 'title'
        },
        theme: {
          type: String,
          default: '#fff'
        },
        onHide: {
          type: Function
        },
        render: {
          type: Function
        },
        direction: {
          type: String,
          default: 'bottom'
        }
      },

      mounted() {
        this.render && this.render()
      },

      data() {
        return {
          close: false,
          index: 0
        }
      },

      methods: {
        /* remove防止二次删除 */
        hide(remove) {
          let _$ = this
          _$.close = true
          _$.$forceUpdate()
          _$.$el.addEventListener('animationend', () => {
            document.body.removeChild(_$.$el)
            _$.onHide && _$.onHide()
          })
          remove && ModalCache.remove(_$.index)
        }
      }
    }
</script>
