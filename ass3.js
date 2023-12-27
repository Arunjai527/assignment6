let cars=[]
cars=[
    {
        make:"Toyota",model:"Camry",year:2018
    },
    {
        make:"Tesla",model:"Model 3",year:2018 
    },
    {
        make:"Ford",model:"Mustang GT",year:2021
    }
]
cars.splice(0,1);
console.log(cars)
cars.push({make:"Cheverlot",model:"Silverado",year:2022})
cars[1].model="Accord";
console.log(cars);