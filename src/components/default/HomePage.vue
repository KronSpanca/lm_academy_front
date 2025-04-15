<script setup>
import { onMounted, ref } from 'vue';


const quote = ref('')
const author = ref('')


const fetchZenQuoteApi = async() => {
  try {
    const reponse = await fetch('https://localhost:8000/api/zen-quote')
    const data = await reponse.json()
    console.log("data", data)
    if(data.success) {
        quote.value = data.quote.text
        author.value = data.author.author
    }
    else   {
        quote.value = "The world would go on even withoutyou.Don't take yourself so seriosly".
        author.value = 'Norman Vincent Peale'
    }
  } catch (error){
    console.error('Error fetching qoute', error);
  }
  
    
}

onMounted(() => {
 fetchZenQuoteApi()
})

</script>


<template>
        <div class="h-full flex flex-col justify-around"></div>
            <div class="welcome-message justify-center">
                <div class="w-[250px] md:w-[450px] text-center"></div>
                <h1 class="text-3xl">Welcome To LM Academy Empowering Students with the Skills of Tomorrow</h1>           
            </div>
            <div class="api-quote flex justify-end">
                <div class="w-[250px] md:w-[450px] text-end space-y-4 text-2xl">
                    <h1 class="italic font-gelasio text-[#003366]">
                     {{ quote || "Loading..." }}
                    </h1>
                    <p class="text-[#8694A9]">{{ author || "Unknown"}}</p>
                </div>
            </div>
         
     
        <!--endcontect-->
</template>