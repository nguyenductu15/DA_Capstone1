<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-2 ">
                            <a href="ecommerce-add-new-products.html" class="btn btn-primary mb-3 mb-lg-0"><i
                                    class="bx bxs-plus-square"></i>Danh Mục Sân</a>
                        </div>
                        <div class="col-lg-3 ">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping"><i
                                        class="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" class="form-control" placeholder="Tìm kiếm sân" aria-label="Username"
                                    aria-describedby="addon-wrapping">
                            </div>
                        </div>
                        <div class="col-lg-2 ">
                            <select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Khu Vực</option>
                                <option value="1">Đà Nẵng</option>
                                <option value="2">Huế</option>
                                <option value="3">Nghệ An</option>
                            </select>
                        </div>
                        <div class="col-lg-2 ">
                            <select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Đánh giá</option>
                                <option value="1">Tốt</option>
                                <option value="2">Rất tốt</option>
                                <option value="3">Không hài lòng</option>
                            </select>
                        </div>
                        <div class="col-lg-2 ">
                            <select class="form-select form-select-sm" aria-label="Small select example">
                                <option selected>Mức giá</option>
                                <option value="1">350000</option>
                                <option value="2">400000</option>
                                <option value="3">500000</option>
                            </select>
                        </div>
                        <div class="col-lg-1 ">
                            <button class="btn btn-primary">Tìm sân</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="row mt-2  ">
        <div class="col product-grid">
            <div style="background-color:aqua; border-radius: 30px;" class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://media.bongda.com.vn/files/hai.phan/2017/05/01/er8-1705.jpg"
                            style="border-radius: 30px;" alt="..." class="card-img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title mt-3">Có đầy đủ các thể loại cho các bạn lựa chọn!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col product-grid">
            <div style="background-color:darkkhaki; border-radius: 30px;" class="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/202009/original/images2312040_19b.jpg"
                            style="border-radius: 30px;" alt="..." class="card-img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title mt-3">Đặt sân nhanh theo yêu cầu của bạn!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 product-grid">
        <div class="col  ">
            <div class="card m-3 border-4 border-danger " style="border-radius: 30px;">
                <img src="https://img.thegioithethao.vn/thumbs/san-bong-da/ha-noi/hoang-mai/hong-quang/san-bong-hong-quang-3_thumb_500.webp"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng Đa Phước</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Thanh Khê</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 10</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 350.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <p class="mb-0 ms-auto">4.2(182)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>


            </div>

        </div>
        <div class="col ">
            <div class="card m-3 border-4 border-danger " style="border-radius: 30px;">
                <img src="https://fpt123.net/uploads/images/san-co-nhan-tao/co-nhan-tao-11.jpg"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng Trương Vương</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Cẩm Lệ</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 7</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 500.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <p class="mb-0 ms-auto">4.5(190)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col ">
            <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                <img src="https://www.tapdoanconhantao.com/wp-content/uploads/2018/08/co-nhan-tao-san-bong.png"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng Sao</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Liên Chiểu</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 5</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 400.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-secondary"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <p class="mb-0 ms-auto">3.1(83)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col ">
            <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                <img src="https://images.toplist.vn/images/800px/san-bong-mini-chao-lua-896266.jpg"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng Nam Sao</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Liên Chiểu</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 2</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 250.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-secondary"></i>
                            <i class="bx bxs-star text-secondary"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <p class="mb-0 ms-auto">1.5(45)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col ">
            <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                <img src="https://co-nhan-tao.com/wp-content/uploads/2020/03/san-co-nhan-tao-1-1024x768.jpg"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng ĐH Bách Khoa</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Liên Chiểu</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 6</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 300.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            
                        </div>
                        <p class="mb-0 ms-auto">5.0(195)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                <img src="https://thegioiconhantao.com.vn/wp-content/uploads/2017/06/du-an-san-bong-tri-ton-an-giang2.png"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng Đa Phước 2</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Thanh Khê</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 5</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 350.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <p class="mb-0 ms-auto">4.2(182)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                <img src="https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-ca-sau-hoa-ca.jpg"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng Ông Bầu</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Hòa Xuân</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 8</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 450.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>                   
                            <i class="bx bxs-star text-secondary"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <p class="mb-0 ms-auto">3.4(104)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card m-3 border-4 border-danger" style="border-radius: 30px;">
                <img src="https://lh3.googleusercontent.com/p/AF1QipOlQCgeEo9oIBTNlK7wTMaSSVh7anvpS2sg0Sz7=s680-w680-h510"
                    class="card-img-top" style="border-radius: 30px;" alt="...">

                <div class="card-body">
                    <h6 class="card-title cursor-pointer">Sân bóng Tiểu La</h6>
                    <h7 class="card-title cursor-pointer">Khu Vực: Hải Châu</h7>
                    <h7 class="card-title cursor-pointer">
                        <p>Số sân: 10</p>
                    </h7>
                    <h5 class="card-title cursor-pointer mt-1">Giá : 550.000đ</h5>

                    <div class="d-flex align-items-center mt-3 fs-6">
                        <div class="cursor-pointer">
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-warning"></i>
                            <i class="bx bxs-star text-secondary"></i>
                        </div>
                        <p class="mb-0 ms-auto">4.7(220)</p>
                    </div>
                    <div class=" mt-2 text-center ">
                        <button class=" btn btn-primary " style="border-radius: 20px;">Đặt Sân</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col text-center mt-4">
            <div class="btn-group" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary">2</button>
                <button type="button" class="btn btn-primary">3</button>
                <button type="button" class="btn btn-primary">4</button>
                <button type="button" class="btn btn-primary">5</button>
                <button type="button" class="btn btn-primary">6</button>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>