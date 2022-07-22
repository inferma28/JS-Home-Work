let list = document.querySelector('.wrapper');
list.style.listStyle = "none";
let idProduct = 0;

async function giveRespons() {
   let response = await fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6');
   let content = await response.json()

   let item = 0;

   for (item of content) {
      list.innerHTML += `<wrapper style="display: flex;  width: 800px; border: 2px solid  #7b81d8; border-radius: 25px;   align-items: center; background-color: #a55f1d36; padding: 40px; margin: 45px auto; margin-bottom: 25px; "><img onclick="localStorage.setItem('idProduct', '${item.id}')" style = "max-width: 100px;" src="${item.image_url}" alt=""> <p style="font-size: 20px; max-width: 500px; padding-left: 40px" >${item.description}</p></wrapper>`
   }
}
giveRespons()