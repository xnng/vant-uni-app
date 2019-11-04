<template>
  <div class="container">hello</div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.container {
  color: red;
  font-size: 40px;
  z-index 20;
}

@media (max-width: $MQMobile) {
  .container {
    display none;
  }
}
</style>
