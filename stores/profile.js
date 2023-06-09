import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id: '',
    name: '',
    // image: '',
   
  }),
  actions: {
    async getProfile(id) {
      this.resetUser()
      let res = await $axios.get(`/api/profiles/${id}`)
      this.$state.id = res.data.user[0].id
      this.$state.name = res.data.user[0].name
    //   this.$state.image = res.data.user[0].image
    },
    resetUser() {      
        this.$state.id = ''
        this.$state.name = ''
        this.$state.bio = ''
        this.$state.image = ''
        this.$state.posts = ''
      }
  },
  persist: true,
})