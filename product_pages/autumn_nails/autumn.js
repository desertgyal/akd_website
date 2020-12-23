function generatePrice() {

		// let sqlStmt;
		// sqlStmt = "SELECT * FROM Products";
		
    //     MySql.Execute(
    //         "sql.wpc-is.online",  // remote host
    //         "jalewi26",           // username
    //         "jale3871",           // password
    //         "db_test_TeamA8",   // database name

    //         sqlStmt,              // SQL statement
    //         function(data) {          // callback function
    //         var shipping, tax, total;

            shipping =  31.50*.01;

            tax = 31.50*.07;

            total = 31.50 + shipping + tax;

            document.getElementById("desc").innerHTML = "These nails are made with autumn patterns and gold accents";

            document.getElementById("heading").innerHTML = "Nude Autumn Fall Nails";

            document.getElementById("tax").innerHTML = `Tax: $${tax}`;

            document.getElementById("shipping").innerHTML = `Shipping: $${shipping}`;

            document.getElementById("total").innerHTML = `Total: $${total}`;

            // });
      }

generatePrice();
    