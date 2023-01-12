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
        let removeIngredient=[];
        for(let i=0;i<this.#ingredients.length;i++){
            if(ingredients[i] !== this.ingredient[i]){
                removeIngredient.push(ingredients);
            }
        }
        console.log(this)
    }
    
    display(){
        
    }
}

export {Pizza};