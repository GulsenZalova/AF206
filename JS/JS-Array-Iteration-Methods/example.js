let originalProducts = [
    {
                "id": 4,
                "supplierId": 2,
                "categoryId": 3,
                "quantityPerUnit": "48 - 6 oz jars",
                "unitPrice": 22,
                "unitsInStock": 53,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": true,
                "name": "Chef Anton's Cajun Seasoning",
                "supplier": {
                    "id": 2,
                    "companyName": "New Orleans Cajun Delights",
                    "contactName": "Shelley Burke",
                    "contactTitle": "Order Administrator",
                    "address": {
                        "street": "P.O. Box 78934",
                        "city": "New Orleans",
                        "region": "LA",
                        "postalCode": 70117,
                        "country": "USA",
                        "phone": "(100) 555-4822"
                    }
                },
                "category": {
                    "id": 3,
                    "description": "Desserts candies and sweet breads",
                    "name": "Confections"
                }
            },
            {
                "id": 5,
                "supplierId": 2,
                "categoryId": 2,
                "quantityPerUnit": "36 boxes",
                "unitPrice": 21.35,
                "unitsInStock": 0,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": true,
                "name": "Chef Anton's Gumbo Mix"
            },
            {
                "id": 6,
                "supplierId": 3,
                "categoryId": 2,
                "quantityPerUnit": "12 - 8 oz jars",
                "unitPrice": 25,
                "unitsInStock": 120,
                "unitsOnOrder": 0,
                "reorderLevel": 25,
                "discontinued": false,
                "name": "Grandma's Boysenberry Spread"
            },
            {
                "id": 7,
                "supplierId": 3,
                "categoryId": 7,
                "quantityPerUnit": "12 - 1 lb pkgs.",
                "unitPrice": 30,
                "unitsInStock": 15,
                "unitsOnOrder": 0,
                "reorderLevel": 10,
                "discontinued": false,
                "name": "Uncle Bob's Organic Dried Pears"
            },
            {
                "id": 8,
                "supplierId": 3,
                "categoryId": 2,
                "quantityPerUnit": "12 - 12 oz jars",
                "unitPrice": 40,
                "unitsInStock": 6,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": false,
                "name": "Northwoods Cranberry Sauce"
            },
            {
                "id": 9,
                "supplierId": 4,
                "categoryId": 6,
                "quantityPerUnit": "18 - 500 g pkgs.",
                "unitPrice": 97,
                "unitsInStock": 29,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": true,
                "name": "Mishi Kobe Niku"
            },
            {
                "id": 10,
                "supplierId": 4,
                "categoryId": 8,
                "quantityPerUnit": "12 - 200 ml jars",
                "unitPrice": 31,
                "unitsInStock": 31,
                "unitsOnOrder": 0,
                "reorderLevel": 0,
                "discontinued": false,
                "name": "Ikura"
            },
    
        ]

        


// Mehsullarin ortalama qiymetini tapin


// let sum=originalProducts.reduce((total,value)=>{
//       return total+ value.unitPrice
// },0)

// let ave=(sum/originalProducts.length).toFixed()
// console.log(ave)



// stoku 10dan az olanlar

let lessStok=originalProducts.filter(x=>x.unitsInStock<10)

console.log(lessStok.length)


// adında x herfi olanlar


let xname=originalProducts.filter(x=>x.name.toLowerCase().includes("x"))

console.log(xname)