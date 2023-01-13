export const COLORS={
    white :'#ffffff',
    black :'#000000',
    lightGray:'#B3B4B6',
    accent: '#FFC231',
    accentRed:'#FB5D2E',
    accentPink:'#F96165'
}
export const Categories=[
    {
        name:'Burger',
        image:require('../database/images/burger.png'),
        items:[
            {
            name:'Classic Burger',
            weight:120,
            rating:'5.0',
            price:199,
            isTopOfTheWeek:true,
            image:require('../database/images/burger/classicburger.png'),
            size:'Large 8"',
            crust:'Thick Crust',
            delivery:25,
            ingredients:[
                require('../database/images/flour.png'),
                require('../database/images/cheese.png'),
                require('../database/images/Sliced-Onion.png'),
                require('../database/images/Tomato.png'),

            ]
            },
            {
                name:'Aloo Tikki Burger',
                weight:150,
                rating:'4.5',
                price: 99,
                isTopOfTheWeek:false,
                image:require('../database/images/burger/alootikkiburger.png'),
                size:'Large 12"',
                crust:'Thick Crust',
                delivery:20,
                ingredients:[
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/Tomato.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
    
                ]
                },
                {
                    name:'Biggie Cheese',
                    weight:250,
                    rating:'4.2',
                    price:299,
                    isTopOfTheWeek:false,
                    image:require('../database/images/burger/biggiecheese.png'),
                    size:'Large 10"',
                    crust:'Thick Crust',
                    delivery:35,
                    ingredients:[
                        require('../database/images/Tomato.png'),
                        require('../database/images/Sliced-Onion.png'),
                        require('../database/images/cheese.png'),
                        require('../database/images/flour.png'),
        
                    ]
                    },
        ]
    },
    {
        name:'Pizza',
        image:require('../database/images/pizza.png'),
        items:[
            {
                name:'Pepperoni Pizza',
                weight:250,
                rating:'5.0',
                price: 199,
                isTopofTheWeek:true,
                image:require("../database/images/pizza/pepperonipizza.png"),
                size:'Large 14"',
                crust:'The Crust',
                delivery:30,
                ingredients:[
                        require('../database/images/Tomato.png'),
                        require('../database/images/Sliced-Onion.png'),
                        require('../database/images/cheese.png'),
                        require('../database/images/flour.png'),
                ]
            },
            {
                name:'Plain Cheese Pizza ',
                weight:350,
                rating:'4.5',
                price: 299,
                isTopofTheWeek:false,
                image:require("../database/images/pizza/plaincheesepizza.png"),
                size:'Large 12"',
                crust:'The Cheese',
                delivery:25,
                ingredients:[
                    require('../database/images/Tomato.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/flour.png'),
                ]
            },
            {
                name:'Mexican Green Wave Pizza',
                weight:350,
                rating:'4.0',
                price: 300,
                isTopofTheWeek:false,
                image:require("../database/images/pizza/mexicangreenwave.png"),
                size:'Large 16"',
                crust:'The Crust',
                delivery:40,
                ingredients:[
                    require('../database/images/flour.png'),
                    require('../database/images/cheese.png'),
                    require('../database/images/Sliced-Onion.png'),
                    require('../database/images/Tomato.png'),
                ]
            },
        ]
    },
    {
        name:'Soft Drinks',
        image:require('../database/images/softdrinks.png'),
        items:[
        {
            name:'Coca Cola',
                weight:200,
                rating:'5.0',
                price: 50,
                isTopofTheWeek:true,
                image:require("../database/images/softdrinks/cocacola.png"),
                size:'Medium Glass"',
                crust:'Small ICe',
                delivery:10,
                ingredients:[
                    require('../database/images/softdrinks/cocacola.png'),
                ]
        },
        {
            name:'Orange',
                weight:250,
                rating:'4.5',
                price: 80,
                isTopofTheWeek:false,
                image:require("../database/images/softdrinks/orange.png"),
                size:'large Glass"',
                crust:'Large ICe',
                delivery:15,
                ingredients:[
                    require('../database/images/softdrinks/orange.png'),
                ]
        },
        {
            name:'Mango',
                weight:300,
                rating:'3.0',
                price: 100,
                isTopofTheWeek:false,
                image:require("../database/images/softdrinks/mango.png"),
                size:'small Glass"',
                crust:'medium Ice',
                delivery:30,
                ingredients:[
                    require('../database/images/softdrinks/mango.png'),
                ]
        }
        ]
    }
]