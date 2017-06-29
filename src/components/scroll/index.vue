<template>
    <div class="vui-scroll-body"
         :class="{
          'vui-touching':touching,
          'vui-pull-down': (state === 0),
          'vui-pull-up': (state === 1),
          'vui-refreshing': (state === 2),
         }"
         @touchstart="onRefresh?onTouchStart($event):undefined"
         @touchmove="onRefresh?onTouchMove($event):undefined"
         @touchend="onRefresh?onTouchEnd($event):undefined"
         @scroll="onLoad?onScroll($event):undefined"
    >
        <div class= "vui-scroll-inner"
             :style="{
                    transform: 'translate3d(0, ' + top + 'px, 0)',
                    webkitTransform: 'translate3d(0, ' + top + 'px, 0)'
                  }"
        >
            <div class="vui-scroll-refresh"
                 :style="{
                 display:onRefresh?'':'none',
                 height:offset?offset+'px':0
                 }">
                <slot name="refresh">
                </slot>
            </div>
            <slot></slot>
            <div class="vui-scroll-load">
                <slot name="loading">
                </slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .vui-scroll-body{
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        overflow-x:hidden ;
        overflow-y: auto;
        font-size: .13rem;
    }
    .vui-scroll-inner{
        position: absolute;
        top: 0;
        width: 100%;
        height:auto;
        transition:transform 0.3s;
        -webkit-transition:transform 0.3s;
    }
    .vui-touching .vui-scroll-inner{
        transition:transform 0s ;
        -webkit-transition:transform 0s ;
    }
    .vui-scroll-refresh{
        display: block;
        width:100%;
        background-color: #ff0000;
    }
    .vui-scroll-load{
        display: none;
        height:44px;
        width:100%;
        background-color: #00f;
    }
    .vui-pull-up .vui-scroll-refresh,.vui-refreshing .vui-scroll-refresh{
        background-color: #00C853;
    }
    .vui-refreshing .vui-scroll-inner{

    }
    .vui-pull-down .vui-scroll-load{
        display: block;
    }
    .vui-scroll-body::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
</style>
<script>
    /*
     * scroll使用原生的scroll
     * 对上拉刷新和加载效果进行处理
     * */
    export default{
        props: {
            onRefresh: {               /*刷新回调函数*/
                type: Function,
                default: undefined,
                required: false
            },
            onLoad: {                    /*加载数据*/
                type: Function,
                default: undefined,
                required: false
            },
            offset: {                    /*刷新块高度*/
                type: Number,
                default: 44
            }
        },
        data() {
            return {
                startY: 0,
                state: 0,    /*0：正常状态，1：确定要刷新数据，处touchmove状态，2：上拉刷新touchend之后的状态*/
                top: 0,
                touching: false,
                loading: false,
                refresh: false
            }
        },
        methods: {
           /*对上拉刷新数据效果进行处理，onTouchStart，onTouchMove，onTouchEnd*/
            onTouchStart(e) {
                this.startY = e.targetTouches[0].pageY
                this.touching = true
            },
            onTouchMove(e) {
                if (this.$el.scrollTop > 0 || !this.touching || this.onRefresh === undefined) {
                    return
                }
                let diff = e.targetTouches[0].pageY - this.startY
                if (diff > 0)e.preventDefault()
                this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)
                if (this.state === 2) {
                    return
                }
                if (this.top > this.offset) {
                    this.state = 1
                } else {
                    this.state = 0
                }
            },
            onTouchEnd (e) {
                let _$ = this
                this.touching = false
                if (this.top >= this.offset) {
                    this.state = 2
                    this.top = this.offset
                    _$.onRefresh(() => {
                        _$.state = 0
                        _$.top = 0
                    })
                } else {
                    this.state = 0
                    this.top = 0
                }
            },
            /*滚动监听，准备加载数据*/
            onScroll(e) {
                if (!this.onLoad) return
                let [
                    elHeight,
                    innerHeight,
                    elScrollTop,
                    loadDomHeight
                ] = [
                    this.$el.clientHeight,
                    this.$el.querySelector('.vui-scroll-inner').clientHeight,
                    this.$el.scrollTop,
                    this.$el.querySelector('.vui-scroll-load').clientHeight
                ]

                let bottom = innerHeight - elHeight - elScrollTop

                if (bottom < loadDomHeight) {
                    this.loadMore()
                }
            },
            /*加载数据*/
            loadMore() {
                if (this.loading) return
                this.loading = true
                this.onLoad(() => {
                    this.loading = false
                })
            }

        }

    }
</script>
