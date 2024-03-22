<script setup lang='ts'>
import { reactive } from 'vue';

import MainHeader from './components/Header.vue';

const state = reactive({
  articles: [],
});

</script>

<template>
  <MainHeader message="Hello" />

  <main>
    <h1>Application</h1>

    <article
      v-for="i in 10"
      :key="i"
    >
      {{ i }}
    </article>

    <pre lang="json">{{ JSON.stringify(state.articles, null, 2) }}</pre>
  </main>
</template>
