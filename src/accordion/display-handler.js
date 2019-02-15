(function($) {
    $(document).ready( function() {
        handleAccordion();
    });

    function handleAccordion() {  
        $('.accordion-content-eleven-online').each( function() {
            var content = $(this).html();
            $(this).html('<div class="expanding-panel-content-container" style="height:0px;overflow:hidden;"><div class="expanding-panel-content">'
                + content + '</div></div>');        
            $currAccordion = $(this).closest('.accordion-eleven-online');
            activateButton($currAccordion );
        }); 
    }

    function activateButton( $obj ) {
        var $currBtn = $obj.find('button');
        var currBtnID = $currBtn.attr('id');
        $currBtn.on('click', function() {
            var currContainerHeight = 0;

            var $selectedPanel = $obj.find('.accordion-content-eleven-online');
            var $selectedContent = $selectedPanel.find('.expanding-panel-content-container');
            $(this).toggleClass( 'expanded-btn' + '-' + currBtnID );

            if ($(this).hasClass( 'expanded-btn' + '-' + currBtnID )) {
                currContainerHeight = $selectedPanel.find('.expanding-panel-content').outerHeight(true);
                $(this).html('&#x2296;');
            } else {
                currContainerHeight = 0;
                $(this).html('&#x2295;');
            }

            $selectedContent.animate({'height': currContainerHeight + 'px'}, 500, function() {
                if ( currContainerHeight !== 0) {
                    $(this).css('height', '');
                }
            });
        });
    }  
} (jQuery));