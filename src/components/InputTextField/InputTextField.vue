<script setup lang="ts">
import fieldProps from './InputTextFieldDefinition';

defineProps(fieldProps);
const model = defineModel();
</script>

<template>
  <fieldset>
    <legend class="hidden">{{ fieldLabel }}</legend>

    <label :for="fieldId">{{ fieldLabel }} <span v-if="required" class="required">*</span></label>
    <input type="text"
      :id="fieldId"
      :name="fieldName"
      :tabindex="tabIndex"
      v-model="model" />

  </fieldset>
</template>

<style scoped>
fieldset {
  display: block;
  position: relative;
  margin: 10px 0;
  padding: 20px;
}

.hidden {
  display: none;
}

fieldset label {
  position: absolute;
  top: -12px;
  left: 10px;
  background-color: #000;
}

.required {
  color: #c00;
}

input[type="text"] {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
</style>