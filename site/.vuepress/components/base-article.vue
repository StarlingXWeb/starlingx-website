<template>
	<section class="section-article">
		<div class="container">
			<article class="article level">
				<div class="article-content">
					<h4 class="article-title title-main is-primary-dark">{{ title }}</h4><!-- /.article-title -->

					<div class="article__entry">
						<slot />
					</div><!-- /.article__entry -->
				</div><!-- /.article-content -->
				<figure v-if="image" class="article-image level-item level-right">
					<img
						:src="image"
						:alt="title"
					/>
				</figure><!-- /.article-image -->
			</article><!-- /.article -->
		</div><!-- /.container -->
	</section><!-- /.section-article -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "BaseArticle",

  /**
   * The supported properties of the component.
   *
   * @type {Object}
   */
  props: {
    image: {
      type: String,
      default: () => {}
    },
    title: {
      type: String,
      default: () => {}
    }
  }
};
</script>
