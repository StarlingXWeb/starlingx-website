<template>
  <main class="main">
    <hero class="hero-main is-primary" withButton :title="$page.frontmatter.hero.headline" :image="require('../theme/images/hero-image.png')">
      <template slot="buttons">
        <a :href="$page.frontmatter.hero.button.url" class="button is-primary-dark is-rounded">
          <span>{{ $page.frontmatter.hero.button.title }}</span>

          <span class="ico">
            <img :src="require('../theme/svg/arrow-left.svg')" alt="View the Code" />
          </span>
        </a>
      </template>
    </hero>

    <base-article :image="require('../theme/images/StarlingX_Diagram_SimplifiedArchitecture.jpg')">
      <slot name="about"></slot>
    </base-article>

    <base-section class="section-watermark is-dark" containerClass="container-small" withFoot :image="require('../theme/images/watermark.png')">
      <div class="columns is-multiline">
        <div class="column is-one-third values" v-for="value in $page.frontmatter.values">
          <article-small :title="value.title" :image="require('../theme/svg/' + value.icon )">
            <p>{{ value.copy }}</p>
          </article-small>
        </div><!-- /.column -->

      </div><!-- /.columns -->
    </base-section>

    <base-section class="section-modified">
      <div class="section-inner">
        <div class="columns">
          <div class="column">
            <list-numeric title="How to Get Involved" :items="$page.frontmatter.getInvolvedSteps">
              <template slot-scope="{ item }">
                <h6>{{ item.title }}</h6>

                <p>{{ item.entry }}</p>

                <a :href="item.link.url">{{ item.link.title }}</a>
              </template>
            </list-numeric>
          </div><!-- /.column -->

          <div class="column">
            <slot name="announcement"></slot>
          </div><!-- /.column -->
        </div><!-- /.columns -->
      </div><!-- /.section-inner -->
    </base-section>
  </main><!-- /.main -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "HomeContent"
};
</script>