<template>
  <div class="wrapper">
    <base-header />

    <component v-if="layout" :is="layout" />
    <home v-else-if="$page.frontmatter.home" />
    <page v-else />

    <base-footer />
  </div><!-- /.wrapper -->
</template>

<script>
import Page from './Page.vue'

export default {
  components: { Page },
  computed: {
    layout() {
      if (this.$page.frontmatter.layout) { 
        return this.$page.frontmatter.layout 
      } else if (this.$page.path.startsWith('/blog/') && this.$page.path != '/blog/') {
         return 'BlogSingle'
      }
    }
  }
}
</script>

<style src="./sass/style.scss" lang="scss"></style>
