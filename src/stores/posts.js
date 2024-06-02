import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  // Data
  state() {
    return {
      posts: [],
      loading: true
    }
  },
  // computed
  getters: {
    sorted() {
      return this.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    saved: (state) =>
      state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  },
  // Methods

  actions: {
    getPosts() {
      fetch('http://localhost:8080/posts')
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.loading = false
        })
    },
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Agus Pranyoto',
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      })
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved
    }
  }
})
