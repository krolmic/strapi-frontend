<template>
  <div>
    <div
      v-if="article.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="apiUrl + article.image.url"
      uk-img
    >
      <h1>{{ article.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="article.content"
          :source="article.content"
          id="editor"
        />
        <p v-if="article.published_at">
          {{ moment(article.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// Libraries
import VueMarkdownIt from "vue-markdown-it";
const moment = require("moment");

// GraphQL queries
import articleQuery from "../../apollo/queries/article/article.gql"

export default {
  data() {
    return {
      article: {},
      moment: moment,
      apiUrl: process.env.strapiApiUrl
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
};
</script>
