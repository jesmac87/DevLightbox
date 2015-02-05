//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

$(document).ready(function () {

    var $overlay = $('<div id="overlay"></div>');
    var $img = $('<img>');
    var $caption = $('<p></p>');
    
    $('body').append($overlay);
    $overlay.append($img);
    $overlay.append($caption);
    
    //Shows overlay when user clicks on image.
    $('#imageGallery a').on('click', function (event) {
        event.preventDefault();
        
        //get the image href attribute and set to variable
        var anchorHref = $(this).attr('href');
        
        //set the href attribute variable to img src
        $img.attr('src', anchorHref);
        
        //get the alt attribute from the image user clicks
        var altImageText = $(this).children().attr('alt');
        
        //set the caption text to the alt attribute
        $caption.text(altImageText);

        $overlay.show();
        
    });
    
    //Hides overlay when user clicks on it.
    $overlay.on('click', function () {
        $overlay.hide();
        
    });

});

