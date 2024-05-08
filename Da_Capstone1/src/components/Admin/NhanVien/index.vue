<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2">
                            <button class="btn btn-primary mb-3 mb-lg-0" data-bs-toggle="modal"
                                data-bs-target="#taoMoiNhanVienModal"><i class="bx bxs-plus-square"></i>Tạo Mới Nhân Viên
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" id="taoMoiNhanVienModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Tài Khoản Nhân Viên</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-3"><label for="">Mã Nhân Viên</label>
                                                <input type="text" class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3"><label for="">Ngày Sinh</label>
                                                <input type="date" class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3"><label for="">Chức Vụ</label>
                                                <select name="" class="form-control mt-2" id="">
                                                    <option value="1">Quản Lý</option>
                                                    <option value="2">Nhân Viên</option>
                                                </select>
                                            </div>
                                            <div class="mb-3"><label for="">Số Điện Thoại</label>
                                                <input type="text" class="form-control mt-2" name="" id="">
                                            </div>
                                            <div class="mb-3"><label for="">Password</label>
                                                <input type="text" class="form-control mt-2" name="" id="">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-3"><label for="">Họ Và Tên</label><input type="text"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Ngày Bắt Đầu</label><input type="date"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Email</label><input type="text"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Tình Trạng</label>
                                                <select name="" class="form-control mt-2" id="">
                                                    <option value="1"> Quản Lý</option>
                                                    <option value="2">Nhân Viên</option>
                                                </select>
                                            </div>
                                            <div class="mb-3"><label for="">Nhập Lại Mật Khẩu</label><input type="text"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button><button type="button"
                                        class="btn btn-primary">Thêm Mới</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Nhân Viên</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="align-middle">
                                    <th class="text-center">STT</th>
                                    <th class="text-center">Mã Nhân Viên</th>
                                    <th class="text-center">Họ Và Tên</th>
                                    <th class="text-center">Ngày Sinh</th>
                                    <th class="text-center">Chức Vụ</th>
                                    <th class="text-center">Ngày Bắt Đầu</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>1</td>
                                    <td class="text-center">26123</td>
                                    <td>Nguyễn Đức Tú </td>
                                    <td class="text-center">15-02-2002</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">20-05-2024</td>
                                    <td>nguuyenductu2002@gmail.com</td>
                                    <td class="text-center"><!--v-if--><button class="btn btn-primary">Hoạt
                                            Động</button></td>
                                    <td class="text-center d-flex justify-content-center"><button data-bs-toggle="modal"
                                            data-bs-target="#capnhapModal" class="btn btn-success btn-sm me-1">Cập
                                            Nhập</button><button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            class="btn btn-danger btn-sm px-4">Xóa</button></td>
                                </tr>
                                <tr class="align-middle">
                                    <td>1</td>
                                    <td class="text-center">26123</td>
                                    <td>Nguyễn Đức Tú </td>
                                    <td class="text-center">15-02-2002</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">20-05-2024</td>
                                    <td>nguuyenductu2002@gmail.com</td>
                                    <td class="text-center"><!--v-if--><button class="btn btn-primary">Hoạt
                                            Động</button></td>
                                    <td class="text-center d-flex justify-content-center"><button data-bs-toggle="modal"
                                            data-bs-target="#capnhapModal" class="btn btn-success btn-sm me-1">Cập
                                            Nhập</button><button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            class="btn btn-danger btn-sm  px-4">Xóa</button></td>
                                </tr>
                                <tr class="align-middle">
                                    <td>1</td>
                                    <td class="text-center">26123</td>
                                    <td>Nguyễn Đức Tú </td>
                                    <td class="text-center">15-02-2002</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">20-05-2024</td>
                                    <td>nguuyenductu2002@gmail.com</td>
                                    <td class="text-center"><!--v-if--><button class="btn btn-primary">Hoạt
                                            Động</button></td>
                                    <td class="text-center d-flex justify-content-center"><button data-bs-toggle="modal"
                                            data-bs-target="#capnhapModal" class="btn btn-success btn-sm me-1">Cập
                                            Nhập</button><button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            class="btn btn-danger btn-sm px-4">Xóa</button></td>
                                </tr>
                                <tr class="align-middle">
                                    <td>1</td>
                                    <td class="text-center">26123</td>
                                    <td>Nguyễn Đức Tú </td>
                                    <td class="text-center">15-02-2002</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">20-05-2024</td>
                                    <td>nguuyenductu2002@gmail.com</td>
                                    <td class="text-center"><!--v-if--><button class="btn btn-primary">Hoạt
                                            Động</button></td>
                                    <td class="text-center d-flex justify-content-center"><button data-bs-toggle="modal"
                                            data-bs-target="#capnhapModal" class="btn btn-success btn-sm me-1">Cập
                                            Nhập</button><button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            class="btn btn-danger btn-sm px-4">Xóa</button></td>
                                </tr>
                                <tr class="align-middle">
                                    <td>1</td>
                                    <td class="text-center">26123</td>
                                    <td>Nguyễn Đức Tú </td>
                                    <td class="text-center">15-02-2002</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">20-05-2024</td>
                                    <td>nguuyenductu2002@gmail.com</td>
                                    <td class="text-center"><!--v-if--><button class="btn btn-primary">Hoạt
                                            Động</button></td>
                                    <td class="text-center d-flex justify-content-center"><button data-bs-toggle="modal"
                                            data-bs-target="#capnhapModal" class="btn btn-success btn-sm me-1">Cập
                                            Nhập</button><button data-bs-toggle="modal" data-bs-target="#deleteModal"
                                            class="btn btn-danger btn-sm px-4">Xóa</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Nhân Viên</h1><button
                                        type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert"> Bạn thật sự có muốn xoá nhân viên này
                                        không? </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button><button type="button"
                                        class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận Xoá</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="capnhapModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Tài Khoản Nhân Viên
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-3"><label for="">Mã Nhân Viên</label><input type="text"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Ngày Sinh</label><input type="date"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Chức Vụ</label><select name=""
                                                    class="form-control mt-2" id="">
                                                    <option value="1">Quản Lý</option>
                                                    <option value="2">Nhân Viên</option>
                                                </select></div>
                                            <div class="mb-3"><label for="">Số Điện Thoại</label><input type="text"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Password</label><input type="text"
                                                    class="form-control mt-2" name="" id=""></div>

                                        </div>
                                        <div class="col-6">
                                            <div class="mb-3"><label for="">Họ Và Tên</label><input type="text"
                                                    class="form-control mt-2" name="" id=""></div>

                                            <div class="mb-3"><label for="">Ngày Bắt Đầu</label><input type="date"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Email</label><input type="text"
                                                    class="form-control mt-2" name="" id=""></div>
                                            <div class="mb-3"><label for="">Tình Trạng</label><select name=""
                                                    class="form-control mt-2" id="">
                                                    <option value="1">Quản Lý</option>
                                                    <option value="2">Nhân Viên</option>
                                                </select></div>
                                            <div class="mb-3"><label for="">Nhập Lại Mật Khẩu</label><input type="text"
                                                    class="form-control mt-2" name="" id="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button><button type="button"
                                        class="btn btn-primary">Thêm Mới</button></div>
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