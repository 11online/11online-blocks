(function($) {

    $(document).ready( function() {
        handleAccordion();
        activateButton();
    });

    function handleAccordion() {
        var $divText = $('.content-eleven-online');
        var content = $divText.html();
        $divText.html('<div class="expanding-panel-content-container" style="height:0px;overflow:hidden;"><div class="expanding-panel-content">'
         + content + '</div></div>');  
    }

    function activateButton() {
        $('.toggle-postcard-eleven-online').on('click', function() {
            var currContainerHeight = 0;
            var currImgHeight = 150;

            var $selectedPanel = $('.content-eleven-online');
            var $selectedContent = $selectedPanel.find('.expanding-panel-content-container');
            $(this).toggleClass('expanded-btn');
            var $imgContainer = $('.img-background-wrapper-postcard-eleven-online');

            if ($(this).hasClass('expanded-btn')) {
                currContainerHeight = $selectedPanel.find('.expanding-panel-content').outerHeight(true);
                currImgHeight = 400;
                $(this).html('&#x2296;');

            } else {
                currContainerHeight = 0;
                currImgHeight = 150;
                $(this).html('&#x2295;');
            }

            $imgContainer.animate({'height': currImgHeight + 'px'}, 500 );

            $selectedContent.animate({'height': currContainerHeight + 'px'}, 500, function() {
                if ( currContainerHeight !== 0) {
                    $(this).css('height', '');
                }
            });
        });
    }  
} (jQuery));