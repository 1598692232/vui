<template>
    <header vui-header :style="{paddingTop:paddingTop+ 'rem'}">
        <a :href="leftUrl" @click="leftCallback" class="left">
            <slot name="left">
                <span slot="left">  <i class="fa fa-chevron-left" aria-hidden="true"></i></span>
            </slot>
        </a>
        <p class="title">{{ title }}</p>
        <a :href="rightUrl" @click="rightCallback" class="right">
            <slot name="right"></slot>
        </a>
    </header>
</template>
<style lang="less">
[vui-header]{
    font-size: 0.13rem;
    height:0.44rem;
    line-height: 0.44rem;
    background: #f9f9f9;
    .title{
        float: left;
        width: 80%;
        text-align: center;
    }
    .left{
        display: inline-block;
        float: left;
        width: 10%;
        font-size: 0.13rem;
    }
    .right{
        display: inline-block;
        float: left;
        width: 10%;
    }
}
</style>
<script>
    const u = navigator.userAgent
    export default {
        props: {
            leftUrl: {
                type: String
            },

            rightUrl: {
                type: String
            },

            title: {
                type: String
            },

            leftCallback: {
                type: Function,
                default() {}
            },

            rightCallback: {
                type: Function,
                default() {}
            }
        },

        data() {
            return {
                paddingTop: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 ? 0 : '0.2'
            }
        }
    }
</script>
