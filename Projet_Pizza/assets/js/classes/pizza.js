class Pizza {
    #ingredients;
    
    constructor (){
        this.#ingredients = [];
    }
    
    get ingredients (){
        return this.#ingredients;
    }
    
    addIngredient(ingredient){
        this.#ingredients.push(ingredient);
    }
    
    removeIngredient(ingredient){
        
    }
    
    display(){
        
    }
}

export {Pizza};