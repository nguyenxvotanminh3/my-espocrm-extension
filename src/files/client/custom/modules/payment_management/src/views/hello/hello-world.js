define('payment_management:views/hello/hello-world', ['view'], function (Dep) {
    return Dep.extend({
        template: 'payment_management:hello/hello-world',
        setup: function () {
            this.header = 'Hello World!';
        }
    });
}); 