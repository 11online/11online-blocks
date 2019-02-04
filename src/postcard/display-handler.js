(function($) {
    $(document).ready( function() {
        handleAccordion();
    });

    function handleAccordion() {  
        $('.content-eleven-online').each( function() {
            var content = $(this).html();
            $(this).html('<div class="expanding-panel-content-container" style="height:0px;overflow:hidden;"><div class="expanding-panel-content">'
            + content + '</div></div>');
            $currPostcard = $(this).closest('.postcard-eleven-online');
            activateButton( $currPostcard );
        }); 
    }

    function activateButton( $obj ) {
        var $currBtn = $obj.find('button');
        var currBtnID = $currBtn.attr('id');

        $currBtn.on('click', function() {
            var currContainerHeight = 0;
            var currImgHeight = 150;

            var $selectedPanel = $obj.find('.content-eleven-online');
            var $selectedContent = $selectedPanel.find('.expanding-panel-content-container');
            $(this).toggleClass( 'expanded-btn' + '-' + currBtnID );
            var $imgContainer = $obj.find('.img-background-wrapper-postcard-eleven-online');

            if ($(this).hasClass( 'expanded-btn' + '-' + currBtnID )) {
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