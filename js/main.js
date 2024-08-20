jQuery(function () {
    jQuery('.reason-selected').on('click', function () {
        jQuery('.reason-hidden').slideToggle();
        jQuery(this).toggleClass('is-open');
    });
    return false
});

jQuery(function () {

    jQuery(window).on('load scroll', function () {
        
        const lastOfferTop = jQuery('.last-offer').offset().top;
        let scroll = jQuery(this).scrollTop();
        let windowHeight = jQuery(window).height();

        if (scroll > lastOfferTop - windowHeight) {
            jQuery('.fixed-btn').fadeOut(400);
        } else {
            jQuery('.fixed-btn').fadeIn(400);
        }
        return false
    });
});

// jQuery(document).ready(function () {
//     // videoタグのclassを指定して再生速度を2.5倍にする
//     jQuery('.video-setting').on('loadedmetadata', function () {
//         this.playbackRate = 5.5;
//     });
// });