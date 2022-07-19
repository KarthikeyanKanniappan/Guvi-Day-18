const populateData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  let country = document.getElementById("country-list");
  let x = 0;
  let y = 0;
  data.forEach((el) => {
    // mainDiv
    let div = document.createElement("div");
    div.classList.add("card");
    div.classList.add("text-center");
    div.classList.add("col-lg-4");
    div.classList.add("col-md-6");
    // headerDiv
    let div1 = document.createElement("div");
    let head = document.createElement("h3");
    div1.classList.add("card-header");
    div1.classList.add("name");
    head.textContent = `${data[x].name.common}`;
    head.classList.add("text-center");
    div1.append(head);
    // flagDiv
    let div3 = document.createElement("div");
    div3.classList.add("card-img-top");
    div3.classList.add("flag");
    div3.classList.add("mt-3");
    let anchor = document.createElement("img");
    let flag = data[x].flags.png;
    anchor.setAttribute("src", flag);
    // listDiv
    let div2 = document.createElement("div");
    div2.classList.add("card-body");
    div2.classList.add("card-text");
    div2.classList.add("list");
    let list1 = document.createElement("li");
    let list2 = document.createElement("li");
    let list3 = document.createElement("li");
    let btn = document.createElement("button");
    list1.textContent = `Capital: ${data[x].capital[y]}`;
    list2.textContent = `Region: ${data[x].region}`;
    list3.textContent = `Country Code: ${data[x].altSpellings[y]}`;
    btn.type = "button";
    btn.classList.add("btn");
    btn.classList.add("btn-outline-secondary");
    btn.classList.add("mt-4");
    btn.classList.add(`data${x}`);
    btn.innerHTML = "Click for weather";
    div2.append(list1, list2, list3, btn);
    div3.append(anchor);
    div.append(div1, div3, div2);
    country.append(div);
    let butt = document.querySelector(`.data${x}`);
    let live = `Latitude=${data[x].latlng[0]},Longitude=${data[x].latlng[1]}`;
    let lat = data[x].latlng[0];
    let lon = data[x].latlng[1];
    butt.addEventListener("click", async function (e) {
      e.stopPropagation();
      const response1 = await fetch(
        `https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4022e3288690f5d296eb1cd584b0869`
      );
      const data1 = await response1.json();
      console.log(data1);
      let div4 = document.createElement("div");
      div4.classList.add("pt-3");
      div4.classList.add("bg-lit");
      let span1 = document.createElement("span");
      span1.classList.add("mr-3");
      span1.innerHTML = `temp: ${data1.main.temp} F, `;
      let span = document.createElement("span");
      span.innerHTML = `Weather: ${data1.weather[0].main}`;
      div2.append(div4);
      div4.append(span1, span);
    });
    x++;
    //
  });
};
populateData("https://restcountries.com/v3.1/all");
