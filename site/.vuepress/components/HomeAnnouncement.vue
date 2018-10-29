<template>
  <box withActions title="First Release of StarlingX Open Source Edge Cloud Software Now Available">

    <slot></slot>

    <template slot="actions">
      <a :href="link" class="button is-primary is-rounded">
        <span>{{ buttonName }}</span>

        <span class="ico">
          <img :src="require('../theme/svg/arrow-left.svg')" alt="Call To Action" />
        </span>
      </a>
    </template>
  </box>
</template>

<script>
export default {
  props: ['buttonName','link']
}
</script>
