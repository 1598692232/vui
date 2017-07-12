<template>
    <div style="padding-top:0.2rem;text-align: center">
        <button @click="show()" class="v-btn">显示modal2</button>
        <button @click="hide" class="v-btn">Close Modal1</button>
    </div>
</template>
<script>
    import $managerModal from '@/components/modal/index.js'
    import MutileModal2 from './MutileModal2'
    import Dropdown from '@/components/dropdown/index.js'
    export default {
        name: 'MutileModal',
        data() {
            return {
                list1: [1, 2, 3, 4],
                mm: null
            }
        },
        directives: {
            Dropdown
        },
        methods: {
            show() {
//          this.mm = new ManagerModal()
                $managerModal.createModalParent(MutileModal2, {
                    title: 'MODAL TWO',
                    direction: 'right'
                })
            },
            dataFormatter(item, index) {
                console.log('dateformatter')
                return `<div>${item}${item}${item}${item}${item}${item}${item}</div>`
            },

            dropClick(item, index) {
                console.log(item, index, '66666')
            },

            render() {
                console.log('已经render了')
            },

            hide() {
                $managerModal.destroy(0)
            }
        }
    }
</script>
