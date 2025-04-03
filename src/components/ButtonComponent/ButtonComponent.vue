<script setup lang="ts">
import fieldProps from './ButtonComponentDefinition';

const props = defineProps(fieldProps);
</script>

<template>
  <button :type="props.buttonType" :tabindex="props.tabIndex" @click="props.clickHandler ? props.clickHandler() : () => {}">
    {{ props.buttonLabel }}
  </button>
</template>

<style scoped>
button {
  background: #000;
  color: #eee;
  padding: 15px;
  border: none;
  border-radius: 3px;
}
</style>