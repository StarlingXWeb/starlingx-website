<template>
	<div class="bar is-dark-gray">
		<div class="container">
			<div class="bar-inner">
				<div class="bar-logo">
					<img :src="require('../theme/images/bar-logo.svg')" alt="Meet the StarlingX Community" />
				</div><!-- /.bar-logo -->

				<div class="bar-entry">
					<p>Get involved with the StarlingX community at the Open Infrastructure Summit Shanghai.</p>
				</div><!-- /.bar-entry -->

				<a href="//starlingx.io/blog/starlingx-shanghai-schedule-blog.html" target="_blank" class="bar-btn">View Sessions</a>
			</div><!-- /.bar-inner -->
		</div><!-- /.container -->
	</div><!-- /.bar -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "Bar"
};
</script>
