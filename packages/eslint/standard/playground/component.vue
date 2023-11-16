<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainComponent',
  data() {
    return {
      message: 'hello',
    };
  },
});
</script>

<template>
  <section>
    <MainComponent title="adf" />

    <button
      type="button"
      disabled
    />
  </section>
</template>
