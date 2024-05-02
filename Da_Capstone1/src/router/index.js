import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/Homepage/index.vue')
    },
    {
        path: '/chi-tiet-dat-san',
        component: () => import('../components/ChiTietDatSan/index.vue')
    },
    {
        path: '/dang-ky',
        component: () => import('../components/DangKy/index.vue')
    },
    {
        path: '/dang-nhap',
        component: () => import('../components/DangNhap/index.vue')
    },
    {
        path: '/quen-mat-khau',
        component: () => import('../components/QuenMatKhau/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router