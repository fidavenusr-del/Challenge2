 const likeBtn = document.getElementById("likeBtn");
    const dislikeBtn = document.getElementById("dislikeBtn");
    const likeCountText = document.getElementById("likeCount");
    const dislikeCountText = document.getElementById("dislikeCount");

    let likes = 0;
    let dislikes = 0;

    likeBtn.addEventListener("click", () => {
      likes++;
      updateCounters();
    });

    dislikeBtn.addEventListener("click", () => {
      dislikes++;
      updateCounters();
    });

    function updateCounters() {
      likeCountText.textContent = likes + (likes === 1 ? " Like" : " Likes");
      dislikeCountText.textContent = dislikes + (dislikes === 1 ? " Dislike" : " Dislikes");
    }