<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1><span style="font-weight: 500">BLOG</span>PEDI</h1>

        <Articles :articles="articles"></Articles>
        <!-- {{articles }} -->
        <a class="uk-link" href="#">SOMEWHERE</a>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
          <h3 class="uk-card-title">Default</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import Articles from "~/components/Articles";

export default {
  data() {
    return {
      articles: [],
    };
  },
  components: {
    Articles,
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      result({data}) {
        console.log(data);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
