<style>
.nav-ul-right {
  flex-direction: column;
}

@media (min-width: 575px) {
  .nav-ul-right {
    flex-direction: row;
  }
}
</style>

<template>
  <div>
    <nav class="uk-navbar-transparent" uk-navbar>
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
        <ul class="uk-navbar-nav nav-ul-right">
          <li class="uk-padding-small" v-for="category in categories" v-bind:key="category.id">
            <router-link
              :to="{ path: '/categories/' + category.id }"
              :key="category.id"
            >
              {{ category.name }}
            </router-link>
          </li>
          <li class="uk-padding-small">
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
