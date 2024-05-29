chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "changeImages" && request.imageUrl) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeImages", imageUrl: request.imageUrl });
      }
    });
  }
});
