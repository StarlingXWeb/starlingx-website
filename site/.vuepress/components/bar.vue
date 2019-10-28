<template>
	<div class="bar is-dark-gray">
		<div class="container">
			<div class="bar-inner">
				<div class="bar-logo">
					<img :src="require('../theme/images/bar-logo.svg')" alt="Meet the StarlingX Community" />
				</div><!-- /.bar-logo -->

				<div class="bar-entry">
					<p>If your organization is using or evaluating StarlingX, share your feedback in the StarlingX User Survey.</p>
				</div><!-- /.bar-entry -->

				<a href="https://www.surveymonkey.com/r/StarlingX" target="_blank" class="bar-btn">Take the Survey</a>
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
