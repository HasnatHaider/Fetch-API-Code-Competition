let arr = [
  "https://images.wallpaperscraft.com/image/single/code_text_programming_192795_1920x1080.jpg",
  "https://images8.alphacoders.com/559/thumb-1920-559128.jpg",
  "https://wallpaperaccess.com/full/2875430.png",
  "https://images.wallpaperscraft.com/image/single/code_text_programming_146694_1920x1080.jpg",
  "https://wallpapers.com/images/hd/python-program-coding-6kx47hfzock0lrhe.jpg",
  "https://wallpapersmug.com/download/1920x1080/73a637/coding-characters-the-matrix-minimal.jpg",
  "https://wallpaperaccess.com/full/5277906.jpg",
  "https://uploads-ssl.webflow.com/61f7efd44d01cc87c88dc6f3/6318e2916ddc28d60d89d319_Coding%20Vs.%20Programming%2002.jpg",
  "https://wallpapercave.com/wp/wp2234539.jpg",
  "https://mimo.org/static/96e2fdac4b0715d6118cd00bf6fe2766/e018d/coding-motivation%402x.png",
  "https://fronty.com/static/uploads/free%20tools/coding_while_designing.png",
  "https://livecodestream.dev/post/how-to-prepare-for-the-coding-interview/featured.jpg",
  "https://www.genome.gov/sites/default/files/media/images/tg/cDNA.jpg",
  "https://dlh.lu/wp-content/uploads/2022/05/coding-1.jpg",
];

let url = "https://kontests.net/api/v1/all";
let a = fetch(url);
a.then((b) => {
  return b.json();
}).then((fetchData) => {
  console.log(fetchData);
  enterData = "";
  for (let items in fetchData) {
    console.log(fetchData[items]);
    enterData += `<div class="card mx-4 my-4 p-0" style="width: 18rem;">
                            <img src="${
                              arr[Math.floor(Math.random() * arr.length)]
                            }" class="card-img-top " alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${
                                  fetchData[items].name
                                }</h5>
                                <div class = "cardInside">
                                <p class="card-text">Start-time: ${
                                  fetchData[items].start_time
                                }</p>
                                <p class="card-text">End-time: ${
                                  fetchData[items].end_time
                                }</p>
                                <p class="card-text">Duration: ${Math.floor(
                                  fetchData[items].duration
                                )}</p>
                                </div>
                                <div class = "buttonSet">
                                <a href="${
                                  fetchData[items].url
                                }" class="btn btn-primary"><i>Visit Contest</i></a>
                                </div>
                            </div>
                        </div>`;
  }
  cardsData.innerHTML = enterData;
});
