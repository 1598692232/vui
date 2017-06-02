<template>
    <div vui-action>
        <div class="action-body">
            <ul class="action-list">
                <li v-for="(item,index) in actions" @click="actionClick(item, index)">
                    {{item.value}}
                </li>
            </ul>
            <div class="action-cancel" @click="cancel">
                取消
            </div>
        </div>
    </div>
</template>
<style>
    .action-body{
        width:100%;
        position: absolute;
        background: #eee;
        z-index:1000;
        animation:action-body-active 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -webkit-animation:action-body-active 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -moz-animation:action-body-active 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        -o-animation:action-body-active 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .action-list li{
        line-height: 2;
    }
    @keyframes action-body-active{
        0%{
            bottom:-500px;
        }
        100%{
            bottom:0;
        }
    }
</style>
<script>
    import Util from '../../util/util'
    import $backDesk from '../backdesk/index'
    export default {
      props: {
        actions: {
          type: Array,
          require: true
        },
        actionEvent: {
          type: Function
        }
      },

      destroyed() {
        let util = new Util()
        util.removeElement('[vui-action]', 200)
      },

      methods: {
        actionClick(item, index) {
          this.actionEvent(item, index)
        },

        cancel() {
          this.$destroy()
          $backDesk.hide()
        }
      }
    }
</script>
