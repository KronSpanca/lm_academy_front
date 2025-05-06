<script setup>
import DefaultHeader from '@/components/default/general/DefaultHeader.vue';
import FooterDefault from '@/components/default/general/FooterDefault.vue';




</script>
<template>
    <main class="px-4">
     <DefaultHeader />
        <!--endheader-->
        <!--contect-->
        <div class=" wrapper min-h-[80vh]">
        <router-view />
        </div>
        <!--endcontect-->
        <!--footer-->
        <FooterDefault />
        <!--endfooter-->
    </main>
</template>