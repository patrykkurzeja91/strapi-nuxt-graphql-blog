<template>
  <div id="modal-full" uk-offcanvas="mode: reveal; flip: true">
    <div class="uk-offcanvas-bar">
      <button
        class="uk-offcanvas-close uk-close-large"
        type="button"
        uk-close
      ></button>
      <h6 style="text-transform: uppercase">Strapi blog</h6>
      <div>
        <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
          <li :key="category.id" v-for="category in categories">
            <nuxt-link
              class="uk-modal-close"
              :to="{ name: 'blog-categories-slug', params: { slug: category.slug } }"
              >{{ category.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <p>Built with strapi</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
