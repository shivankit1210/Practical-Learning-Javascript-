const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const btn = document.querySelector(".btn");
const avatar = document.querySelector(".avatar");
const like = document.querySelector(".like");
const fav = document.querySelector(".fav");
const showFavoritesButton = document.getElementById("show-favorites");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const randomstring = () => {
  return Math.random().toString(36).substring(2, 7);
};



async function fetchAvatar() {
  const randomstr = randomstring();
  var url = `https://api.multiavatar.com/${randomstr}.svg`;

  let res = await fetch(url);
  let data = await res.text();

  if (!res.ok) {
    throw new Error("Network response not okay!!");
  }

  return { avatar: data, randomstr };
}

btn.addEventListener("click", () => {
  fetchAvatar()
    .then(({ avatar: data }) => {
      avatar.innerHTML = data;
      avatar.dataset.currentAvatar = data; // Set the current avatar to the fetched data
    })
    .catch((error) => {
      console.log(error);
    });
});



  like.addEventListener("click",()=>{
    const currentAvatar=avatar.dataset.currentAvatar;

    if(currentAvatar){
      let favorites=JSON.parse(localStorage.getItem("favorites")) || [];

      if(!favorites.includes(currentAvatar)){
        favorites.push(currentAvatar);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        // displayFavorites();
      }
    }
  });


  function displayFavorites(){
    console.log("inside display function")
    fav.innerHTML="";
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [] ;
    console.log("fav array",favorites)
    favorites.forEach((favorite) => {
      const favDiv=document.createElement("div");
      favDiv.innerHTML = favorite;
      fav.appendChild(favDiv);
    });
  }

showFavoritesButton.addEventListener("click", displayFavorites);