<template>
  <div>
    <!-- <div
    class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top"
    uk-height-viewport
    uk-parallax="bgy: -200"
    style="background-image: url('https://images.pexels.com/photos/723997/pexels-photo-723997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')">
       <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
       uk-parallax="y: 100,0">Headline</h1>
    </div> -->

    <div
      class="uk-height-large uk-background-cover uk-light uk-flex"
      uk-parallax="bgy: 200"
      style="background-image: url('https://images.pexels.com/photos/723997/pexels-photo-723997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
    >
      <h2
        class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical"
        uk-parallax="opacity: 1,0.3; viewport: 0.5;"
      >
        Headline
      </h2>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <a class="uk-link" href="#">SOMEWHERE</a>

        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m" uk-parallax="y: -50">
          <h3 class="uk-card-title">Default</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          {{}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/articles";
import Articles from "~/components/Articles";

export default {
  asyncData({$config}) {
    console.log($config.strapiBaseUri)
  }
};
</script>
<style lang="scss" scoped></style>
