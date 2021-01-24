<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ category.name }}</h1>

        <ArticlesList :articles="category.articles || []"/>
      </div>
    </div>
  </div>
</template>

<script>
// GraphQL queries
import categoryQuery from "../../apollo/queries/category/category.gql";

// Components
import ArticlesList from "../../components/ArticlesList.vue";

export default {
  data() {
    return {
      category: [],
    };
  },
  components: {
    ArticlesList
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryQuery,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
};
</script>
