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

            shipping =  data.Result[1].Price*.01;

            tax = data.Result[1].Price*.07;

            total = data.Result[1].Price + shipping + tax;

            document.getElementById("desc").innerHTML = data.Result[1].Description;

            document.getElementById("heading").innerHTML = data.Result[1].ProductName;

            document.getElementById("tax").innerHTML = `Tax: $${tax}`;

            document.getElementById("shipping").innerHTML = `Shipping: $${shipping}`;

            document.getElementById("total").innerHTML = `Total: $${total}`;

            });
      }

generatePrice();