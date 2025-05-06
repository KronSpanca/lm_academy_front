<script setup>
import { onMounted, ref } from 'vue'

const quote = ref('')
const author = ref('')
const error = ref('')

const fetchZenQoutes = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/zen-quotes')
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`)
    }
    const data = await response.json()
    console.log('API response:', data)

    if (data.success) {
      quote.value = data.quote.text
      author.value = data.quote.author
    } else {
      throw new Error('No quote data received')
    }
  } catch (error) {
    console.error('Error fetching quote:', error)
    error.value = error.message
 
    quote.value = "The world would go on even without you. Don't take yourself so seriously"
    author.value = 'Norman Vincent Peale'
  }
}

onMounted(() => {
  console.log('HomePage component mounted')
  fetchZenQoutes()
})
</script>

<template>
  <div class="h-full flex flex-col justify-around p-4">
    <div class="welcome-message flex justify-center">
      <div class="w-[250px] md:w-[450px] text-center">
        <h1 class="text-3xl text-gray-500">
          Welcome to LM Academy Empowering Students with the Skills of Tomorrow
        </h1>
      </div>
    </div>
    <div class="api-quote flex justify-end">
      <div class="w-[250px] md:w-[450px] text-end space-y-4">
        <h1 class="italic font-gelasio text-[#003366] text-2xl">
          {{ quote || 'Loading...' }}
        </h1>
        <p class="text-[#8694a9] text-xl">{{ author || 'Loading...' }}</p>
        <p v-if="error" class="text-red-500 text-sm">Error: {{ error }}</p>
      </div>
    </div>
  </div>
</template>