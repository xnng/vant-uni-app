
<template>
  <transition name="fade">
  <div>

    <span
        v-if="showTag"
      class="van-tag"
      :class="[
      `van-tag--${type}`,
       round  && 'van-tag--round',
       mark  && 'van-tag--mark',
       plain && 'van-tag--plain van-hairline--surround',
      ]"
      :style="{
          backgroundColor:curBackgroundColor&&color,
          color:curTextColor?color:textColor,
          fontSize:size&&size
          }"
    >标签

     <van-icon v-if="closeable"  @closeTag="closeTag"  name="cross"></van-icon>

    </span>

  </div>
    </transition>
</template>
<script>
import vanIcon from '@/components/icon'
export default {
  components: {
    vanIcon
  },
  props: {
    size: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      curTextColor: false,
      curBackgroundColor: false,
      showTag: true
    }
  },
  mounted () {
    if (this.color) {
      if (this.plain) {
        this.curTextColor = true
      } else {
        this.curBackgroundColor = true
      }
    }
  },
  methods: {
    closeTag (val) {
      if (val === 'cross') {
        this.showTag = false
        this.$emit('close')
      }
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
.van-hairline--surround {
  position: relative;
  border-radius: 0.4em;
  background-color: transparent !important;
}
.van-hairline--surround:after {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  width: 200%;
  height: 200%;
  border-width: 1px;
  border-style: solid;
  border-color: inherit;
  transform-origin: 0 0;
  transform: scale(0.5, 0.5);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
