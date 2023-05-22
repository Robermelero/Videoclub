"use strict";

var Professional = /** @class */ (function () {
    /////////////////////////// CONSTRUCTOR /////////////////////////
    function Professional(name, age, weight, height, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarNumber;
        this.profession = profession;
        this.photo;
    }
    ///////////////////////////// METODS //////////////////////////////
    Professional.prototype.getCard = function () {
        return `<div class="actors">
                    <img src="${this.photo}" class="card-img">
                        <div class="card-body"
                            <h3>${this.name}</h3>
                            ${this.age}<br>
                            ${this.weight}<br>
                            ${this.height}<br>
                            ${this.isRetired}<br>
                            ${this.nationality}<br>
                            ${this.oscarNumber}<br>
                            ${this.profession}<br></p>
                        </div>
                </div>`;
    };
    
    Professional.prototype.toprint = function () {
        console.log("".concat("\n", "Name : ").concat(this.name).concat("\n", "Age : ").concat(this.age).concat("\n", "Weight : ").concat(this.weight).concat("\n", "Height : ").concat(this.height).concat("\n", "Is retired - ").concat(this.isRetired).concat("\n", "Nationality : ").concat(this.nationality).concat("\n", "Oscar number : ").concat(this.oscarsNumber).concat("\n", "Profession : ").concat(this.profession));
    };
    ;
    return Professional;
}());
var professional1 = new Professional("Robert Downey Jr.", 58, 78, 1.74, false, "American", 0, "Actor");
professional1.photo = "./robert.jpg"
var professional2 = new Professional("Gwyneth Paltrow", 50, 60, 1.75, false, "American", 1, "Actress");
professional2.photo = "./paltrow.jpg"
var professional3 = new Professional("Jon Favreau", 56, 98, 1.85, false, "American", 0, "Director");
professional3.photo = "./Jon.jpg"
var professional4 = new Professional("Stan Lee", 100, 70, 1.80, true, "American", 0, "Writer");
professional4.photo = "./stan.jpg"
var professional5 = new Professional("Kevin Feige", 49, 75, 1.85, false, "American", 0, "Producer");
professional5.photo = "./kevin.jpg"

let actorsContainer = document.getElementById("actors1");
actorsContainer.innerHTML =`<div class="row" style= "margin-top: 10px; gap:10px;">
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${professional1.getCard()}</div>
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${professional2.getCard()}</div>
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${professional3.getCard()}</div>
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${professional4.getCard()}</div>
                            <div class="col-md-4"style="width: 12rem; height: 36rem; border: 2px solid">${professional5.getCard()}</div>
                            </div>`;
exports.Professional = Professional;
