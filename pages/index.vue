<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Latest stuff</h1>

        <ArticlesList :articles="articles"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import ArticlesList from "../components/ArticlesList.vue";

// GraphQL queries
import articlesQuery from "../apollo/queries/article/articles.gql"

export default {
  components: {
    ArticlesList
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  },
  data() {
    return {
      articles: [],
      query: ''
    };
  },
};
</script>
