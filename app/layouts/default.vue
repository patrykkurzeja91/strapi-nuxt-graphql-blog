<template>
  <div>
    <a-navbar :categories="categories"/>
    <a-sidenav :categories="categories"/>
    <nuxt />
  </div>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories";

import ANavbar from "~/components/molecules/ANavbar.vue"
import ASidenav from "~/components/molecules/ASidenav.vue"

export default {
  data() {
    return {
      categories: [],
    };
  },
  components: {
    ANavbar,
    ASidenav
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
    },
  },
};
</script>
<style lang="scss" scoped>
.text-white {
  color: white !important;
}
</style>
