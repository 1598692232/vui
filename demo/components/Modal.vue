<template>
    <div>
        <head-top title="Modal" left-url="#/"></head-top>
        <div style="margin-top:0.64rem;text-align: center;width: 100%">
            <button @click="show()" class="v-btn">弹出modal</button>
        </div>
    </div>
</template>

<script>
    import $managerModal from '@/components/modal/index.js'
    import MutileModal from './MutileModal'
    import headTop from './header'
    export default {
        data() {
            return {
                list: [1, 2, 3, 4],
                modal: null
            }
        },

        components: {
            headTop
        },

        created () {
//        window.MutileModal = MutileModal
            window.modal = null
        },

        methods: {
            show() {
//          let mm = new ManagerModal()
                $managerModal.createModalParent(MutileModal, {
                    title: 'MODAL ONE',
                    theme: '#f5f5f5',
                    render() {
                        console.log('render')
                    },
                    onHide() {
                        console.log('onHide')
                    }
                }).then((modal) => {
                    console.log(modal, 7575)
                    window.modal = modal
                })
            }
        }
    }
</script>
