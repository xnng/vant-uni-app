<template>
  <view>
    <transition name="fade">
      <view v-if="value" class="van-overlay" @click="showOverlay"></view>
    </transition>
    <transition name="fade2">
      <view
        v-if="value && newPosition !== 'center'"
        class="van-overflow-hidden van-popup"
        :class="[
        newPosition === 'top' && 'van-popup--top',
        newPosition === 'left' && 'van-popup--left',
        newPosition === 'right' && 'van-popup--right',
        newPosition === 'bottom' && 'van-popup--bottom',
        newRound && 'van-popup--round',
      ]"
        :style="{
        height: ['top','bottom'].includes(newPosition) ? height : '100%',
        width: ['left','right'].includes(newPosition) ? height : '100%',
        display: value ? 'block' : 'none'
      }"
      >
        <slot />
        <div v-if="closeable" :class="closeable && 'van-popup__close-icon van-popup__close-icon--top-right'" @click="handleCloseIcon">
          <van-icon :name="closeIcon ? closeIcon : 'cross'"></van-icon>
        </div>
      </view>

      <view
        v-if="value && newPosition === 'center'"
        class="van-overflow-hidden van-popup"
        :class="[
        newPosition === 'center' && 'van-popup--center',
        newRound && 'van-popup--round'
      ]"
        :style="{
        height: 'auto',
        width: 'auto',
        display: value ? 'block' : 'none'
      }"
      >
        <slot />
        <div v-if="closeable" :class="closeable && 'van-popup__close-icon van-popup__close-icon--top-right'" @click="handleCloseIcon">
          <van-icon :name="closeIcon ? closeIcon : 'cross'"></van-icon>
        </div>
      </view>
    </transition>
  </view>
</template>

<script>
import vanIcon from '../icon'
export default {
  components: { vanIcon },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center'
    },
    height: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    closeIcon: {
      type: String,
      default: ''
    }
  },
  computed: {
    newPosition () {
      return this.position
    },
    newRound () {
      return this.round
    }
  },
  methods: {
    showOverlay () {
      this.$emit('click')
      this.$emit('input', false)
    },
    handleCloseIcon () {
      this.$emit('close')
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.5s;
}
.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}
</style>
