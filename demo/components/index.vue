<template>
    <div>
        <header class="title">Components</header>
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
                        {label: 'com1', url: ''},
                        {label: 'com2', url: ''},
                        {label: 'com3', url: ''}
                    ],
                    [
                        {label: 'com1', url: ''},
                        {label: 'com2', url: ''},
                        {label: 'com3', url: ''}
                    ]
                ]
            }
        }
    }
</script>
<style lang="less">
    .title{
        font-size:0.15rem;
        font-weight:bold;
        margin-bottom:0.15rem;
    }
    .com-body{
        display: flex;
        .com-li{
            display:flex;
            flex: 1;
            height: 1.25rem;
            background: #f5f5f5;
        }
    }
</style>
