import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path: '/',
        component: () => import('../components/Client/Homepage/index.vue')
    },
    {
        path: '/gioi-thieu',
        component: () => import('../components/GioiThieu/index.vue')
    },
    //quan li nhan vien
    {
        path: '/admin/nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue')
    },
     //quan li san
     {
        path: '/admin/quan-li-san',
        component: () => import('../components/Admin/QuanLiSan/index.vue')
    },
    //chi tiet dat san
    {
        path: '/chi-tiet-dat-san',
        component: () => import('../components/Client/ChiTietDatSan/index.vue')
    },
    //chi tiet dat san2
    {
        path: '/chi-tiet-dat-san2',
        component: () => import('../components/Client/ChiTietDatSan2/index.vue')
    },
    //dang ki
    {
        path: '/admin/dang-ky',
        component: () => import('../components/Admin/DangKy/index.vue')
    },
    //dang nhap
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue')
    },
    //quen mat khau
    {
        path: '/admin/quen-mat-khau',
        component: () => import('../components/Admin/QuenMatKhau/index.vue')
    },
    //thong ke
    {
        path: '/admin/thong-ke',
        component: () => import('../components/Admin/ThongKe/index.vue')
    },
    //xac nhan dat san
    {
        path: '/xac-nhan-dat-san',
        component: () => import('../components/Client/XacNhanDatSan/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router