<script>
export default {}
</script>

<style lang="scss">
@import './components/style/var.scss';
page {
  background-color: #f8f8f8;
}

.van-collapse-item__title {
  &--disabled {
    &,
    & .van-cell__right-icon,
    .van-cell {
      color: $collapse-item-title-disabled-color !important;
    }
    .van-cell--clickable:active {
      background-color: $white !important;
    }
  }
}
</style>
