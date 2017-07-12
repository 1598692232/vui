<template>
    <div vui-components>
        <header class="title">DVUI</header>
        <div class="wrap-box wrap-6">
            <div class="com-body"  v-for="(item,i) in components">
                <div class="com-li" v-for="(it, k) in item">
                    <a :href="it.url">{{it.label}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                components: [
                    [
                        {label: 'action', url: '#/action'},
                        {label: 'iosselect', url: '#/iosselect'},
                        {label: 'datepicker', url: '#/datepicker'}
                    ],
                    [
                        {label: 'modal', url: '#/modal'},
                        {label: 'swiper', url: '#/swiper'},
                        {label: 'toast', url: '#/toast'}
                    ],
                    [
                        {label: 'ranger', url: '#/ranger'},
                        {label: 'scroll', url: '#/scroll'},
                        {label: 'dropdown', url: '#/dropdown'}
                    ],
                    [
                        {label: 'diabox', url: '#/diabox'},
                        {label: 'radioOrCheckbox', url: '#/radioandcheckbox'},
                        {label: '', url: 'javascript:;'}
                    ]
                ]
            }
        }
    }
</script>
<style lang="less">
    [vui-components]{
        font-size:0.13rem;
        .title{
            font-size:0.15rem;
            font-weight:bold;
            margin-bottom:0.15rem;
            line-height: 0.44rem;
        }
        .com-body{
            display: flex;
            .com-li{
                display:flex;
                flex: 1;
                height: 1.25rem;
                background: #f5f5f5;
                border:1px solid #fff;
                a{
                    display: inline-block;
                    width:100%;
                    text-align: center;
                    line-height: 1.25rem;
                    text-decoration: none;
                }
            }
        }
    }
</style>
