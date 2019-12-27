function BuildUrlForImage(contentID, imageGuid, blogID){
	var width = 767;
	var height = 508;
	var path = "/Portals/31/Blog/Files/" + blogID + "/" + contentID + "/" + imageGuid + ".jpg?w=" + width + "&h=" + height + "&mode=crop";
	$.ajax({url:path,type:'HEAD'})
	.error(function(){
		return "";
	});
	return path;
}

function FormatDate(date){
	var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	var formattedDate = new Date(date);
	return monthNames[formattedDate.getMonth()] + " " + formattedDate.getDate();
}

function DecodeHtml(body){
	var decoded = $('<p>').html(body).text();
	return decoded;
}

function LinkForPost(postID, postTitle){
	return "/news/blog/post/" + postID + "/" + FriendlyTitle(postTitle);
}

function FriendlyTitle(title){
	title = title.replace(/[^a-zA-Z0-9 -]+/g, "");
	title = title.replace(/\s+/g, "-").toLowerCase();
	return title;
}

function TruncateSummary(summary){
	var pieces = summary.split(/\s+/);
	var content = '';
	if(pieces.length < 51)
		content = pieces.slice(0,50).join(" ");
	else
		content = pieces.slice(0,50).join(" ") + "...";
	if(content.indexOf("<p>") != 0)
		content = "<p>" + content;
	if(content.lastIndexOf("</p>") != content.length - 4)
		content = content + "</p>";
	return content;
}

function IgnoreMeta(summary){
	var wrapped = $("<div>" + summary + "</div>");
    wrapped.find('blockquote').remove();
	return wrapped.html();
}

function BuildImage(contentID, imageGuid, blogID, width, height){
	var path = "";
	if(imageGuid != ''){
		path = "/DesktopModules/Blog/BlogImage.ashx?TabId=33314&ModuleId=62739&Blog=" + blogID + "&Post=" + contentID + "&w=" + width + "&h=" + height + "&c=0&key=" + imageGuid;
		path = '<img src="' + path + '" alt="" />';
	}
	return path;
}
