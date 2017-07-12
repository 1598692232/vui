<template>
    <div vui-radio>
        <ul class="radio-list">
            <li
                v-for="(item, i) in tags"
                v-html="item.template || item.label"
                @click="tagSelect(i)"
                :class="[item.selected ? 'active':'']"
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
        },

        maxNumber: {
            type: [Number, String],
            default: 1
        }
    },

    data () {
        return {
            selectedCount: 0,
            selectedTags: []
        }
    },

    mounted() {
        this.initRender()
    },

    methods: {
        /*初始化被选中的tag*/
        initRender() {
            this.tags.forEach((v, k) => {
                if (v.selected) {
                    this.selectedTags.push(v)
                }
            })
        },

        /*radio选择*/
        tagSelect(i) {
            if (this.selectedTags.length === parseInt(this.maxNumber) && !this.tags[i].selected && parseInt(this.maxNumber) !== 1) {
                this.$emit('error', {currentTag: this.tags[i], selectedTags: this.selectedTags, tags: this.tags})
                return
            }


            if (parseInt(this.maxNumber) !== 1) {
                if (!this.tags[i].selected) {
                    this.tags[i].selected = true
                    this.selectedCount++
                    this.selectedTags.push(this.tags[i])
                } else {
                    this.tags[i].selected = false
                    this.selectedCount--
                    this.selectedTags.forEach((v, k) => {
                        if (v.value === this.tags[i].value) {
                            this.selectedTags.splice(k, 1)
                        }
                    })
                }

                this.setTag(i)
            } else {
                this.tags.forEach((v, k) => {
                    v.selected = false
                })

                this.selectedTags = []
                this.selectedTags.push(this.tags[i])
                this.tags[i].selected = true
                this.setTag(i)
            }

            this.$emit('toggle',  {currentTag: this.tags[i], selectedTags: this.selectedTags, tags: this.tags})
        },

        /*渲染tag*/
        setTag (i) {
            let o = {}
            for (let k in this.tags[i]) {
                o[k] = this.tags[i][k]
            }

            this.$set(this.tags, i, o)
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

