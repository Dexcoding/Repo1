<!--######### Writing Callback Function #############--> 
<script type="text/javascript"> 

//----------------------------Defaults 
ListBlogLink = "https://" + window.location.hostname + "/";
ListCount = 100; 
TitleCount = 70; 
ListLabel = "Jose Mari Chan Christmas Songs";
ListLabel2 = "Jose Mari Chan";

//----------------------------Function Start 
function mbtlist(json) { 
document.write('<ul class="mbtlist">'); 
for (var i = 0; i < ListCount; i++) 
{ 

	//-----------------------------Variables Declared 
	var listing= ListUrl = ListTitle = ""; 
	//----------------------------- Title URL 
	for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
		if (json.feed.entry[i].link[j].rel == 'alternate') { 
		break; 
	} 
} 
ListUrl= "'" + json.feed.entry[i].link[j].href + "'"; 
//----------------------------------- Title Stirng 
if (json.feed.entry[i].title!= null) 
{ 
	ListTitle= json.feed.entry[i].title.$t.substr(0, TitleCount); 
  	ListTitle= ListTitle.replace(ListLabel + " - ","");    
	ListTitle= ListTitle.replace(ListLabel2 + " - ","");    
    ListTitle= ListTitle.replace(" & ","");
    ListTitle= ListTitle.replace(" - ","");	
    ListTitle= ListTitle.replace("(Lyrics)","");
    ListTitle= ListTitle.replace("Lyrics","");
    ListTitle= ListTitle.replace("lyrics","");
    ListTitle= ListTitle.replace("(lyrics)","");
    ListTitle= ListTitle.replace("by "+ ListLabel,"");
	ListTitle= ListTitle.replace("by "+ ListLabel2,"");
    ListTitle= ListTitle.replace("by ","").trim();
} 
//----------------------------------- Printing List 
var listing = "<li><a class='mbttitle' href=" 
+ListUrl+ 
"target='_blank'>" 
+ListTitle+ 
"</a></li>"; 
document.write(listing); 
} 
document.write("</ul>"); 
} 
</script>