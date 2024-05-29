chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "changeImages" && request.imageUrl) {
    try {
      const profilePictures = document.querySelectorAll('img');
      profilePictures.forEach(img => {
        if (img.src.includes('profile')) {
          img.onerror = function() {
            console.error("Failed to load image: ", img.src);
          };
          img.src = request.imageUrl;
        }
      });
      sendResponse({ status: "success" });
    } catch (error) {
      console.error("Error changing images: ", error);
      sendResponse({ status: "failure", error: error });
    }
  }
});
