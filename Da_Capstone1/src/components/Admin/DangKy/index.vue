<template>
    <div class="wrapper">
        <div class="d-flex align-items-center justify-content-center my-5 my-lg-0">
            <div class="container">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                    <div class="col mx-auto">
                        <div class="my-4 text-center">
                            <img src="assets/images/logo-img.png" width="180" alt="">
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="border p-4 rounded">
                                    <div class="text-center">
                                        <h3 class="">Đăng Ký Tài Khoản</h3>
                                        <p>Bạn đã có tài khoản? <a href="dang-nhap">Đăng Nhập </a> </p>
                                    </div>
                                    <div class="d-grid">
                                        <a class="btn my-4 shadow-sm btn-white" href="javascript:;"> <span
                                                class="d-flex justify-content-center align-items-center">
                                                <img class="me-2"
                                                    src="https://th.bing.com/th/id/OIP.5bLCafLZa7Oqx8rx0jirgAHaHa?rs=1&pid=ImgDetMain"
                                                    width="16" alt="Image Description">
                                                <span>Đăng ký với Google</span>
                                            </span>
                                        </a> <a href="javascript:;" class="btn btn-facebook">
                                            <i class="bx bxl-facebook"></i>Đăng ký với Facebook</a>
                                    </div>
                                    <div class="login-separater text-center mb-4"> <span style="font-size: 15px;">Hoặc
                                            đăng ký với email</span>
                                        <hr>
                                    </div>
                                    <div class="form-body">
                                        <form class="row g-3">
                                            <div class="col-12">
                                                <label for="inputFirstName" class="form-label">Họ và Tên</label>
                                                <input type="text" class="form-control" id="inputtName"
                                                    placeholder="Nhập họ và tên">
                                            </div>
                                            <div class="col-12">
                                                <label for="inputEmailAddress" class="form-label">Địa chỉ Email</label>
                                                <input type="email" class="form-control" id="inputEmailAddress"
                                                    placeholder="Nhâp địa chi email">
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
                                            <div class="col-12">
                                                <label class="form-label">Địa Chỉ</label>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="inputSelectCountry" class="form-label">Tỉnh/Thành
                                                    Phố</label>
                                                <select class="form-select" id="inputSelectCountry"
                                                    aria-label="Default select example">
                                                    <option selected="">Đà Nẵng</option>
                                                    <option value="1">Quảng Nam</option>
                                                    <option value="2">Huế</option>
                                                    <option value="3">Hội An</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="inputSelectCountry" class="form-label">Quận/Huyện</label>
                                                <select class="form-select" id="inputSelectCountry"
                                                    aria-label="Default select example">
                                                    <option selected="">Quận Hải Châu</option>
                                                    <option value="1">Quận Thanh Khê</option>
                                                    <option value="2">Huyện Hòa Vang</option>
                                                    <option value="3">Huyện Duy Xuyên</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="inputSelectCountry" class="form-label">Phường/Xã</label>
                                                <select class="form-select" id="inputSelectCountry"
                                                    aria-label="Default select example">
                                                    <option selected="">Phường Thạch Gián</option>
                                                    <option value="1">Phường Thuận Phước</option>
                                                    <option value="2">Xã Hòa Phước</option>
                                                    <option value="3">Phường Khuê Trung</option>
                                                </select>
                                            </div>
                                            <div class="col-sm-6">
                                                <label for="inputSelectCountry" class="form-label">Số nhà, Ngõ
                                                    đường</label>
                                                <select class="form-select" id="inputSelectCountry"
                                                    aria-label="Default select example">
                                                    <option selected="">200</option>
                                                    <option value="1">100</option>
                                                    <option value="2">Kiệt 80/2</option>
                                                    <option value="3">250</option>
                                                </select>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox"
                                                        id="flexSwitchCheckChecked">
                                                    <label class="form-check-label" for="flexSwitchCheckChecked">Tôi
                                                        đồng ý với các điều khoản</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button type="submit" class="btn btn-primary"><i
                                                            class="bx bx-user"></i>Đăng Ký</button>
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