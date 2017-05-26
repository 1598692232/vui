<template>
    <div vui-modal>
        <div class="vui-modal">
            <header class="vui-modal-header">
                <p></p>
            </header>
            <section>
                <slot></slot>
            </section>
        </div>
    </div>
</template>
<style>
    .vui-modal {
        position: fixed;
        top:0;
        left:0
    }
</style>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
