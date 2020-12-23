function generatePrice() {

		let sqlStmt;
		sqlStmt = "SELECT * FROM Products";
		
        MySql.Execute(
            "sql.wpc-is.online",  // remote host
            "jalewi26",           // username
            "jale3871",           // password
            "db_test_TeamA8",   // database name

            sqlStmt,              // SQL statement
            function(data) {          // callback function
            var shipping, tax, total;

            shipping = data.Result[2].Price*.01;

            tax = (data.Result[2].Price*.07).toFixed(2);

            total = (data.Result[2].Price + shipping + tax);

            total = parseFloat(total).toFixed(2);

            document.getElementById("desc").innerHTML = data.Result[2].Description;

            document.getElementById("heading").innerHTML = data.Result[2].ProductName;

            document.getElementById("tax").innerHTML = `Tax: $${tax}`;

            document.getElementById("shipping").innerHTML = `Shipping: $${shipping}`;

            document.getElementById("total").innerHTML = `Total: $${total}`;

            });
      }

generatePrice();