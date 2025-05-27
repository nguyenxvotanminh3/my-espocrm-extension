define('payment_management:views/user/edit', ['views/edit'], function (Dep) {
    return Dep.extend({
        template: 'payment_management:user/edit',
        
        // Ensure we're using the edit layouts properly
        layoutName: 'edit',
        
        setup: function () {
            // Call parent setup method
            Dep.prototype.setup.call(this);
            
            console.log('Custom User Edit View loaded');
            
            // Add custom buttons
            this.buttonList = [
                {
                    name: 'save',
                    label: 'Lưu',
                    style: 'primary'
                },
                {
                    name: 'cancel',
                    label: 'Hủy',
                    style: 'default'
                },
                {
                    name: 'sua',
                    label: 'Sửa',
                    style: 'default'
                }
            ];
            
            this.dropdownItemList = [
                {
                    name: 'customAction',
                    label: 'Custom Action'
                }
            ];
            
            // Make the model works
            if (this.model) {
                this.listenTo(this.model, 'change:username', function (model) {
                    console.log('Username changed to: ' + model.get('username'));
                });
            }
        },
        
        afterRender: function () {
            Dep.prototype.afterRender.call(this);
            
            // Make sure all styles are applied
            this.$el.find('.panel-default').addClass('panel-default');
            this.$el.find('.panel-heading').addClass('panel-heading');
            this.$el.find('.panel-title').addClass('panel-title');
            this.$el.find('.panel-body').addClass('panel-body');
            this.$el.find('.form-group').addClass('form-group');
            this.$el.find('.form-control').addClass('form-control');
            
            // Add direct styles to elements that might not be getting CSS
            this.$el.find('.panel-heading').css({
                'background-color': '#f8fafc',
                'border-bottom': '2px solid #e2e8f0',
                'padding': '10px 15px'
            });
            
            this.$el.find('.form-group label').css({
                'font-weight': '600',
                'color': '#4a5568'
            });
            
            this.$el.find('.custom-panel').css({
                'background-color': '#fff',
                'border': '1px solid #e6e6e6',
                'border-radius': '4px',
                'padding': '15px',
                'margin-top': '20px'
            });
            
            // Apply table styles
            this.$el.find('table').addClass('table table-bordered table-hover table-striped');
        },
        
        // Override data method to ensure template gets all needed data
        data: function () {
            var data = Dep.prototype.data.call(this);
            
            // Provide middleView directly for the template
            data.middleView = this.getMiddleHtml();
            
            return data;
        },
        
        // Create the HTML directly for middleView
        getMiddleHtml: function () {
            var html = '<div class="panels-container">';
            
            html += '<div class="panel panel-default">';
            html += '<div class="panel-heading"><h4 class="panel-title">Thông tin người dùng</h4></div>';
            html += '<div class="panel-body">';
            
            // Tên field
            html += '<div class="row">';
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Tên</label>';
            html += '<div class="field" data-name="name">';
            html += '<input type="text" class="form-control" name="name" value="' + (this.model.get('name') || '') + '">';
            html += '</div></div>';
            
            // Email field
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Email</label>';
            html += '<div class="field" data-name="emailAddress">';
            html += '<input type="email" class="form-control" name="emailAddress" value="' + (this.model.get('emailAddress') || '') + '">';
            html += '</div></div></div>';
            
            // Giới tính field
            html += '<div class="row">';
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Giới tính</label>';
            html += '<div class="field" data-name="gender">';
            html += '<input type="text" class="form-control" name="gender" value="' + (this.model.get('gender') || '') + '">';
            html += '</div></div>';
            
            // Đơn vị field (dropdown list)
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Đơn vị</label>';
            html += '<div class="field" data-name="department">';
            html += '<select class="form-control" name="department">';
            html += '<option value="">-- Chọn đơn vị --</option>';
            html += '<option value="IT" ' + (this.model.get('department') === 'IT' ? 'selected' : '') + '>IT</option>';
            html += '<option value="HR" ' + (this.model.get('department') === 'HR' ? 'selected' : '') + '>HR</option>';
            html += '<option value="Finance" ' + (this.model.get('department') === 'Finance' ? 'selected' : '') + '>Finance</option>';
            html += '</select>';
            html += '</div></div></div>';
            
            // Chi nhánh field
            html += '<div class="row">';
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Chi nhánh</label>';
            html += '<div class="field" data-name="branch">';
            html += '<input type="text" class="form-control" name="branch" value="' + (this.model.get('branch') || '') + '">';
            html += '</div></div>';
            
            // Khu vực field
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Khu vực</label>';
            html += '<div class="field" data-name="region">';
            html += '<input type="text" class="form-control" name="region" value="' + (this.model.get('region') || '') + '">';
            html += '</div></div></div>';
            
            // Vai trò field (checkbox)
            html += '<div class="row">';
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Vai trò</label>';
            html += '<div class="field" data-name="roles">';
            html += '<div class="checkbox"><label><input type="checkbox" name="roles[]" value="admin"> Admin</label></div>';
            html += '<div class="checkbox"><label><input type="checkbox" name="roles[]" value="user"> User</label></div>';
            html += '</div></div>';
            
            // Tạo lúc field (date)
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Tạo lúc</label>';
            html += '<div class="field" data-name="createdAt">';
            html += '<input type="date" class="form-control" name="createdAt" value="' + (this.model.get('createdAt') ? this.formatDate(this.model.get('createdAt')) : '') + '">';
            html += '</div></div></div>';
            
            // Lần truy cập lần cuối field (date)
            html += '<div class="row">';
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Lần truy cập gần nhất</label>';
            html += '<div class="field" data-name="lastAccess">';
            html += '<input type="date" class="form-control" name="lastAccess" value="' + (this.model.get('lastAccess') ? this.formatDate(this.model.get('lastAccess')) : '') + '">';
            html += '</div></div>';
            
            // Tab - Thông tin cập nhật
            html += '<div class="cell form-group col-sm-6">';
            html += '<label class="control-label">Thông tin cập nhật</label>';
            html += '<div class="field" data-name="infoTab">';
            html += '<div class="btn-group" role="group">';
            html += '<button type="button" class="btn btn-default" data-action="showTab" data-tab="info">Xem thông tin</button>';
            html += '</div>';
            html += '</div></div></div>';
            
            html += '</div></div>'; // close panel-body and panel
            
            html += '</div>'; // close panels-container
            
            return html;
        },
        
        // Helper function to format date for input
        formatDate: function(dateString) {
            if (!dateString) return '';
            var date = new Date(dateString);
            var year = date.getFullYear();
            var month = (date.getMonth() + 1).toString().padStart(2, '0');
            var day = date.getDate().toString().padStart(2, '0');
            return year + '-' + month + '-' + day;
        },
        
        // Handle button actions
        actionSave: function () {
            alert('Lưu thông tin người dùng được cập nhật');
            // You can implement actual save logic here
        },
        
        actionCancel: function () {
            alert('Hủy thay đổi');
            // You can implement actual cancel logic here
        },
        
        actionSua: function () {
            alert('Chỉnh sửa thông tin người dùng');
            // You can implement actual edit logic here
        },
        
        // Show tab with user information
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