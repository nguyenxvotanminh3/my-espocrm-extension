<?php

class AfterInstallScript
{
    public function run($container)
    {
        $config = $container->get('config');
        
        // Xóa cache
        $this->clearCache($container);
        
        // Đăng ký stylesheet cho module
        $this->registerStylesheet($config);
        
        return true;
    }
    
    protected function clearCache($container)
    {
        $container->get('dataManager')->clearCache();
    }
    
    protected function registerStylesheet($config)
    {
        $customStylesheets = $config->get('customStylesheets', []);
        
        // Thêm stylesheet nếu chưa có
        if (!in_array('custom/modules/payment_management/css/custom.css', $customStylesheets)) {
            $customStylesheets[] = 'custom/modules/payment_management/css/custom.css';
            $config->set('customStylesheets', $customStylesheets);
            $config->save();
        }
    }
} 