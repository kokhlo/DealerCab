
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/chat',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Chat.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth.vue') }
    ]
  },
  {
    path: '/registration',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/RegistrationForm.vue') }
    ]
  },
  {
    path: '/orders',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Orders.vue') }
    ]
  },
  {
    path: '/newOrder',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NewOrder.vue') }
    ]
  },
  {
    path: '/measurements',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MeasurementsList.vue') }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
