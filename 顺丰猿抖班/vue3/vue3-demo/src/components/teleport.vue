<template>
  <div class="confirm-modal">
    <button @click="isOpen = true">打开</button>
    <teleport to="#foot-container">
    <div v-if="isOpen">
      <p>大大大大大大大</p>
      <button>取消</button>
    </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const isOpen = ref(false)
    return { isOpen }
  }, 
}

</script>

<style>

</style>