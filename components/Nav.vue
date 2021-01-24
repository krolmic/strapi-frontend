<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <router-link :to="{ path: '/'}">
              A well-organized overview of my references / a nice try to create one.
            </router-link>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li v-for="category in categories" v-bind:key="category.id">
            <router-link
              :to="{ path: '/categories/' + category.id }"
              :key="category.id"
            >
              {{ category.name }}
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/contact'}">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
// GraphQL queries
import categoriesQuery from "@/apollo/queries/category/categories.gql";

export default {
  name: "Nav",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
};
</script>
