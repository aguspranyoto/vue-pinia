<script setup>
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()

defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="shadow rounded-xl">
    <div class="bg-blue-500 rounded-t-xl">
      <div class="w-full p-6">
        <div class="flex items-center justify-between">
          <p class="text-white text-xs sm:text-lg font-base">
            Written by {{ post.author }} on {{ post.created_at }}
          </p>
          <div class="flex gap-2">
            <button
              @click="postsStore.deletePost(post.id)"
              class="del material-icons text-red-600 bg-white rounded-full p-1 sm:p-2"
            >
              delete
            </button>
            <button
              @click="postsStore.savePost(post.id)"
              class="save material-icons text-green-600 bg-white rounded-full p-1 sm:p-2"
            >
              {{ post.is_saved ? 'bookmark' : 'bookmark_border' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 sm:p-6">
      <h1 class="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">{{ post.title }}</h1>
      <p class="text-xs sm:text-xl">{{ post.body }}</p>
    </div>
  </div>
</template>
