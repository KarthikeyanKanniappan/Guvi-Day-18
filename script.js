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
    // headerDiv
    let div1 = document.createElement("div");
    div1.classList.add("card-header");
    div1.classList.add("name");
    div1.textContent = `${data[x].name.common}`;
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
    btn.classList.add("btn-primary");
    btn.classList.add("mt-4");
    btn.innerHTML = "Click for weather";
    div2.append(list1, list2, list3, btn);
    div3.append(anchor);
    div.append(div1, div3, div2);
    country.append(div);
    x++;
  });
};
populateData("https://restcountries.com/v3.1/all");
