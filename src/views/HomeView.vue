<script setup>
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()
</script>

<template>
  <div class="-mx-4 p-6 flex justify-between items-center border-b">
    <h3 class="text-xl sm:text-3xl">All posts</h3>
    <button class="bg-blue-500 px-2 py-1 rounded-md text-white">Show saved posts</button>
  </div>
  <div class="mt-6">
    <div v-for="post in postsStore.sorted" :key="post.id" class="mb-6">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>
</template>
