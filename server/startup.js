Meteor.startup(function(){
    if(Products.find().count() === 0){
      Products.insert({thumb:'15881.jpg',name:'Tröegs Nugget Nectar',desc:'Tröegs Brewing Company',price:2.50,catName:'Red Ale'});
      Products.insert({thumb:'35732.jpg',name:'Green Flash Hop Head Red Ale',desc:'Green Flash Brewing Co.',price:2.50,catName:'Red Ale'});

      Products.insert({thumb:'1161.jpg',name:'Indian Brown Ale',desc:'Dogfish Head Brewery',price:2.50,catName:'Brown Ale'});
      Products.insert({thumb:'33832.jpg',name:'Palo Santo Marron',desc:'Dogfish Head Brewery',price:2.50,catName:'Brown Ale'});


      Products.insert({thumb:'24071.jpg',name:'Gonzo Imperial Porter',desc:'Flying Dog Brewery',price:2.50,catName:'Baltic Porter'});
      Products.insert({thumb:'79898.jpg',name:'Barrel-Aged Framinghammer',desc:'Jack\'s Abby Brewing',price:2.50,catName:'Baltic Porter'});
      Products.insert({thumb:'88889.jpg',name:'3Beans',desc:'Sixpoint Brewery',price:2.50,catName:'Baltic Porter'});
    }
    if(Categories.find().count() === 0){

        var ale1 = Categories.insert({name:'American Ales'});
        SubCategories.insert({name:'Red Ale',cat:ale1});
        SubCategories.insert({name:'Brown Ale',cat:ale1});
        
        var ale2 = Categories.insert({name:'English Ales'});
        SubCategories.insert({name:'Baltic Porter',cat:ale2});
        SubCategories.insert({name:'Pale Ale',cat:ale2});
    }

});
Meteor.methods({
    //delete when live
    removeAll:function(){
        Products.remove({});
        Categories.remove({});
        CartItems.remove({});
    },
    addToCart:function(qty,product,session){
        if(qty > 0){
            CartItems.insert({qty:qty,product:product,sessid:session});
        } else{
            console.log('Quantity is Zero');
        }

    },
    removeCartItem:function(id){
        CartItems.remove({_id:id});
    }
});