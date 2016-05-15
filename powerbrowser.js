// Can expand by setting a "link cap"
console.log("PowerBrowser")
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action") {
        // Populate link array
        var links_to_open = []
        $("div.sitetable.linklisting > div.link").each(function(){
            //links_to_open.push($(this).attr('data-url'))
            if ($(this).attr('data-domain').toLowerCase().includes('self')){
                links_to_open.push("https://www.reddit.com" + $(this).attr('data-url'));
            } else {
                links_to_open.push($(this).attr('data-url'));
            }
        });
        sendResponse({links: links_to_open});
    }
  }
);
