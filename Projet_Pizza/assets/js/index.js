import {Ingredient} from './ingredient.js'

window.addEventListener("DOMContentLoaded", function (){
    
        let availableIngredients=[];
        let bacon = new Ingredient("assets/img/bacon.png");
        let carots = new Ingredient("assets/img/carrots.png");
        let cheese = new Ingredient("assets/img/cheese.png");
        let egg = new Ingredient("assets/img/egg.png");
        let eggplant = new Ingredient("assets/img/eggplant.png");
        let goat_cheese = new Ingredient("assets/img/goat-cheese.png");
        let honey = new Ingredient("assets/img/honey.png");
        let mushroom = new Ingredient("assets/img/mushroom.png");
        let olive = new Ingredient("assets/img/olive.png");
        let pepper = new Ingredient("assets/img/pepper.png");
        let potato = new Ingredient("assets/img/potato.png");
        let tomato = new Ingredient("assets/img/tomato.png");
        
        availableIngredients.push(bacon,carots,cheese,egg,eggplant,goat_cheese,honey,mushroom,olive,pepper,potato,tomato);
        
        console.log(availableIngredients);
    
})