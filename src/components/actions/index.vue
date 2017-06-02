
<template>
    <div>
        <overlay :oid="aid">
            <div class="action-body">
                <ul class="action-list">
                    <li v-for="(it,index) in actions" @click="actionClick(index)" v-overhide.id="aid">
                        {{it.value}}
                    </li>
                </ul>
                <slot name="cancel">
                    <div class="action-cancel" v-overhide.id="aid">
                        取消
                    </div>
                </slot>
            </div>
        </overlay>
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
    @-webkit-keyframes action-body-active{
        0%{
            bottom:-500px;
        }
        100%{
            bottom:0;
        }
    }
    @-moz-keyframes action-body-active{
        0%{
            bottom:-500px;
        }
        100%{
            bottom:0;
        }
    }
    @-o-keyframes action-body-active{
        0%{
            bottom:-500px;
        }
        100%{
            bottom:0;
        }
    }
</style>
<script>
    /* TODO::js去除overlay，不通过指令 */
    import overlay from '../overlay/index.vue'
    export default {
        props: {
            aid: {
                type: String,
                require: true
            },
            actions: {
                type: Array,
                require: true
            }
        },
        data () {
            return {
                actionShow: false,
                act: {
                    actionShow: false
                }
            }
        },
        components: {
            overlay
        },
        methods: {
            actionClick (i) {
                this.actions[i].callback(this.actions, i, done)
            }
        }
    }
</script>
