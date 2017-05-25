<template>
  <div>
    <ios-select name="" id="" :select-list="dateList" ref="datepicker" @loop:event="setDay" :init-val="initDate" :input-style="inputStyle"
                @select:cancel="cancelDate" @select:ok="sureDate" @select:beforeinit="init"></ios-select>
  </div>
</template>
<style>

</style>
<script>
  import iosSelect from '../iosselect/index'

  const [CURRENT_YEAR, BIG_MONTH, SMALL_MONTH] = [new Date().getFullYear(), [1, 3, 5, 7, 8, 10, 12], [4, 6, 9, 11]]

  export default {
    props: {
      inputStyle: {
        type: Object
      },

      date: {
        type: Array,
        default() {
          return [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]
        }
      }
    },

    data() {
      return {
        state: 0,
        dateList: [[], [], []]
      }
    },

    computed: {
      initDate() {
        return this.date
      }
    },

    mounted() {
    },

    methods: {
      init() {
        this.initYear().initMonth().initDays()
      },

      initYear() {
        let _$ = this
        _$.dateList[0] = []
        let ob = {
          text: CURRENT_YEAR,
          value: CURRENT_YEAR
        }
        _$.dateList[0] = [ob]
        for (let i = 1; i < 30; i++) {
          let o = {
            text: CURRENT_YEAR - i,
            value: CURRENT_YEAR - i
          }
          _$.dateList[0].unshift(o)
        }

        for (let i = 1; i < 31; i++) {
          let o = {
            text: CURRENT_YEAR + i,
            value: CURRENT_YEAR + i
          }
          _$.dateList[0].push(o)
        }
        return _$
      },

      initMonth() {
        let _$ = this
        _$.dateList[1] = []
        for (let i = 1; i < 13; i++) {
          let o = {
            text: i,
            value: i
          }
          _$.dateList[1].push(o)
        }
        return _$
      },

      initDays() {
        let _$ = this
        _$.dateList[2] = []
        for (let i = 1; i < 32; i++) {
          let o = {
            text: i,
            value: i
          }
          _$.dateList[2].push(o)
        }
        return _$
      },

      setDay(val) {
        let [end, days] = [0, []]
        try {
          if (BIG_MONTH.indexOf(val[1].value) > -1) {
            end = 31
          } else if (SMALL_MONTH.indexOf(val[1].value) > -1) {
            end = 30
          } else {
            end = val[0].value % 100 === 0 ? (val[0].value % 400 === 0 ? 29 : 28 ) : (val[0].value % 4 === 0 ? 29 : 28)
          }
          for (let d = 1; d <= end; d++) {
            let o = {
              text: d,
              value: d
            }
            days.push(o)
          }
          this.dateList[2] = days
          this.$refs.datepicker.listRender(2)
        } catch (e) {
          return false
        }
      },

      getValue(val) {
        this.setDay(val)
      },

      sureDate(val) {
        this.$emit('select:ok', val)
      },

      cancelDate(val) {
        this.$emit('select:cancel', val)
      }
    },

    components: {
      iosSelect
    }
  }
</script>
