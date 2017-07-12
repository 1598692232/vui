
<template>
  <div class="demo">
    <head-top title="Iosselect" left-url="#/"></head-top>
    <div style="position: relative;margin-top:0.64rem;height:300px;">
        <div style="height:1000px;">
          <div style="margin-bottom:30px;">
            <ios-select name="" id="" :select-list="selectAll" ref="iosselect" @loop:event="getValue"></ios-select>
          </div>

          <div style="margin-bottom:30px;">
            <ios-select name="" id="" :select-list="selectAll2" ref="iosselect1" @loop:event="getValue" :initVal="[4,5,6,7]"></ios-select>
          </div>
          asdasdasdasd
        </div>
    </div>


  </div>
</template>
<script>
  import iosSelect from '@/components/iosselect/index'
  import headTop from './header'

  export default{
      data () {
          return {
              acts: [
          {id: 0, value: 0, callback: (a, b, c) => { console.log(a, b); c() }},
          {id: 1, value: 1, callback: (a, b) => { console.log(a, b) }},
          {id: 2, value: 2, callback: (a, b) => { console.log(a, b) }},
          {id: 3, value: 3, callback: (a, b) => { console.log(a, b) }}
              ],
              selectAll: [[
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}

              ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}
              ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}
              ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15}
              ]],
              selectAll2: [[
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
              ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
              ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
              ], [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10},
          {value: 11, text: 11},
          {value: 12, text: 12},
          {value: 13, text: 13},
          {value: 14, text: 14},
          {value: 15, text: 15},
          {value: 16, text: 16},
          {value: 17, text: 17},
          {value: 18, text: 18},
          {value: 19, text: 19},
          {value: 20, text: 20}
              ]]
          }
      },
      components: {
          iosSelect,
          headTop
      },
      mounted() {
          let _$ = this
          setTimeout(() => {
              _$.selectAll[2] = [
          {value: 1, text: 1},
          {value: 2, text: 2},
          {value: 3, text: 3},
          {value: 4, text: 4},
          {value: 5, text: 5},
          {value: 6, text: 6},
          {value: 7, text: 7},
          {value: 8, text: 8},
          {value: 9, text: 9},
          {value: 10, text: 10}
              ]
              if (this.$refs.iosselect !== undefined) {
              	this.$refs.iosselect.listRender(2)
              }
          }, 3000)
      },
      methods: {
          getValue(val) {
//        console.log(val)
          }
      }
  }
</script>
