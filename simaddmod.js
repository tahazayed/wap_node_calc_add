exports.add = function (req, res, vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead
        (200, { 'Content-Type': 'text/html' });
    res.write(`
      <!DOCTYPE HTML>
      <html>
       <head>
        <meta charset=\"utf-8\">
        <title>Calculator Web Site</title>
        <link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost:8080/calc.css\" />
       </head>
       
       <body>
        <form action=\"http://localhost:8080/add.js\" method=\"get">
         <h1>Enter two numbers</h1>
         <div class=\"main\">
          <label for=\"first\">First:</label><input type=\"text\" name=\"first\" required autofocus/><br />
          <label for=\"second\">Second:</label><input type=\"text" name=\"second\" required/><br />
          <input type=\"submit\" value=\"Click\" />
         </div>
       </form>
      </body>

     </html>
      ` );
    return res.end();
};