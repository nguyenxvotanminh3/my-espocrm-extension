<?php
class AfterInstall
{
    public function run($container)
    {
        $config = $container->get('config');
        $tabList = $config->get('tabList');
        if (!in_array('HelloWorld', $tabList)) {
            $tabList[] = 'HelloWorld';
            $config->set('tabList', $tabList);
        }
        $config->save();
    }
}
