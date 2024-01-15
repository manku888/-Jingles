
 const music = document.querySelector("audio");
 const img = document.querySelector("img");
 const play = document.getElementById("play");
 const artist = document.getElementById("artist");
 const title = document.getElementById("title");
 const prev = document.getElementById("prev");
 const next = document.getElementById("next");
  
 const songs = [
    { 
    name:"manku-1",
    title:"BOL DO NA ZARA",
    Album:"king list",
    artist:"Armaan Malik",
   
    },
    {
       name:"manku-2",
       title:"BARSAAT",
       Album:"king list",
       artist:"Armaan Malik",
    },
    {
       name:"manku-3",
       title:"Raataan",
       Album:"king list",
       artist:"Jubin Nautiyal",
    },
    {
      name:"manku-4",
       title:"Temporary Pyar ",
       Album:"king list",
       artist:"KAKA",
    },
    {
      name:"manku-5",
       title:"Khushi Jab Bhi",
       Album:"king list",
       artist:"Jubin Nautiyal",
    },
    {
      name:"manku-6",
      title:"MAI PAGLO KA PAGAL ",
      Album:"king list",
      artist:"RCR",
    },
    {

      name:"manku-7",
      title:"Aashiq-Purana",
      Album:"king list",
      artist:"KAKA",

    },

    {
      name:"manku-8",
       title:"Dil Galti Kar Baitha",
       Album:"king list",
       artist:"Jubin Nautiyal",

    },
    {
      name:"manku-9",
       title:"Dil Kisi Se",
       Album:"king list",
       artist:"Jubin Nautiyal",

    },
    {
      name:"manku-10",
      title:"Mere Warga",
      Album:"king list",
      artist:"KAKA",

    },


];
 

 let isplaying = false;
//for play function
const playmusic = () => {
 isplaying = true;
 music.play();
play.classList.replace("fa-play","fa-pause" );
img.classList.add("anime");

};

//for pause function
const pausemusic = () => {
 isplaying = false;
 music.pause();
play.classList.replace("fa-pause" , "fa-play");
img.classList.remove("anime");

};

play.addEventListener("click", () => {
   isplaying ? pausemusic() : playmusic();
 });
 
   //music data//
   const loadsong = (songs) => {
     title.textContent =songs.title;
     artist.textContent =songs.artist;
     music.src = "music/" + songs.name + ".mp3";
     img.src = "images/" + songs.name + ".jpg";
   };
    songIndex = 0;
    //loadsong(songs[2]);

    const nextsong = () => {
      songIndex = (songIndex + 1) % songs.length;
      loadsong(songs[songIndex]);
      playmusic();
      

    };

    const prevsong = () => {
      songIndex = (songIndex - 1 +  songs.length) % songs.length;
      loadsong(songs[songIndex]);
      playmusic();
      

    };
    
    next.addEventListener("click", nextsong);
    prev.addEventListener("click", prevsong);
    


   
