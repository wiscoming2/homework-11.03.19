<html>
    <head>
            <title>html rocks!!</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
            <style>
                table, th, td {
                  border: 1px solid black;
                  border-collapse: collapse;
                }
                th, td {
                  padding: 5px;
                }
                th {
                  text-align: right;
                }
            </style>
    </head>
    <body>
        <table border="3">
            <tr style="background: burlywood">
                <th>id: <input type="number" id="IDinput"/></th>
                <th>title: <input type="text" id="IDtitle"/></th>
                <th>start: <input type="text" id="IDstart"/></th>
                <th>end: <input type="text" id="IDend"/></th>
                <th>
                    <select id="difficultylevel">
                        <option value="easy">easy</option>
                        <option value="normal">normal</option>
                        <option value="hard">hard</option>
                    </select>
                </th>
                <th>
                    <input type="checkbox" name="isItDual" id="IDdual" value="dual">dual?<br>
                </th>
            </tr>
            <tbody id="body1">
                <tr>
                    <td>2</td>
                    <td>app</td>
                    <td>15.01.1998</td>
                    <td>31.03.1998</td>
                    <td>hard</td>
                    <td>dual</td>   
                </tr>
            </tbody>
        </table>
        <button onclick="add()">add</button>
        <script>
            function Course(_id , _title , _start , _end , _level , _dual)
            {
                this.id = _id
                this.title = _title
                this.start = _start
                this.end = _end
                this.level = _level
                this.dual = _dual
            }
            function add()
            {
                var x = $('#IDinput').val()
                var y = $('#IDtitle').val()
                var z = $('#IDstart').val()
                var k = $('#IDend').val()
                var f = $("#difficultylevel option:selected").text()
                var a = $('#IDdual').is(':checked')
                var course = new Course(x , y , z , k , f , a)
                addRow(course)
            }
            function addRow(c)
            {
                $('#body1').append(`<tr><td>${c.id}</td><td>${c.title}</td><td>${c.start}</td><td>${c.end}</td><td>${c.level}</td><td>${c.dual}</td></tr>`)
            }
        </script>
    </body>
</html>
