<template>
  <main class="page">
    <slot name="top" />

    <section class="van-post-container">
      <Content class="theme-default-content" />
      <PageVant />
    </section>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import PageVant from '@theme/components/PageVant.vue'

export default {
  components: { PageEdit, PageNav, PageVant },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}

.van-post-container {
  display: flex;
}
</style>
