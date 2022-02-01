fetch("photographers.json")
.then(function(response) {
  if(response.ok) {
    return response.json();
}
})
.then(function(jsonObj) {
    const photographers = jsonObj["photographers"];
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
    function showPhotographers() {
        photographers.forEach(photographer => {
            this._name = photographer["name"];
            this._id = photographer["id"];
            this._city = photographer["city"];
            this._country = photographer["country"];
            this._tags = photographer["tags"];
            this._tagline = photographer["tagline"];
            this._price = photographer["price"];
            this._portrait = photographer["portrait"];
       
            let photographerDiv = document.createElement("div");
            let gallery = document.getElementById("gallery");
            photographerDiv.classList.add("photographe");
            photographerDiv.innerHTML =`<a href="photographer.html?id=${photographer.id}">`+ '<img src="./Sample Photos/Photographers ID Photos/' + this._portrait + '">'+ '<h2 class="name">' + this._name + '</h2>' + '</a>' + '<p class="location">' + this._city + this._country + '</p>' + '<p class="tagline">'+ this._tagline + '</p>' + '<p class="tags">' + this._tags + '</p>' + '<p class="price">' + this._price + '€/jour' + '</p>';
            gallery.appendChild(photographerDiv);
           
        })
    }
    showPhotographers();
});    