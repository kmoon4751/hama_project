
const postList = document.getElementById("postList");
const posts = [
  { title: "정"
,   content: "이 녀석들 내 성격 까먹었나보네."
,   image: "image1.jpg" },
  { title: "경"
,   content: "좋았숴."
,   image: "image2.jpg" },
  { title: "영"
,   content: "영촤 ~"
,   image: "image3.jpg" },
];

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
}

async function displayPosts() {
    const fetchedPosts = await fetchPosts();
    fetchedPosts.forEach((post) => {
      const postItem = document.createElement("li");
      postItem.classList.add("post");
      postItem.innerHTML = `<img src="${post.image}" alt="게시물 이미지"><div class="post-content"><h3>제목: ${post.title}</h3><br><p>내용: ${post.content}</p></div><div class="buttons">
      <button class="button colorbutton">견적서 작성</button>
      <button class="button borderbutton">삭제하기</button>
    </div>`;
      postList.appendChild(postItem);
    });
  }
displayPosts();