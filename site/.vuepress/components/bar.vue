<template>
	<div class="bar is-dark-gray">
		<div class="container">
			<div class="bar-inner">
				<div class="bar-logo">
					<img :src="require('../theme/images/bar-logo.svg')" alt="Meet the StarlingX Community" />
				</div><!-- /.bar-logo -->

				<div class="bar-entry">
					<p>Join the StarlingX Community at the Open Infrastructure Summit Denver, April 29 - May 1. Register before prices increase on February 27 at 11:59pm PT</p>
				</div><!-- /.bar-entry -->

				<a href="//openstack.org/summit/denver-2019/" target="_blank" class="bar-btn">Learn More</a>
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
