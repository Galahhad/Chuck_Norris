const submit = document.querySelector(".submit");
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const list = document.querySelector("#list");
  list.style.borderColor = "black";
  list.textContent = "";

  const img = document.createElement("img");
  img.src = "https://www.kino-teatr.ru/acter/album/50064/34947.jpg";
  img.alt = "Chuck Norris";
  img.classList.add("img");

  const textInfo = document.createElement("p");
  textInfo.classList.add("text_info");

  process(textInfo);

  list.append(img, textInfo);
});

const process = async (value) => {
  try {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const type = await res.json();
  value.textContent = type.value;
  } catch (err) {
    console.log(err);
  }
};
