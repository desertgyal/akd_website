function processForm() {

		let sqlStmt;
		sqlStmt = "SELECT * FROM Products";
		
        MySql.Execute(
            "sql.wpc-is.online",  // remote host
            "jalewi26",           // username
            "jale3871",           // password
            "db_test_TeamA8",   // database name

            sqlStmt,              // SQL statement
            function(data) {          // callback function
				document.getElementById("autumn-name").innerHTML = data.Result[0].ProductName;
        document.getElementById("autumn-price").innerHTML = data.Result[0].Price;
        document.getElementById("matte-black-gold-name").innerHTML = data.Result[1].ProductName;
        document.getElementById("matte-black-gold-price").innerHTML = data.Result[1].Price;
        document.getElementById("purple-star-name").innerHTML = data.Result[2].ProductName;
        document.getElementById("purple-star-price").innerHTML = data.Result[2].Price;
        document.getElementById("sailor-moon-name").innerHTML = data.Result[3].ProductName;
        document.getElementById("sailor-moon-price").innerHTML = data.Result[3].Price;
            });
      }
    
processForm();
