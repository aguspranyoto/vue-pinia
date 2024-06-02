import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  // Data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'Pengembangan Teknologi Terbaru',
          body: 'Artikel ini membahas tentang inovasi teknologi terbaru yang sedang dikembangkan di berbagai sektor industri.',
          author: 'Agus Pranyoto',
          created_at: '11/06/2024',
          is_saved: false
        },
        {
          id: 2,
          title: 'Pentingnya Pendidikan di Era Digital',
          body: 'Era digital membawa perubahan signifikan dalam dunia pendidikan, menekankan pentingnya literasi digital bagi generasi muda.',
          author: 'Budi Santoso',
          created_at: '12/06/2024',
          is_saved: false
        },
        {
          id: 3,
          title: 'Tren Kuliner 2024',
          body: 'Tren kuliner 2024 menunjukkan peningkatan minat pada makanan sehat dan ramah lingkungan, dengan fokus pada bahan organik.',
          author: 'Citra Dewi',
          created_at: '13/06/2024',
          is_saved: true
        },
        {
          id: 4,
          title: 'Transformasi Energi Terbarukan',
          body: 'Artikel ini mengeksplorasi perkembangan energi terbarukan dan dampaknya terhadap lingkungan serta ekonomi global.',
          author: 'Dedi Wahyudi',
          created_at: '14/06/2024',
          is_saved: false
        },
        {
          id: 5,
          title: 'Kesehatan Mental di Tempat Kerja',
          body: 'Diskusi tentang pentingnya menjaga kesehatan mental di tempat kerja dan strategi untuk menciptakan lingkungan kerja yang suportif.',
          author: 'Erika Purnama',
          created_at: '15/06/2024',
          is_saved: true
        },
        {
          id: 6,
          title: 'Inovasi dalam Industri Otomotif',
          body: 'Laporan tentang berbagai inovasi terbaru dalam industri otomotif, termasuk mobil listrik dan teknologi otonom.',
          author: 'Fajar Nugroho',
          created_at: '16/06/2024',
          is_saved: false
        },
        {
          id: 7,
          title: 'Perkembangan Pariwisata Pasca Pandemi',
          body: 'Analisis tentang bagaimana industri pariwisata bangkit kembali setelah pandemi, dengan fokus pada destinasi populer dan strategi pemasaran.',
          author: 'Gita Lestari',
          created_at: '17/06/2024',
          is_saved: true
        }
      ]
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
