function openlinks(type) {
    var link;
    if (type == "CD Demo Help") {
        var link = "Help.html?x=" + Math.random();
        window.open(link, "_self");
    } else if (type == "CD Demo QA") {
        var link = "QandA.html?x=" + Math.random();
        window.open(link, "_self");
    }

}