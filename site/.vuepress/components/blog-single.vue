<template>
	<main class="main main-border">
		<base-section containerClass="container-thin-alt" class="section-article-single">
			<div class="article-single">
				<div class="article-single-head">
					<h3 class="article-single-title">How StarlingX is used in a specific use case that’s exciting for potential customers.</h3><!-- /.article-single-title -->

					<div class="article-single-meta">
						<p>By <a href="#">John Doe in News & Announcements</a> on September 4, 2018</p>
					</div><!-- /.article-single-meta -->
				</div><!-- /.article-single-head -->

				<div class="article-single-entry">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin purus ante, et porta eros volutpat nec. Nullam tincidunt ultrices lorem, vel euismod mi placerat nec. Nullam porttitor nibh sagittis, suscipit lorem pharetra, example link here. Pellentesque posuere vitae magna quis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat orci eu sapien dictum, et bibendum nulla pellentesque. Nullam fringilla dolor eget nibh iaculis volutpat. Donec tempor accumsan consectetur. Etiam lobortis cursus neque ac eleifend. Maecenas pharetra vehicula arcu quis fermentum. Integer ullamcorper tortor in magna condimentum, vitae fringilla lacus fringilla. Aenean malesuada bibendum diam nec volutpat. Nullam pretium tellus nisi, ut aliquam arcu consectetur blandit.</p>
				</div><!-- /.article-single-entry -->

				<h3 class="article-single-title-alt">Section Title</h3><!-- /.article-single-title-alt -->

				<div class="article-single-entry article-single-entry-alt">
					<p>Donec dui massa, porttitor sit amet dignissim sed, placerat eget orci. Pellentesque id ullamcorper elit. Aliquam accumsan, neque eu pulvinar eleifend, lorem ante lacinia diam, id vehicula erat velit nec tortor.</p>
				</div><!-- /.article-single-entry -->

				<div class="article-single-code">
					<pre>&lt;!doctype html&gt; <br />&lt;html&gt; <br />&lt;head&gt; <br />  &lt;meta charset="utf-8" /&gt; <br />  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt; <br /> <br />  &lt;title>{ Post Title }&lt;/title&gt; <br />  &lt;!-- Include the stylesheets from your site here -- &gt; <br />  &lt;link rel="stylesheet" href="https://starlingx.io/blog.css" /&gt; <br /> <br />&lt;/head&gt;</pre>
				</div><!-- /.article-single-code -->

				<div class="article-single-entry">
					<p>Nullam elit est, commodo ac fermentum vel, fermentum maximus purus. Morbi gravida rutrum massa, at <span class="code">inline code example</span> at. Sed nec tincidunt nunc. Morbi ac rutrum mi, et commodo justo. Fusce iaculis pellentesque erat consequat pharetra. Vestibulum at ornare elit, sit amet cursus nisi. Praesent nec suscipit risus. Praesent lorem justo, facilisis ut lacus et, semper consequat massa. Nulla sollicitudin finibus orci. Etiam lacus libero, ullamcorper eget consequat eu, sollicitudin sed libero. Ut auctor ut libero nec ultricies. Donec a orci non massa gravida laoreet. Quisque vel placerat felis.</p>
				</div><!-- /.article-single-entry -->

				<div class="article-single-image">
					<img src="../theme/images/sample-photo.png" alt="Sample Photo" />
				</div><!-- /.article-single-image -->

				<div class="article-single-entry article-single-entry-alt">
					<p>Sed vel ligula gravida, malesuada justo ac, porta neque. Praesent pharetra bibendum mauris, quis sagittis mauris hendrerit vitae. Praesent iaculis enim id scelerisque consectetur. Proin ultricies, sapien vel egestas dictum, augue ex pharetra dolor, at volutpat diam nunc sit amet nulla.</p>
				</div><!-- /.article-single-entry -->

				<ul class="list-tags">
					<li>
						<b-tag type="is-primary">software</b-tag>
					</li>

					<li>
						<b-tag type="is-primary">users</b-tag>
					</li>

					<li>
						<b-tag type="is-primary">another tag</b-tag>
					</li>
				</ul><!-- /.list-tags -->
			</div><!-- /.article-single -->
		</base-section>

		<base-section containerClass="container-thin-alt" class="section-boxes section-solid" withHead title="More to Read">
			<div class="section-group">
				<box class="box-modified box-flex box-light">
					<article-excerpt articleLink="/" class="article-excerpt-alt" title="Another interesting article about StarlingX" author="Janice Smith in Software" date="August 26, 2018" metaLink="https://www.google.com/">
						<p>Nullam elit est, commodo ac fermentum vel, fermentum maximus purus. Morbi gravida rutrum massa…</p>
					</article-excerpt>
				</box>
			</div><!-- /.section-group -->

			<div class="section-group">
				<box class="box-modified box-flex box-light">
					<article-excerpt articleLink="/" class="article-excerpt-alt" title="And here is an article to read!" author="Janice Smith in Software" date="August 26, 2018" metaLink="https://www.google.com/">
						<p>Nullam elit est, commodo ac fermentum vel, fermentum maximus purus. Morbi gravida rutrum massa. Praesent iaculis enim id scelerisque consectetur. Proin ultricies, sapien vel egestas dictum, augue ex pharetra dolor, at volutpat augue ex pharetra dolor, at volutpat diam nunc sit…</p>
					</article-excerpt>
				</box>
			</div><!-- /.section-group -->
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
		name: 'BlogSingle',

		/**
		 * The imported components.
		 * 
		 * @type {Object}
		 */
		components: {
			BaseSection,
			ArticleExcerpt,
			Box
		}
	}
</script>
