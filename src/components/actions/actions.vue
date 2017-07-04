<template>
    <div vui-action>
        <div class="action-body">
            <ul class="action-list">
                <li v-for="(item,index) in actions" @click="actionClick(item, index)" v-html="item.template || item.value"></li>
            </ul>
            <div class="action-cancel" @click="cancel">
                取消
            </div>
        </div>
    </div>
</template>
<style lang="less">
    [vui-action]{
        font-size: 0.13rem;
        .action-body{
            width:100%;
            position: fixed;
            bottom:0.05rem;
            left:0;
            /*background: #eee;*/
            z-index:1000;
            padding:0 .1rem;
            box-sizing: border-box;
            animation:action-show 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .action-list{
            border-radius: 0.08rem;
            background: #fff;
        }
        .action-list li{
            line-height: 0.44rem;
            text-align: center;
            border-bottom:1px solid #ddd
        }
        .action-list li:last-of-type{
            border-bottom: 0;
        }
        .action-cancel{
            margin-top:0.1rem;
            border-radius: 0.08rem;
            text-align: center;
            line-height:0.44rem;
            background: #fff;
        }
        @keyframes action-show{
            0%{
                transform:translateY(100%)
            }
            100%{
                transform:translateY(0)
            }
        }
        @keyframes action-hide{
            0%{
                transform:translateY(0)
            }
            100%{
                transform:translateY(100%)
            }
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
            this.$el.querySelector('.action-body').style.animation = 'action-hide 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards'
            setTimeout(() => {
                let util = new Util()
                util.removeElement('[vui-action]', 200)
            }, 350)
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
