var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "16011989",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to" + connection.threadId + "\n");
    start();
    // connection.end()
});

//Display Table with IDs, Product Name, and Pricing
function showItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("\n-----------------------------------\n");
    });
}

//Displays the questions of Item ID and 
function start() {
    showItems();
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        inquirer.prompt([{
                    name: "choice",
                    type: "input",
                    message: "Do you know the product ID of your item?",
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                }
            ])
            .then(function (answer) {
                var selection = answer.choice - 1;
                if (answer.quantity > res[selection].stock_quantity) {
                    console.log("Too many ordered.");
                } else {
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [{
                                stock_quantity: answer.quantity
                            },
                            {
                                item_id: answer.choice
                            }
                        ],
                        function (err) {
                            if (err) throw err;
                            console.log("New item(s) in your cart!");
                            // start();
                        }
                    );
                }

            })
    });
}