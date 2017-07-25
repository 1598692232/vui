<template>
    <div vui-dropdown>
        <ul class="vui-dropdown">
            <li v-for="(item,index) in listTemplate" v-html="item" @click="dropdownClick(item,index)">
            </li>
        </ul>
    </div>
</template>

<style lang="less">
    [vui-dropdown]{
        .vui-dropdown{
            position: fixed;
            background: #fff;
            box-shadow: 0 0 1px #666;
            padding:0.1rem;
            border-radius: 3px;
            font-size:.13rem;
            z-index:1;
            animation:fade 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards ;
            -webkit-animation:fade 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards ;
        }
        .vui-dropdown li{
            list-style: none;
            line-height:0.3rem;
            font-size: 0.13rem
        }
        @keyframes fade {
            0% {
                transform: translateY(-20px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                options: '',
                listTemplate: [],
                clientWidth: 0,
                clientHeight: 0,
                pos: {},
                $dropDown: '',
                $bindEl: ''
            }
        },
        mounted() {
            this.clientWidth = screen.width
            this.clientHeight = screen.height
        },
        methods: {
            show(pos, options, bindEl) {
                this.$dropDown = this.$el.querySelector('.vui-dropdown')
                this.options = options
                this.pos = pos
                this.$bindEl = bindEl

                this.$dropDown.style.left = pos.x + 'px'
                this.$dropDown.style.top = pos.y + 'px'
                this.handleDataTemplate()

                this.$nextTick(() => {
                    this.handleLeftAndTop()
                    setTimeout(() => {
                        this.options.render && this.options.render()
                    })
                })
            },

            handleDataTemplate() {
                let _$ = this
                if (!_$.options.dataFormatter && !_$.options.dropList) return
                _$.options.dropList.forEach((v, k) => {
                    _$.listTemplate.push(_$.options.dataFormatter(v))
                })
            },

        /* 对XY二次处理 */
            handleLeftAndTop() {
                if (this.pos.x + this.$dropDown.offsetWidth > this.clientWidth) {
                    this.$dropDown.style.right = parseInt(this.clientWidth - this.$bindEl.getBoundingClientRect().right) + 'px'
                    this.$dropDown.style.left = 'auto'
                }

                alert(this.pos.y + this.$dropDown.offsetHeight)
                alert(this.pos.y + this.$dropDown.offsetHeight > this.clientHeight)
                if (this.pos.y + this.$dropDown.offsetHeight + 60 > this.clientHeight) {
                    this.$dropDown.style.top = parseInt(this.pos.y - this.$dropDown.offsetHeight - this.$bindEl.offsetHeight - 10) + 'px'
                }
                alert(this.$dropDown.style.top)
            },

        /*  dropdown click */
            dropdownClick(item, index) {
                this.options.dropClick(item, index, this.options.dropList, this.listTemplate)
            }
        }
    }
</script>
