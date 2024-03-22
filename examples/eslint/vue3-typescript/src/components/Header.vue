<script setup lang='ts'>
defineProps<{

  /**
   * @type {string}
   * @description Message that display in header
   */
  message: string,
}>();

</script>

<template>
  <header>
    {{ message }}
  </header>
</template>
