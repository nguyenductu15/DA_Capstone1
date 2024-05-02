<template>
    <div class="wrapper">
        <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                    <div class="col mx-auto">
                        <div class="mb-4 text-center">
                            <img src="assets/images/logo-img.png" width="180" alt="">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <div class="text-center">
                                        <h3 class="">Đăng Nhập</h3>
                                        <p>Bạn chưa có tài khoản? <a href="authentication-signup.html">Đăng Ký </a>
                                        </p>
                                    </div>
                                    <div class="d-grid">
                                        <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span
                                                class="d-flex justify-content-center align-items-center">
                                                <img class="me-2"
                                                    src="https://th.bing.com/th/id/OIP.5bLCafLZa7Oqx8rx0jirgAHaHa?rs=1&pid=ImgDetMain"
                                                    width="16" alt="Image Description">
                                                <span>Đăng nhập với Google</span>
                                            </span>
                                        </a> <a href="javascript:;" class="btn btn-facebook"><i
                                                class="bx bxl-facebook"></i>Đăng nhập với Facebook</a>
                                    </div>
                                    <div class="login-separater text-center mb-3"> <span style="font-size: 15px;">Hoặc đăng nhập với email</span>
                                        <hr>
                                    </div>
                                    <div class="form-body">
                                        <form class="row g-3">
                                            <div class="col-12">
                                                <label for="inputEmailAddress" class="form-label">Địa chỉ Email</label>
                                                <input type="email" class="form-control" id="inputEmailAddress"
                                                    placeholder="Nhập địa chỉ email">
                                            </div>
                                            <div class="col-12">
                                                <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                <div class="input-group" id="show_hide_password">
                                                    <input type="password" class="form-control border-end-0"
                                                        id="inputChoosePassword" value="" placeholder="Nhập mật khẩu">
                                                    <a href="javascript:;" class="input-group-text bg-transparent"><i
                                                            class="bx bx-hide"></i></a>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="flexSwitchCheckChecked" checked="">
                                                    <label class="form-check-label" for="flexSwitchCheckChecked">Lưu lại
                                                        lần sau</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-end"> <a
                                                    href="authentication-forgot-password.html">Quên Mật Khẩu</a>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button type="submit" class="btn btn-primary"><i
                                                            class="bx bxs-lock-open"></i>Đăng Nhập</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>