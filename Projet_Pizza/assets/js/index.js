import { Ingredient } from './classes/ingredient.js';
import {Pizza} from './classes/pizza.js';

window.addEventListener("DOMContentLoaded", function() {
    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    let carots = new Ingredient("Carotte", "assets/img/carrots.png");
    let cheese = new Ingredient("Fromage", "assets/img/cheese.png");
    let egg = new Ingredient("Oeuf", "assets/img/egg.png");
    let eggplant = new Ingredient("Aubergine", "assets/img/eggplant.png");
    let goat_cheese = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    let honey = new Ingredient("Miel", "assets/img/honey.png");
    let mushroom = new Ingredient("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    let pepper = new Ingredient("Piment", "assets/img/pepper.png");
    let potato = new Ingredient("Pomme de terre", "assets/img/potato.png");
    let tomato = new Ingredient("Tomate", "assets/img/tomato.png");

    let availableIngredients = [];

    availableIngredients.push(bacon, carots, cheese, egg, eggplant, goat_cheese, honey, mushroom, olive, pepper, potato, tomato);

    console.log(availableIngredients);

    let section = document.getElementById("stage");
    let ul = document.createElement("ul");
    section.appendChild(ul);
    
    // Création balise HTML
    for (let i = 0; i < availableIngredients.length; i++) {

        let li = document.createElement("li");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        let h3text = document.createTextNode(availableIngredients[i].name);

        // Création des balises
        ul.appendChild(li);
        li.appendChild(article);
        article.appendChild(header);
        header.appendChild(figure);
        header.appendChild(h3);
        figure.appendChild(img);

        // Ajout attribute
        img.setAttribute("src", availableIngredients[i].file);
        img.setAttribute("alt", availableIngredients[i].name);
        
        article.setAttribute("class","");
        
        // Ajout Nom Ingrédient
        h3.appendChild(h3text);
    }
    
    // Select ingredient with click
    let selectedIngredient = document.querySelectorAll("#stage article");
    
    for (let i = 0; i < selectedIngredient.length; i++) {
        
        selectedIngredient[i].addEventListener("click", function() {
            
            selectedIngredient[i].classList.toggle("selected");
            
        });
    }
    
})