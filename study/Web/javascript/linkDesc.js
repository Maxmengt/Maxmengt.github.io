function clearDesc() {
    document.getElementById("description").innerHTML = "";
}
function hover(event) {
    if( !event ) event = window.event;
    var link = (event.target) ? event.target.id : event.srcElement.id,
        desc;
    if( link == "index" ) desc = "新世界，新时代";
    else if( link == "activity" ) desc = "了解新世界的最新活动";
    else if( link == "introduce" ) desc = "新时代，你准备好了吗？";
    else if( link == "society" ) desc = "新世界爱心大家庭";
    else if( link == "about" ) desc = "关于我们，你了解多少？"
    document.getElementById("description").innerHTML = desc;
}

var indexLink = document.getElementById("index");
indexLink.onmouseover = hover;
indexLink.onmouseout = clearDesc;
var activityLink = document.getElementById("activity");
activityLink.onmouseover = hover;
activityLink.onmouseout = clearDesc;
var introduceLink = document.getElementById("introduce");
introduceLink.onmouseover = hover;
introduceLink.onmouseout = clearDesc;
var societyLink = document.getElementById("society");
societyLink.onmouseover = hover;
societyLink.onmouseout = clearDesc;
var aboutLink = document.getElementById("about");
aboutLink.onmouseover = hover;
aboutLink.onmouseout = clearDesc;