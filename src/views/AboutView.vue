<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { UsecaseObterListaExercicos } from '../services'

export default defineComponent({
  setup() {
    const data = ref([])

    const buscarListaExercicios = async () => {
      const response = await UsecaseObterListaExercicos.execute()
      data.value = response?.data
    }

    onMounted(() => {
      buscarListaExercicios()
    })

    return { data }
  }
})
</script>

<template>
  <div class="about">
    {{ data }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
