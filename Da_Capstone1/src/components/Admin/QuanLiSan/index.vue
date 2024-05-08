<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-xl-2"><button class="btn btn-primary mb-3 mb-lg-0"
                                data-bs-toggle="modal" data-bs-target="#taoMoiSanModal"><i
                                    class="bx bxs-plus-square"></i>Tạo Mới Sân </button></div>
                    </div>
                    <div class="modal fade" id="taoMoiSanModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo Mới Sân Bóng</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2"><label>Tên Sân</label><input type="text"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Địa Chỉ</label><input type="text"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Số Sân Kinh Doanh</label><input type="text"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Giá Mặc Định</label><input type="number"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Tình Trạng</label><select class="form-control">
                                            <option value="1">Đang Hoạt Động</option>
                                            <option value="0">Tạm Dừng</option>
                                        </select></div>
                                    <div class="mb-2"><label>Tiện Ích Khác</label><textarea class="form-control"
                                            cols="30" rows="5"></textarea></div>
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
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="mt-2">Danh Sách Sân Bóng</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr class="align-middle">
                                    <th class="text-center">STT</th>
                                    <th class="text-center">Tên Sân</th>
                                    <th class="text-center">Địa Chỉ</th>
                                    <th class="text-center">Số Sân Kinh Doanh</th>
                                    <th class="text-center">Giá Mặc Định</th>
                                    <th class="text-center">Tình Trạng</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td class="text-center ">1</td>
                                    <td class="text-center ">Sân bóng Trương Vương</td>
                                    <td class="text-center ">Thanh Khê</td>
                                    <td class="text-center">7</td>
                                    <td class="text-center">500000</td>
                                    <td class="text-center"><button class="btn btn-primary">Hoạt Động</button>
                                    </td>
                                    <td class="text-center d-flex justify-content-center"><button data-bs-toggle="modal"
                                            data-bs-target="#updateModal" class="btn btn-success btn-sm me-1">Cập Nhập</button>
                                            <button data-bs-toggle="modal" data-bs-target="#deleteModal" class="btn btn-danger btn-sm px-4">Xóa</button>
                                    </td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xoá Sân Bóng</h1><button
                                        type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="alert alert-danger" role="alert"> Bạn thật sự có muốn xoá sân bóng này
                                        không? </div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button><button type="button"
                                        class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận Xoá</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Sân Bóng</h1><button
                                        type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-2"><label>Tên Sân</label><input type="text"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Địa Chỉ</label><input type="text"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Số Sân Kinh Doanh</label><input type="text"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Giá Mặc Định</label><input type="number"
                                            class="form-control mt-2"></div>
                                    <div class="mb-2"><label>Tình Trạng</label><select class="form-control">
                                            <option value="1">Đang Hoạt Động</option>
                                            <option value="0">Tạm Dừng</option>
                                        </select></div>
                                    <div class="mb-2"><label>Tiện Ích Khác</label><textarea class="form-control"
                                            cols="30" rows="5"></textarea></div>
                                </div>
                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button><button type="button" class="btn btn-info"
                                        data-bs-dismiss="modal">Xác Nhận Cập Nhật</button></div>
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