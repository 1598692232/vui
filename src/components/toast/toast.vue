<template>
    <div vui-toast>
        <div class="vui-toast-bg">
            <div>
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
[vui-toast]{
    position: relative;
    font-size:0.13rem;
    z-index:1;
    .vui-toast-bg{
        display: table;
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        & > div{
            display: table-cell;
            vertical-align: middle;
            width:100%;
            text-align:center;
            p{
                display: inline-block;
                line-height: 35px;
                max-width:80%;
                background:rgba(0,0,0,0.8) ;
                color: #fff;
                border-radius: 3px;
                box-shadow: 0 0 10px 1px #666;
                padding:0 15px;
            }
        }
    }
}

@keyframes toast-hide {
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
</style>
<script>
    import Util from '../../util/util'
    export default {
        props: {
            text: {
                type: String
            },
            timeout: {
                type: Number
            }
        },
        destroyed() {
            let util = new Util()
            util.removeElement('[vui-toast]', 0)
        },
        mounted() {
            this.$el.style.animation = `toast-hide ${this.timeout}ms linear forwards`
            setTimeout(() => {
                this.$destroy()
            }, this.timeout)
        }
    }
</script>
