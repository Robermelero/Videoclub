"use strict";

var Movie = /** @class */ (function () {
    /////////////////////  CONSTRUCTOR  //////////////////////////
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.platform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
        this.photo;
    };
    /////////////////////////  METODS  //////////////////////////////
    
    Movie.prototype.getCard = function () {
        return `<div class="movies">
                    <img src="${this.photo}" class="card-img">
                        <div class="card-body"
                            <h3>${this.title}</h3>
                            ${this.releaseYear}<br>
                            ${this.actors}<br>
                            ${this.nacionality}<br>
                            ${this.director}<br>
                            ${this.writer}<br>
                            ${this.language}<br>
                            ${this.platform}<br>
                            ${this.isMCU}<br>
                            ${this.mainCharacterName}<br>
                            ${this.producer}<br>
                            ${this.distributor}<br>
                            ${this.genre}</p>
                        </div>
                </div>`;
    };
   
    Movie.prototype.allPrint = function () {
        console.log("\nTitle :" + this.title + "\nRelease Year :" + this.releaseYear + "\nActors :", this.actors, "\nNacionality :" + this.nacionality + "\nDirector :", this.director, "\nWriter :", this.writer, "\nLanguage :" + this.language + "\nPlataforma :" + this.plataforma + "\nIs MCU :" + this.isMCU + "\nMain Character Name :" + this.mainCharacterName + "\nProducer :" + this.producer + "\nDistributor :" + this.distributor + "\nGenre :" + this.genre);
    };
    return Movie;
}());

var movie1 = new Movie("Iron Man", 2008, "American", "Action");
movie1.actors = ["Robert Downey Jr.","Gwyneth Paltrow"];
movie1.director = "Jon Favreau";
movie1.writer = "Stan Lee";
movie1.language = "English";
movie1.platform = "Netflix";
movie1.isMCU = true;
movie1.mainCharacterName = "Tony Stark / Iron Man";
movie1.producer = "Kevin Feige";
movie1.distributor = "Marvel";
movie1.photo = "./iron_man.jpg";

var movie2 = new Movie("Iron Man 2", 2010, "American", "Action");
movie2.actors = ["Robert Downey Jr.","Gwyneth Paltrow"];
movie2.director = "Jon Favreau";
movie2.writer = "Stan Lee";
movie2.language = "English";
movie2.platform = "Disney+";
movie2.isMCU = true;
movie2.mainCharacterName = "Tony Stark / Iron Man";
movie2.producer = "Kevin Feige";
movie2.distributor = "Marvel";
movie2.photo = "./iron_man_2.jpg";

let moviesContainer = document.getElementById("movies1");
moviesContainer.innerHTML =`<div class="row" style= "margin-top: 10px; gap:10px;">
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${movie1.getCard()}</div>
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${movie2.getCard()}</div>
                            </div>`;

let pelis = document.getElementById("movies2")
                            let bbdd = [];

                            function filtro(){
                            let title =  document.getElementById("title").value
                            let year = document.getElementById("year").value
                            let nacionality = document.getElementById("nacionality").value
                            let language = document.getElementById("language").value
                            let platform = document.getElementById("platform").value
                            let mcu =  document.getElementById("mcu").value
                            let main = document.getElementById("main").value
                            let distributor = document.getElementById("distributor").value
                            let genre = document.getElementById("genre").value
                            
                           
                            let searching ={
                                title: title,
                                releaseYear: year,
                                nacionality: nacionality,
                                language: language,
                                platform: platform,
                                mcu: mcu,
                                main: main,
                                distributor: distributor,
                                genre: genre,
                            }
                            bbdd.push(searching)
                            let mostrar = ""
                            for( let i = 0; i<bbdd.length; i++){
                                mostrar = `${bbdd[i].title}<br>${bbdd[i].year}<br>${bbdd[i].nacionality}<br>
                                ${bbdd[i].language}<br>${bbdd[i].platform}<br>${bbdd[i].mcu}<br>${bbdd[i].main}<br>
                                ${bbdd[i].distributor}<br>${bbdd[i].genre}`
                            }
                            // document.getElementById('movies1').innerHTML = mostrar
                            console.log(bbdd)
                            pelis.innerHTML =`<div class="row" style= "margin-top: 10px; gap:10px;">
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${mostrar}</div>`
                        }
