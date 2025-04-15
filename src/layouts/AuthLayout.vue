<script setup>
import AuthFooter from '@/components/auth/AuthFooter.vue';


</script>
<template>
    <main>
				<!-- Main Content -->
                <div class="flex flex-col w-full  overflow-hidden relative min-h-screen radial-gradient items-center justify-center g-0 px-4">
                  
                   <router-view />
				
			
        <AuthFooterer />
        
         </div>
		<!--end of project-->
	</main>
</template>