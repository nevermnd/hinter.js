(function ($) {

    // Default plugin configuration
    var defaults = {
        // The message to be shown
        message: "",
        // Whether this is a success message
        isSuccess: true,
        // Default slideUp animation time
        slideUp: 250,
        // Time (ms) before the hint is removed
        delay: 5000,
        // Id for the hinter container
        id: "hinter",
        // The class to be added to the hint container
        class: "hinter"
    };

    $.fn.hinter = function (params) {

        var options = {},
            $hinter = $('<div></div>');

        /**
         * Init the plugin
         */
        this.init = function (config) {
            methods.config.apply(this, arguments);
            methods.show.apply(this);
            return this;
        };
        /**
         * Configure the plugin options
         */
        this.config = function (config) {
            options = $.extend({}, defaults, config || {});
            return this;
        };
        /**
         * Hinter message
         */
        this.message = function (params) {
            options.message = params || "";
            return this;
        };
        /**
         * Error hint
         */
        this.error = function () {
            options.isSuccess = false;
            return this;
        };
        /**
         * Success hint
         */
        this.success = function () {
            options.isSuccess = true;
            return this;
        };
        /**
         * Slideup timeout
         */
        this.slideUp = function (timeout) {
            options.slideUp = timeout;
            return this;
        };
        /**
         * Hinter timeout
         */
        this.delay = function (timeout) {
            options.timeout = timeout;
            return this;
        };
        /**
         * Hinter div ID
         */
        this.id = function (id) {
            options.id = id;
            return this;
        };
        /**
         * Classes for hinter div
         */
        this.class = function (params) {
            $hinter.addClass(params);
            return this;
        };
        /**
         * jQuery hint object
         */
        this.object = function () {
            return $hinter;
        };
        /**
         * Plugin options
         */
        this.options = function () {
            return options;
        }
        /**
         * Show hint
         */
        this.show = function () {
            $(this).prepend(
                $hinter
                    .addClass(options.isSuccess ? 'alert-success' : 'alert-danger')
                    .addClass(options.class)
                    .addClass('alert affix')
                    .attr('id', options.id)
                    .text(options.message)
                    .prepend('<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>')
            );
            $("#" + options.id).delay(options.delay).slideUp(options.slideUp, function () {
                // Remove object after the delay
                $(this).remove();
            });
            
            // Avoid loop
            return $(this).hinter().config(options);
        };

        // plugin initialization
        options = $.extend({}, defaults, params || {});

        // let's assume that if user provides a configuration on the initialization function,
        // he wants to configure and show the hinter right away
        if (params) return this.show();

        return this;
    };

})(jQuery);