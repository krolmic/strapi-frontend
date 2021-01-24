<template>
  <div>
    <div class="uk-child-width-1-1@s uk-child-width-1-2@s" uk-grid>
      <router-link
        v-for="article in articles"
        :to="{ path: '/articles/' + article.id }"
        class="uk-link-reset"
        :key="article.id"
      >
        <div class="uk-card uk-card-muted">
          <div class="uk-card-media-top">
            <img :src="apiUrl + article.image.url" alt=""/>
          </div>
          <div class="uk-card-body">
            <p
              v-if="article.category"
              class="uk-text-uppercase"
            >
              {{ article.category.name }}
            </p>
            <p class="uk-text-large">{{ article.title }}</p>
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      apiUrl: process.env.strapiApiUrl
    };
  },
  props: {
    articles: Array
  }
};
</script>
