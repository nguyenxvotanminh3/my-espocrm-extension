<div class="page-header custom-header">
    <h3>{{translate 'Create User' category='labels' scope='User'}}</h3>
</div>

<div class="record edit-container">
    <div class="row">
        <div class="col-sm-6">
            <div class="middle">
                {{#if middleView}}
                    {{{middleView}}}
                {{else}}
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">Thông tin người dùng</h4>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Tên</label>
                                    <div class="field" data-name="name">
                                        <input type="text" class="form-control" name="name">
                                    </div>
                                </div>
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Email</label>
                                    <div class="field" data-name="emailAddress">
                                        <input type="email" class="form-control" name="emailAddress">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {{/if}}
            </div>
            <div class="button-container">
                <button class="btn btn-primary" data-action="save">Lưu</button>
                <button class="btn btn-default" data-action="cancel">Hủy</button>
                <button class="btn btn-default" data-action="sua">Sửa</button>
                
                {{#if dropdownItemList.length}}
                    <div class="btn-group">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            Thao tác <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            {{#each dropdownItemList}}
                                <li><a href="javascript:" data-action="{{name}}">{{label}}</a></li>
                            {{/each}}
                        </ul>
                    </div>
                {{/if}}
            </div>
        </div>
        <div class="col-sm-6">
            <div class="custom-panel">
                <h4>Hướng dẫn nhập liệu</h4>
                <p>
                    Vui lòng nhập đầy đủ thông tin người dùng theo bảng dưới đây:
                </p>
                <table class="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Trường thông tin</th>
                            <th>Định dạng</th>
                            <th>Bắt buộc</th>
                            <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Tên</td>
                            <td>Text</td>
                            <td>Có</td>
                            <td>Tên đầy đủ của người dùng</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Email</td>
                            <td>Text</td>
                            <td>Có</td>
                            <td>Lấy thông tin từ hệ thống AD</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Giới tính</td>
                            <td>Text</td>
                            <td>Có</td>
                            <td>Nam/Nữ</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Đơn vị</td>
                            <td>Dropdown</td>
                            <td>Có</td>
                            <td>Chọn phòng ban/đơn vị</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>Chi nhánh</td>
                            <td>Text</td>
                            <td>Có</td>
                            <td>Chi nhánh làm việc</td>
                        </tr>
                    </tbody>
                </table>
                <div class="alert alert-info">
                    <span class="fas fa-info-circle"></span>
                    Người dùng mới sẽ nhận được email kích hoạt tài khoản.
                </div>
            </div>
        </div>
    </div>
</div> 