$(document).ready(function() {
    $('[data-toggle="popover"]').popover({
        html: true,
        placement: 'top',
        trigger: 'focus',
        content: function() {
            return '<p>' + $(this).data('deskripsi') + '</p>' +
                '<p><a>' + $(this).data('link') + '</a></p>' +
                '<img src="' + $(this).data('img') + '" />'
        },
        template: '<div class="popover">' +
            '<div class="arrow"></div>' +
            '<i class="close fa fa-times" aria-hidden="true"></i>' +
            '<h3 class="popover-title"></h3>' +
            '<div class="popover-content"></div>' +
            '</div>'
    });
});

 // placement: function(context, source) {
 //            var position = $(source).position();

 //            if (position.left > 515) {
 //                return "left";
 //            }

 //            if (position.left < 515) {
 //                return "right";
 //            }

 //            if (position.top < 110) {
 //                return "bottom";
 //            }

 //            return "top";
 //        },