(function($) {

    $(document).ready( function() {
        handleAccordion();
        activateButton();
    });

    function handleAccordion() {
        var $divText = $('.content-eleven-online');
        var content = $divText.html();
        $divText.html('<div class="expanding-panel-content-container" style="height:0px;"><div class="expanding-panel-content"'
         + content + '</div></div>');  
    }

    function activateButton() {
        $('.toggle-postcard-eleven-online').on('click', function() {
            var currContainerHeight = 0;
            var currImgHeight = 150;

            var $selectedPanel = $('.content-eleven-online').toggleClass('expanded-panel');
            var $selectedContent = $selectedPanel.find('.expanding-panel-content-container');
            
            $(this).toggleClass('expanded-btn');
            var $imgContainer = $('.img-background-wrapper-postcard-eleven-online');

            if ($(this).hasClass('expanded-btn')) {
                currContainerHeight = $('.content-eleven-online').outerHeight(true);
                currImgHeight = 400;
            } else {
                currContainerHeight = 0;
                currImgHeight = 150;
            }
            $textContainer.animate({'height': currContainerHeight + 'px'}, 2000, function() {
                if ( currContainerHeight != 0) {
                    $(this).removeAttr('style');
                }
            });

            // $imgContainer.animate({'height': currImgHeight + 'px'}, 1000);
        });

    }  
} (jQuery));