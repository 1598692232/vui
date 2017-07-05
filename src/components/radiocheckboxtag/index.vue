<template>
    <div vui-radio>
        <ul class="radio-list">
            <li
                v-for="(item, i) in tags"
                v-html="item.template || item.value"
                @click="tagSelect(i)"
                :class="{'active':item.selected}"
            ></li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        tags: {
            type: Array,
            default: []
        }
    },

    data () {
        return {}
    },

    mounted() {
        this.initTags()
    },

    methods: {
        /*数据初始化处理*/
        initTags() {
            this.tags.map((v, k) => {
                v.selected = false
            })
        },

        /*radio选择*/
        tagSelect(i) {
            this.tags[i].selected = true
            console.log(this.tags[i], 777)
        }
    }
}
</script>
<style lang="less">
    [vui-radio] {
        font-size:0.13rem;
        .radio-list {
            & > li{
                list-style: none;
                float: left;
                line-height: 0.30rem;
                min-width: 0.6rem;
                border: 1px solid #ddd;
                margin-right: 0.1rem;
                border-radius: 0.15rem;
                color:#666;
                margin-bottom: 0.1rem;
                &.active{
                    background: #0a9dc7;
                    color:#fff;
                    border-color: #0a9dc7;
                }
            }

            &:after {
                content: '';
                display: block;
                clear: both;
            }
        }
    }
</style>

