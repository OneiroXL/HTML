export default [
  {
    path: '/AddVideo',
    name: 'AddVideo',
    component: () => import(
      '../views/video/addVideo.vue'
    )
  },
  {
    path: '/ListVideo',
    name: 'ListVideo',
    component: () => import(
      '../views/video/listVideo.vue'
    )
  },
  {
    path: '/PlayVideo',
    name: 'PlayVideo',
    component: () => import(
      '../views/video/playVideo.vue'
    )
  }
]
