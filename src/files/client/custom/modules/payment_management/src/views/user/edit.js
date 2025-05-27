define('payment_management:views/user/edit', ['views/edit'], function (EditRecordView) {
    return EditRecordView.extend({
        template: 'payment_management:user/edit',
        layoutName: 'edit',

        setup: function () {
            Dep.prototype.setup.call(this);
            console.log('Custom User Edit View loaded');

            this.buttonList = [
                { name: 'save', label: 'Lưu', style: 'primary' },
                { name: 'cancel', label: 'Hủy', style: 'default' },
                { name: 'sua', label: 'Sửa', style: 'default' }
            ];

            this.dropdownItemList = [
                { name: 'customAction', label: 'Custom Action' }
            ];

            if (this.model) {
                this.listenTo(this.model, 'change:username', function (model) {
                    console.log('Username changed to: ' + model.get('username'));
                });
            }
            
            // Tải CSS trực tiếp
            this.loadCustomCSS();
        },
        
        // Phương thức tải CSS trực tiếp
        loadCustomCSS: function() {
            var cssUrl = this.getBasePath() + 'client/custom/modules/payment_management/res/css/custom.css?r=' + (new Date()).getTime();
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = cssUrl;
            document.head.appendChild(link);
            console.log('Loaded custom CSS: ' + cssUrl);
        },
        
        // Lấy đường dẫn gốc của ứng dụng
        getBasePath: function() {
            var basePath = '';
            if (window.location.pathname.indexOf('client') !== -1) {
                basePath = window.location.pathname.substring(0, window.location.pathname.indexOf('client'));
            } else {
                basePath = window.location.pathname.replace(/index\.php.*$/, '');
            }
            return window.location.origin + basePath;
        },

        afterRender: function () {
            Dep.prototype.afterRender.call(this);

            // Thêm class từ file CSS tùy chỉnh
            this.$el.find('.panel-heading').addClass('panel-heading-custom');
            this.$el.find('.form-group label').addClass('form-group-label-custom');
            this.$el.find('.custom-panel').addClass('custom-panel-styling');
            this.$el.find('table').addClass('table table-bordered table-hover table-striped');
        },

        data: function () {
            var data = Dep.prototype.data.call(this);
            data.middleView = this.getMiddleHtml();
            return data;
        },

        getMiddleHtml: function () {
            var html = `
                <div class="panels-container">

                    <div class="panel panel-default custom-panel">
                        <div class="panel-heading">
                            <h4 class="panel-title">Thông tin người dùng</h4>
                        </div>
                        <div class="panel-body">

                            <div class="row">
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Tên</label>
                                    <div class="field" data-name="name">
                                        <input type="text" class="form-control" name="name" value="${this.model.get('name') || ''}">
                                    </div>
                                </div>
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Email</label>
                                    <div class="field" data-name="emailAddress">
                                        <input type="email" class="form-control" name="emailAddress" value="${this.model.get('emailAddress') || ''}">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Giới tính</label>
                                    <div class="field" data-name="gender">
                                        <input type="text" class="form-control" name="gender" value="${this.model.get('gender') || ''}">
                                    </div>
                                </div>
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Đơn vị</label>
                                    <div class="field" data-name="department">
                                        <select class="form-control" name="department">
                                            <option value="">-- Chọn đơn vị --</option>
                                            <option value="IT" ${this.model.get('department') === 'IT' ? 'selected' : ''}>IT</option>
                                            <option value="HR" ${this.model.get('department') === 'HR' ? 'selected' : ''}>HR</option>
                                            <option value="Finance" ${this.model.get('department') === 'Finance' ? 'selected' : ''}>Finance</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Chi nhánh</label>
                                    <div class="field" data-name="branch">
                                        <input type="text" class="form-control" name="branch" value="${this.model.get('branch') || ''}">
                                    </div>
                                </div>
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Khu vực</label>
                                    <div class="field" data-name="region">
                                        <input type="text" class="form-control" name="region" value="${this.model.get('region') || ''}">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Vai trò</label>
                                    <div class="field" data-name="roles">
                                        <div class="checkbox"><label><input type="checkbox" name="roles[]" value="admin"> Admin</label></div>
                                        <div class="checkbox"><label><input type="checkbox" name="roles[]" value="user"> User</label></div>
                                    </div>
                                </div>
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Tạo lúc</label>
                                    <div class="field" data-name="createdAt">
                                        <input type="date" class="form-control" name="createdAt" value="${this.model.get('createdAt') ? this.formatDate(this.model.get('createdAt')) : ''}">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Lần truy cập gần nhất</label>
                                    <div class="field" data-name="lastAccess">
                                        <input type="date" class="form-control" name="lastAccess" value="${this.model.get('lastAccess') ? this.formatDate(this.model.get('lastAccess')) : ''}">
                                    </div>
                                </div>
                                <div class="cell form-group col-sm-6">
                                    <label class="control-label">Thông tin cập nhật</label>
                                    <div class="field" data-name="infoTab">
                                        <div class="btn-group" role="group">
                                            <button type="button" class="btn btn-default" data-action="showTab" data-tab="info">Xem thông tin</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>`;
            return html;
        },

        formatDate: function(dateString) {
            if (!dateString) return '';
            var date = new Date(dateString);
            var year = date.getFullYear();
            var month = (date.getMonth() + 1).toString().padStart(2, '0');
            var day = date.getDate().toString().padStart(2, '0');
            return year + '-' + month + '-' + day;
        },

        actionSave: function () {
            alert('Lưu thông tin người dùng được cập nhật');
        },

        actionCancel: function () {
            alert('Hủy thay đổi');
        },

        actionSua: function () {
            alert('Chỉnh sửa thông tin người dùng');
        },

        actionShowTab: function(data) {
            var tab = data.tab || 'info';
            alert('Hiển thị nội dung cập nhật của chức năng người dùng - Tab: ' + tab);
        },

        actionCustomButton: function () {
            alert('Custom button clicked');
        },

        actionCustomAction: function () {
            alert('Custom action from dropdown clicked');
        }
    });
});
