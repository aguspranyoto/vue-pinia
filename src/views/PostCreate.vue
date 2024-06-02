<script setup>
import { reactive, computed } from 'vue'
import MyWrapper from '@/components/MyWrapper.vue'
import { useRouter } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const router = useRouter()
const postsStore = usePostsStore()

const post = reactive({
  title: '',
  body: ''
})

const isFormInvalid = computed(() => post.title === '' || post.body === '')

const submit = () => {
  postsStore.addPost(post)

  router.push({ name: 'home' })
}
</script>

<template>
  <div class="mt-6">
    <MyWrapper>
      <form class="shadow rounded-xl p-6" @submit.prevent="submit">
        <h3 class="mb-4 font-semibold text-xl sm:text-2xl border-b pb-2 border-slate-200">
          Create a new posts
        </h3>
        <div class="flex flex-col mb-4 gap-2">
          <label>Post Title</label>
          <input
            type="text"
            class="border border-slate-400 py-1 sm:py-2 px-3"
            v-model="post.title"
          />
        </div>
        <div class="flex flex-col mb-4 gap-2">
          <label>Post Body</label>
          <textarea
            rows="7"
            class="border border-slate-400 py-1 sm:py-2 px-3"
            v-model="post.body"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            :disabled="isFormInvalid"
            class="mt-2 sm:mt-4 text-white text-md sm:text-xl px-4 py-1 bg-blue-500 w-full sm:w-1/6"
            :class="isFormInvalid ? 'opacity-50' : 'opacity-100'"
          >
            Add
          </button>
        </div>
      </form>
    </MyWrapper>
  </div>
</template>
