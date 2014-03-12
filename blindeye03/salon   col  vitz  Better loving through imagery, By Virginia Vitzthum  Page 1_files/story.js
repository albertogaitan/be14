
if (navigator.appVersion.charAt(0) > 2) {
        var booksNormImg = new Image(16,16)
        var booksOverImg = new Image(16,16)
        var comicsNormImg = new Image(16,16)
        var comicsOverImg = new Image(16,16)
        var entNormImg = new Image (16,16)
        var entOverImg = new Image (16,16)
        var mwtNormImg = new Image(16,16)
        var mwtOverImg = new Image(16,16)
        var newsNormImg = new Image(16,16)
        var newsOverImg = new Image(16,16)      
        var peopleNormImg = new Image(16,16)
        var peopleOverImg = new Image(16,16)
        var politicsNormImg = new Image(16,16)
        var politicsOverImg = new Image(16,16)
        var sexNormImg = new Image(16,16)
        var sexOverImg = new Image(16,16)
        var techNormImg = new Image(16,16)
        var techOverImg = new Image(16,16)
        var audioNormImg = new Image(16,16)
        var audioOverImg = new Image(16,16)

        booksNormImg.src = "http://images.salon.com/src/books4_plain_off.gif"
        booksOverImg.src = "http://images.salon.com/src/books4_plain_on.gif"
        comicsNormImg.src = "http://images.salon.com/src/comics4_plain_off.gif"
        comicsOverImg.src = "http://images.salon.com/src/comics4_plain_on.gif"
        entNormImg.src = "http://images.salon.com/src/ent4_plain_off.gif"
        entOverImg.src = "http://images.salon.com/src/ent4_plain_on.gif"
        mwtNormImg.src = "http://images.salon.com/src/mwt4_plain_off.gif"
        mwtOverImg.src = "http://images.salon.com/src/mwt4_plain_on.gif"
        newsNormImg.src = "http://images.salon.com/src/news4_plain_off.gif"
        newsOverImg.src = "http://images.salon.com/src/news4_plain_on.gif"
        peopleNormImg.src = "http://images.salon.com/src/people4_plain_off.gif"
        peopleOverImg.src = "http://images.salon.com/src/people4_plain_on.gif"
        politicsNormImg.src = "http://images.salon.com/src/politics4_plain_off.gif"
        politicsOverImg.src = "http://images.salon.com/src/politics4_plain_on.gif"
        sexNormImg.src = "http://images.salon.com/src/sex4_plain_off.gif"
        sexOverImg.src = "http://images.salon.com/src/sex4_plain_on.gif"
        techNormImg.src = "http://images.salon.com/src/tech4_plain_off.gif"
        techOverImg.src = "http://images.salon.com/src/tech4_plain_on.gif"
        audioNormImg.src = "http://images.salon.com/src/audio4_plain_off.gif"
        audioOverImg.src = "http://images.salon.com/src/audio4_plain_on.gif"
}
function setImage(imgName, type) {
        var imgFile = eval(imgName + type + "Img.src")
        document.images[imgName].src = imgFile
        return false
}
