/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* This function will
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */
    var src = previewPic.getAttribute("src"); //get the source attribute and store it to variable src
    var alt = previewPic.getAttribute("alt"); //get the alt attribute and store it to variable alt
    document.getElementById('image').style.backgroundImage = "url('" + src + "')"; //use the source as the div,s background image source
    document.getElementById('image').innerHTML = alt; //use the alt as the text on the image

}

function unDo(X) {
    /* This funciton will
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image"
    back to the original text.  You can use the html code to see what that original text was
    */

    X = document.getElementById('image');
    X.style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";


}
