<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()
postsStore.getPosts()
</script>

<template>
  <header class="bg-blue-500 p-6 text-white">
    <nav class="max-w-screen-lg mx-auto px-4 md:px-0">
      <div class="flex items-center gap-6">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/post-create">Create</RouterLink>
      </div>
    </nav>
  </header>
  <main class="max-w-screen-lg mx-auto px-4 md:px-0">
    <RouterView />
  </main>
</template>
