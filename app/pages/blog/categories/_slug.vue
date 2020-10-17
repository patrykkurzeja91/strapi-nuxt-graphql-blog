<template>
  <div>

    <client-only>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ category.name }}</h1>

        <Articles :articles="category.articles || []"></Articles>

      </div>
    </div>
  </client-only>
  </div>
</template>

<script>
import categoriesQuery from '~/apollo/queries/article/articles-categories'
import Articles from '~/components/Articles'

export default {
  data() {
    return {
      category: {}
    }
  },
  components: {
    Articles
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
      variables () {
        return { slug: this.$route.params.slug }
      },
      result({data}) {
        console.log(data);
        this.category = data.categories[0]
      }
    }
  }
}
</script>
