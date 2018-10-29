<template>
	<div class="bar is-dark-gray">
		<div class="container">
			<div class="bar-inner">
				<div class="bar-logo">
					<img :src="require('../theme/images/bar-logo.svg')" alt="Meet the StarlingX Community" />
				</div><!-- /.bar-logo -->

				<div class="bar-entry">
					<p>Meet the StarlingX Community at the OpenStack Summit, November 13-15 in Berlin, Germany!</p>
				</div><!-- /.bar-entry -->

				<a href="//openstack.org/summit" target="_blank" class="bar-btn">Learn More</a>
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
