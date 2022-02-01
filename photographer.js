fetch("photographers.json")

.then(function(response) {
    if (response.ok) {
      return response.json();
    }
})
.then(function(jsonObj) {
    const photographers = jsonObj["photographers"];

    // get photographer's id in url
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let photographerId = urlParams.get('id');

    console.log(photographerId);
    var currentPhotographer;

    class Photographer {
        constructor(name, id, city, country, tags, tagline, price, portrait) {
            this._name = name;
            this._id = id;
            this._city = city;
            this._country = country;
            this._tags = tags;
            this._tagline = tagline;
            this._price = price;
            this._portrait = portrait;
        }
    }

    photographers.forEach(function(photographer) {
      if (photographer["id"]==photographerId) {
        currentPhotographer = photographer;
        console.log(currentPhotographer);
       
        let photographerDiv = document.createElement("div");
        photographerDiv.classList.add("photographe");
        let info = document.getElementById("info");
        
        this._name = photographer["name"];
        this._id = photographer["id"];
        this._city = photographer["city"];
        this._country = photographer["country"];
        this._tags = photographer["tags"];
        this._tagline = photographer["tagline"];
        this._price = photographer["price"];
        this._portrait = photographer["portrait"];
       

        photographerDiv.innerHTML = '<img src="./Sample Photos/Photographers ID Photos/' + this._portrait + '">'+ '<h2 class="name">' + this._name + '</h2>' + '</a>' + '<p class="location">' + this._city +this._country + '</p>' + '<p class="tagline">'+ this._tagline + '</p>' + '<p class="tags">' + this._tags + '</p>' + '<pclass="price">' + this._price + '€/jour' + '</p>';

        info.appendChild(photographerDiv);
      } 
    });


    const media = jsonObj["media"];

    //créer tableau de médias
    let mediaArray = [];

    class Image {
        constructor(id, photographerId, title, image, tags, likes, date, price) {
            this._id = id;
            this._photographerId = photographerId;
            this._title = title;
            this._image = image;
            this._tags = tags;
            this._likes = likes;
            this._date = date;
            this._price = price;
        }
    }

    class Video {
        constructor(id, photographerId, title, video, tags, likes, date, price) {
            this._id = id;
            this._photographerId = photographerId;
            this._title = title;
            this._video = video;
            this._tags = tags;
            this._likes = likes;
            this._date = date;
            this._price = price;
        }
    }

    media.forEach(function(medium) {
        if (medium["photographerId"]==photographerId) {
          //tableaumedia.push de medium
          mediaArray.push(medium);
          
          let photos = document.getElementById("photos");
          let mediaDiv = document.createElement("div");
          mediaDiv.classList.add("mediadiv");
      
          // condition medium["image"] or medium["video"] according to media
          // medium["image"]
            this._id = medium["id"];
            this._photographerId = medium["photographerId"];
            this._title = medium["title"];
            this._image = medium["image"];
            this._tags = medium["tags"];
            this._likes = medium["likes"];
            this._date = medium["date"];
            this._price = medium["price"];  

          if (this._image) {
            mediaDiv.innerHTML = '<a>' + '<img class="images" tabindex="0" src="./Sample Photos/' + this._name + '/' + this._image + '"alt=' + this._title + '>' + '</a>' + '<div class="title">' + '<p class="titleparagraph">' + this._title + '</p>' + '<div class="likes-counter">' + '<p class="counter">' + this._likes + '</p>' + '<i class="fas fa-heart heart" tabindex="0">' + '</i>' + '</div>'+ '</div>';
            photos.appendChild(mediaDiv);
          }

          // medium["video"]
            this._video = medium["video"];
        
          if (this._video) {
            mediaDiv.innerHTML = '<a>' + '<video class="images" tabindex="0" preload="auto" src="./Sample Photos/' + this._name + '/' + this._video + '"title="' + this._title +'">' + '</video>' + '</a>' + '<div class="title">' + '<p class="titleparagraph">' + this._title + '</p>' + '<div class="likes-counter">' + '<p class="counter">' + this._likes + '</p>' + '<i class="fas fa-heart heart" tabindex="0">' + '</i>' + '</div>'+ '</div>';
            photos.appendChild(mediaDiv);
          } 
        }
    })

    
});     