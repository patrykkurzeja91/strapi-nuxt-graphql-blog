<template>
  <div
      class="uk-background-primary uk-light"
      uk-sticky="cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"
    >
      <div class="uk-container">
        <nav  uk-navbar>
          <div class="uk-navbar-left ">
            <ul class="uk-navbar-nav">
              <li>
                <a class="uk-light" href="/">Propedi</a>
              </li>
            </ul>
          </div>

          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li>
                <nuxt-link
                  to="/blog"
                  >Blog
                </nuxt-link>
              </li>
              <li :key="category.id" v-for="category in categories">
                <nuxt-link
                  :to="{ name: 'blog-categories-slug', params: { slug: category.slug } }"
                  >{{ category.name }}
                </nuxt-link>
              </li>
            </ul>
            <span
              class="uk-margin-right uk-navbar-toggle"
              uk-toggle="target: #modal-full"
            >
              <span uk-icon="icon: table"></span>
            </span>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      categories: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
