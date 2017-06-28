<template>
    <div>
        <header class="title">Components</header>
        <div class="wrap-box wrap-6">
            <div class="flex-inner">
                <div class="flex-box1 flex-item"></div>
                <div class="flex-box2">
                    <div class="flex-item color1"></div>
                    <div class="flex-item color2"></div>
                </div>
            </div>
            <div class="flex-inner">
                <div class="flex-item color3"></div>
                <div class="flex-item color4"></div>
                <div class="flex-item color5"></div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
    .flex-box1{
        background: #f00;
    }
    .color1{
        background: #ff8447;
    }
    .color2{
        background: #ff8447;
    }
    .color3{
        background: #0f0;
    }
    .color4{
        background: #00ff88;
    }
    .color5{
        background: #0f8343;
    }
    .title{
        font-size:20px;
        font-weight: bold;
    }
    .wrap-box {
        display: -webkit-box;
    }

    .flex-inner {
        -webkit-box-flex: 1;
        display: -webkit-box;
    }

    .flex-item {
        -webkit-box-flex: 1;
        position: relative;
    }
    .wrap-6 {
        -webkit-box-orient: horizontal;
    }
    .wrap-6 .flex-inner {
        -webkit-box-flex: 0;
        -webkit-box-orient: vertical;
    }
    .wrap-6 .flex-inner:first-child {
        width: 50%;
    }
    .wrap-6 .flex-inner:last-child {
        width: 33.3%;
    }
    .wrap-6 .flex-item {
        padding-top: 100%;
    }
    .wrap-6 .flex-box2 .flex-item {
        padding-top: 50%;
    }
    .wrap-6 .flex-box2 {
        display: -webkit-box;
        -webkit-box-orient: horizontal;
    }
    .wrap-6 .flex-inner:first-child,
    .wrap-6 .flex-box2 .flex-item:first-child {
        margin-right: 1px;
    }
    .wrap-6 .flex-box1,
    .wrap-6 .flex-inner:last-child .flex-item:first-child,
    .wrap-6 .flex-inner:last-child .flex-item:nth-child(2) {
        margin-bottom: 1px;
    }
</style>
