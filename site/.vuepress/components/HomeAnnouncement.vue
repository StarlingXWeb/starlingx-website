<template>
  <box withActions title="StarlingX 3.0 Available Now">

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
