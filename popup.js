document.addEventListener("DOMContentLoaded", function () {
  const changePicturesButton = document.getElementById("changePictures");
  changePicturesButton.addEventListener("click", function () {
    const imageUrl = "https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.webp";
    chrome.runtime.sendMessage({ action: "changeImages", imageUrl: imageUrl });
  });
});
