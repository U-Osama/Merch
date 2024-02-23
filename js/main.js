window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop ||
                    document.body.scrollTop;

    // Set the dark class to the container when the scroll position is greater than 100 pixels
    if (scrollTop > 100) {
       var test=  document.getElementById("testah");
       test.style.backgroundColor='black'
       test.style.zIndex='8338'
    }
    else {
        var test=  document.getElementById("testah");
        test.style.backgroundColor='unset'

    }
};