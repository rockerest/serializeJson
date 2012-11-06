// We"re extending jQuery"s fn namespace to serialize a form to JSON
(function($) {
    "use strict";
    $.fn.serializeJson = function() {

       var o = {};
       var a = this.serializeArray();
       $.each(a, function() {
           if (o[this.name] !== undefined) {
               if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
               }
               o[this.name].push(this.value || "");
           } else {
               o[this.name] = this.value || "";
           }
       });
       return o;
    };
})(jQuery);
