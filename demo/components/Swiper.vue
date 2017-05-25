<template>
  <div class="demo">
    <Swiper :data="data" :auto="false" :delay="1000" :slider-shift="100" :speed="0.5" ref="swiper"
            @ontouchstart="touchstart" @ontouchmove="touchmove" @ontouchend="touchend" @renderend="renderend" @renderstart="renderstart">
      <template scope="props">
        <span>{{ props.item.value }}</span>
      </template>
    </Swiper>
  </div>
</template>
<script>
import Swiper from '../../src/components/swiper/index.vue'
export default{
  data () {
    return {
      data: [
        { id: 1, value: 1, color: '#f00' },
        { id: 2, value: 2, color: '#0f0' },
        { id: 3, value: 3, color: '#00f' },
        { id: 4, value: 4, color: '#666' },
        { id: 5, value: 5, color: '#ddd' },
        { id: 6, value: 6, color: '#eee' }
      ]
    }
  },
  components: {
    Swiper
  },

  mounted() {
    let _$ = this
    setTimeout(() => {
      console.log(1231231)
      _$.$refs.swiper.setActive(6)
    }, 1000)
  },

  methods: {
    touchstart () {
//      console.log('touchstart', arguments)
    },
    touchmove () {
//      console.log('touchmove', arguments)
    },
    touchend () {
//      console.log('touchend', arguments)
    },
    renderend () {
      console.log('renderend', arguments)
    },
    renderstart () {
      console.log('renderstart', arguments)
    }
  }

}
</script>
