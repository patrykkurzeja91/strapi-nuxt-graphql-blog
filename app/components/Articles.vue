<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <nuxt-link
          v-for="article in leftArticles"
          :to="{ name: 'blog-articles-slug', params: { slug: article.slug } }"
          class="uk-link-reset"
          :key="article.id"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top" v-if="article.image">
              <img :src="article.image.url" alt="" height="100" />
            </div>
            <div class="uk-card-body">
              <p
                id="category"
                v-if="article.category"
                class="uk-text-uppercase"
              >
                {{ article.category.name }}
              </p>
              <p id="title" class="uk-text-large">{{ article.title }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <nuxt-link
            v-for="article in rightArticles"
            :to="{ name: 'blog-articles-slug', params: { slug: article.slug } }"
            class="uk-link-reset"
            :key="article.id"
          >
            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top" v-if="article.image">
                <img :src="article.image.url" alt="" height="100" />
              </div>
              <div class="uk-card-body">
                <p
                  id="category"
                  v-if="article.category"
                  class="uk-text-uppercase"
                >
                  {{ article.category.name }}
                </p>
                <p id="title" class="uk-text-large">{{ article.title }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data ({$config}) {
    return {
      api_url: $config.strapiBaseUri
    };
  },
  props: {
    articles: Array
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    }
  }
};
</script>
