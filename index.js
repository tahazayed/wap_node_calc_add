const express = require('express');

const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/simple-calc', (req, res, next) => {
    console.log('In the middleware!');
    res.send(
        `
      <!DOCTYPE HTML>
      <html>
       <head>
        <meta charset=\"utf-8\">
        <title>Simple Calculator</title>
        <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/calc.css\" />
       </head>
       
       <body>
       <h1>Simple Calculator Lab</h1>
        <form action=\"/calculate\" method=\"post">
        <fieldset>
        <legend class="light-border">Enter two numbers:</legend>

         <div class=\"main\">
          <label for=\"first\">First:</label><input type=\"text\" name=\"first\" required autofocus/><br />
          <label for=\"second\">Second:</label><input type=\"text" name=\"second\" required/><br />
          <label for=\"operation\">Operation:</label><select name="operation">
                                 <option value="add" selected>add</option>
                                 <option  value="subtract">subtract</option>
                                 <option  value="multiply">multiply</option>
                                 <option  value="divide">divide</option>
                                 </select><br />
          <input type=\"submit\" value=\"Submit" />
         </div>
         </fieldset>
       </form>
      </body>

     </html>
      `
    );

});
app.post('/calculate', (req, res, next) => {
    console.log(req.body);
    let result = 0;
    switch (req.body.operation) {
        case "add":
            result = parseInt(req.body.first) + parseInt(req.body.second);
            break;
        case "subtract":
            result = parseInt(req.body.first) - parseInt(req.body.second);
            break;
        case "multiply":
            result = parseInt(req.body.first) * parseInt(req.body.second);
            break;
        case "divide":
            result = parseInt(req.body.first) / parseInt(req.body.second);
            break;
    }
    res.redirect('/results/?result=' + result);
});

app.get('/results', (req, res) => {
    res.send(`<!DOCTYPE HTML>
    <html>
     <head><meta charset=\"utf-8\">
      <title>Calculator Web Site</title>
     </head>
     <body>
       <p>The Answer is: ${String(req.query.result)}</p><br />
       <a href=\"/simple-calc\">Another calculation</a>
     </body>
    </html> ` );
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});