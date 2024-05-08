<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100 ">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                
                <li class="nav-item">
                    <router-link to="/">
                        <a class="nav-link" href="/">
                            <div class="parent-icon">      
                            </div>
                            <div class="menu-title px-3 " style="font-size: 20px; "><h5 style="color: orangered;">TRANG CHỦ</h5></div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="gioi-thieu">
                        <a class="nav-link" href="gioi-thieu">
                            <div class="parent-icon">
                            </div>
                            <div class="menu-title px-3" style="font-size: 20px; "><h5 style="color: orangered;">GIỚI THIỆU</h5></div>

                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="">
                        <a class="nav-link" href="">
                            <div class="parent-icon">
                            </div>
                            <div class="menu-title px-3" style="font-size: 20px; "><h5 style="color: orangered;">SỰ KIỆN</h5></div>

                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="">
                        <a class="nav-link" href="">
                            <div class="parent-icon">
                            </div>
                            <div class="menu-title px-3" style="font-size: 20px; "><h5 style="color: orangered;">DỊCH VỤ</h5></div>

                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="">
                        <a class="nav-link" href="">
                            <div class="parent-icon">
                            </div>
                            <div class="menu-title px-3 " style="font-size: 20px; "><h5 style="color: orangered;">LIÊN HỆ</h5></div>

                        </a>
                    </router-link>
                </li>
              
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>