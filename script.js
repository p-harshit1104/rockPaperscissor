const game = document.querySelector(".container");
userresult = document.querySelector(".user_result img");
cpuresult = document.querySelector(".cpu_result img");
result = document.querySelector(".result");
optionimg = document.querySelectorAll(".option_image");
optionimg.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    optionimg.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });
    game.classList.add("start");

    let time = setTimeout(() => {
      game.classList.remove("start");
      let imagesrc = e.target.querySelector("img").src;
      userresult.src = imagesrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuimg = [
        "./assets/rock.png",
        "./assets/paper.png",
        "./assets/scissors.png",
      ];
      cpuresult.src = cpuimg[randomNumber];
      let cpuval = ["r", "p", "s"][randomNumber];
      let userval = ["r", "p", "s"][index];
      let outcome = {
        r: { r: "draw", p: "lose", s: "win" },
        p: { r: "win", p: "draw", s: "lose" },
        s: { r: "lose", p: "win", s: "draw" },
      };
      let outComeValue = outcome[userval][cpuval];
      result.textContent =
        userval === cpuval ? "Match Draw" : `You ${outComeValue}`;
    }, 1500);
  });
});
