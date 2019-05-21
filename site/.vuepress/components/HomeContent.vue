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

   <section class="section search-content">
    <div class="search-content">
      <h3 class="search-content-title">Subscribe to News About StarlingX</h3>
      <!-- /.hero-title -->
      <div class="search-content-subtitle">Stay up to date on StarlingX and Open Infrastructure community news.
      </div>
      <div v-if="withEntry" class="hero-entry">
        <slot name="entry"/>
      </div>
      <!-- /.hero-entry -->
      <div v-if="withButton" class="hero-actions">
        <slot name="buttons"/>
      </div>
      <!-- /.hero-actions -->
    </div>
    <b-field position="is-centered">
      <form method="post" id="e2ma_signup" onsubmit="return signupFormObj.checkForm(this)" action="https://app.e2ma.net/app2/audience/signup/1900237/1771360/">
        <input id="id_prev_member_email" name="prev_member_email" type="hidden">
        <input id="id_source" name="source" type="hidden">
        <input id="id_group_4036448" name="group_4036448" type="hidden" value="4036448">
        <input type="hidden" name="private_set" value="{num_private}">
        <input placeholder="Email Address" id="id_email" name="email" type="email" required class="search-container-input" size="is-large">
        </input>
          <!-- <button class="search-container-submit">Search</button> -->
          <a href="#" class="button is-primary no-border-search-submit" onclick="document.getElementById('e2ma_signup').submit();">
            <span>SUBMIT</span>
            
            <span class="ico">
              <img :src="require('../theme/svg/arrow-left.svg')" alt="Call To Action">
            </span>
          </a>
      </form>
    </b-field>
    </section>
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