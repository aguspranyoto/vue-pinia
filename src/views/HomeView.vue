<script setup>
import PostItem from '@/components/PostItem.vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts'
import { ref } from 'vue'

const postsStore = usePostsStore()

const postFilter = ref('All')

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'All' ? 'Saved' : 'All'
}
</script>

<template>
  <div class="-mx-4 p-6 flex justify-between items-center border-b">
    <div class="flex items-center justify-between gap-4">
      <h3 class="text-xl sm:text-3xl">{{ postFilter === 'All' ? 'All posts' : 'Saved posts' }}</h3>
      <span class="material-icons animate-spin" v-show="postsStore.loading">cached</span>
    </div>
    <button @click="setPostFilter" class="bg-blue-500 px-2 py-1 rounded-md text-white">
      {{ postFilter === 'All' ? 'Show saved posts' : 'Show all posts' }}
    </button>
  </div>
  <div class="mt-6">
    <div
      v-if="postsStore.errMsg"
      class="bg-red-500 p-6 w-full mb-3 rounded-lg text-center text-white"
    >
      <p class="text-xl">{{ postsStore.errMsg }}</p>
    </div>

    <div v-if="postFilter === 'All'">
      <div v-for="post in postsStore.sorted" :key="post.id" class="mb-6">
        <MyWrapper>
          <PostItem :post="post" />
        </MyWrapper>
      </div>
    </div>

    <div v-if="postFilter === 'Saved'">
      <div v-for="post in postsStore.saved" :key="post.id" class="mb-6">
        <MyWrapper>
          <PostItem :post="post" />
        </MyWrapper>
      </div>
    </div>
  </div>
</template>
