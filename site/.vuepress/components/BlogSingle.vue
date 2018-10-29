<template>
  <main class="main main-border">
    <base-section containerClass="container-thin-alt" class="section-article-single">
      <div class="article-single">
        <div class="article-single-head">
          <h3 class="article-single-title">{{ $page.title }}</h3><!-- /.article-single-title -->

          <div class="article-single-meta">
            <p>By <a :href="authorLink">{{ authorName }}</a> on {{ friendlyDate }}.</p>
          </div><!-- /.article-single-meta -->
        </div><!-- /.article-single-head -->

        <div class="article-single-entry">
          <Content />
        </div><!-- /.article-single-entry -->

      </div><!-- /.article-single -->
    </base-section>
  </main><!-- /.main -->
</template>

<script>
const matchesAuthor = (page, author) => {
  if (page.path == "/authors/" + author + ".html") return true;
};

export default {
  computed: {
    friendlyDate() {
      return new Date(this.$page.frontmatter.date).toLocaleDateString();
    },
    authorLink() {
      return "/blog/?author=" + this.$page.frontmatter.author;
    },
    authorName() {
      let author = this.$page.frontmatter.author;
      let authors = this.$site.pages.filter(x => {
        return matchesAuthor(x, author);
      });
      return authors[0].frontmatter.name;
    }
  }
};
</script>