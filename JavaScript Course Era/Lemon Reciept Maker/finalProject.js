// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {

    for (var i = 0; i < dishData.length;i++) {
        
        var finalPrice;
        var item = dishData[i]['name'];
        var cost  = dishData[i]['price'];
        //console.log(taxBoolean)
        if (taxBoolean == true) {
            finalPrice = cost * 1.20;
        }

        else if (taxBoolean == false) {
            finalPrice = cost;
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            return
        }

      // console.log(`Dish: ${item} Price:$${finalPrice}`)

        console.log(`Dish: ${item} Price: $${finalPrice}\n`);
    }
   

    
}
//getPrices("true")
// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    //console.log(taxBoolean)
    getPrices(taxBoolean)
    if ((typeof(guests) == 'number') && (guests > 0 && guests < 30))
    {
        var discount = 0;
        if (guests < 5) {
            discount = 5;
        }
        else if (guests >= 5) {
            discount=10
        }

        console.log(`Discount is: $${discount}`)
        

    }
    else {
        console.log("The second argument must be a number between 0 and 30")
        
    }
    
}

// Call getDiscount()
getDiscount(true, 10);
getDiscount(false,10)

