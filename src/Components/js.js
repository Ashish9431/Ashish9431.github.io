//how to show multiple image in js using set interval?
const coins = ["http://via.placeholder.com/50x50/00cc00?text=1", "http://via.placeholder.com/50x50/00b200?text=2",
  "http://via.placeholder.com/50x50/009900?text=3", "http://via.placeholder.com/50x50/007f00?text=4"
];
  
const coinImages = coins.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

function flipCoin() {
  const image = document.getElementById("coin");
  let i = 0;
  const toss = setInterval(function() {
    image.src = coins[i++ % coins.length];
  }, 50);

  setTimeout(function() {
    clearInterval(toss);
    image.src = Math.random() < 0.5 ? "http://via.placeholder.com/50x50?text=Heads" : "http://via.placeholder.com/50x50?text=Tails";
  }, 5000);


}

flipCoin();

<img id="coin" />

