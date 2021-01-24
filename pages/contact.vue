<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>A well-organized overview of ways to contact me.</h1>
        <img class="uk-margin-medium-right" src="dog_phone.gif"/>
        <a
            v-for="wayToContactMe in waysToContactMe"
            :key="wayToContactMe.label"
            :href="wayToContactMe.url"
            class="uk-button uk-button-primary uk-margin-small-right"
        >
          {{ wayToContactMe.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waysToContactMe: [
        {label: 'GitHub', url: 'https://github.com/krolmic'},
        {label: 'Twitter', url: 'https://twitter.com/krol_mic'},
        {label: 'E-Mail', url: 'mailto: michael.krol@protonmail.com'},
      ],
    };
  },
};
</script>
