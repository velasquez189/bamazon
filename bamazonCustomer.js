var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "16011989",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to" + connection.threadId + "\n");
    showItems();
    connection.end()
});


function showItems(){
    connection.query("SELECT * FROM products", function(err, res){
        for(var i = 0; i < res.length; i++){
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);   
        }
        console.log("-----------------------------------");
    });
}

function start() {
   showItems();
    inquirer
    .prompt({
        name: "id",
        type: "rawlist",
        message:"Do you know the product ID of your item?",

    })
}

