var shopper = {
    groceryCart: ["sponge","pickles","carrots","glue"], 
    clothes: "red",
    cost: 10,
    happy: true,
    costAndHappiness: function () {
        if (this.cost <= 10) {
            return this.happy;
        }
            
    }
}
shopper.costAndHappiness();