import { getPost } from '@/composables/photoApi'
import { getVideo } from '@/composables/videoApi'
import type { DataItem } from '@/types/photoType'
import type { DataItemVideo } from '@/types/videoType'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useStore = defineStore('store', () => {
  const photo = ref<DataItem[]>([])
  const video = ref<DataItemVideo[]>()
  const listPosts = ref<DataItem[]>()
  const currentPage = ref<any>(1)
  const totalPage = ref<any>(0)


  async function getVideoPost() {
    const response = await getVideo()
    if (response.status === 200 && response.data && response.data.data) {
      video.value = response.data.data as DataItemVideo[]
    }
  }


  async function getPhotoPost(category: string, page: number) {
    const response = await getPost(category, page)
    listPosts.value = (await response.data) as any
    if (response.status === 200) {
      listPosts.value = response.data?.data as DataItem[]
      currentPage.value = response.data?.meta.pagination.page
      totalPage.value = response.data?.meta.pagination.pageCount
      console.log(response.data)
    }
  }
  // function filterList() {
  //   listPosts.value = listPosts.value?.filter((item: any) => {
  //     item.attributes.photo_subs.data.title > item.attributes.photo_subs.data.title
  //   })
  // }
  return {
    photo,
    getVideoPost,
    video,
    listPosts,
    // filterList,
    getPhotoPost,
    currentPage,
    totalPage
  }
})
