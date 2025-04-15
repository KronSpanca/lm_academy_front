<template>
       <header>
            <div class="flex justify-between items-center border-b-textPrimary border-b-4 py-4">
                <h1 class="logo text-5xl text-textPrimary">LM Academy</h1>
                <nav class="text-3xl flex gap-2">
                    <span>|</span>
                    <router-link to="/login" active-class="border-b-textPrimary border-b-2"
                        >Login</router-link>
                </nav>
            </div>
        </header>
</template>