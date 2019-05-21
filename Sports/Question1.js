<!DOCTYPE html>
<html>
<head>
    <title>Assignment01_Q1</title>
    <style>
        input {margin: 10px 5px;
        }   
              
        select {margin: 10px 5px 10px 5px;
    			padding: 5px 5px;
                border-radius: 3px;
                background-color: #FFFACD;
		cursor: pointer;}
                
        input[type=submit], input[type=reset] {
        background-color: #FFD700;
        color: black;
        border-radius: 3px;
        padding: 5px 8px;
        margin: 5px 5px;
        cursor: pointer;
}

input[type=submit]:hover , input[type=reset]:hover {
    background-color: #FF8C00;
}


div {
    border-radius: 5px;
	width:33em;
    background-color: #f2f2f2;
    padding: 10px;
}
    </style>
    <script language="JavaScript">
    function validate(form)
    { if (form.name.value == "" || form.surname.value == "" ||   form.email.value == "" || form.dob.value == "")
        { alert("Please fill out this field.")
            form.firstname.focus()
            form.firstname.select()
            form.lastname.focus()
            form.lastname.select()
            form.email.focus()
            form.email.select()
            form.dob.focus()
            form.dob.select()

            return false
        }
    return true}
    
</script>
</head>
	<body>
    <h1>Question 1</h1>
    <div>
    <form method="GET" action="http://www.it.murdoch.edu.au/cgi-bin/reply1.pl"
    onSubmit="return validate(this)">
        First Name:<br><input type="text" name="firstname" placeholder="Enter first name"required><br>
        Last Name:<br><input type="text" name="lastname"placeholder="Enter last name"required ><br>
        Email Address:<br><input type="email" name="email" placeholder="Enter email"required><br>
        Date of Birth:<br><input type="date" name="dob" required ><br>
        Select Your Favourite Sport
        <select name="sports" required><br>
		<option value=>-Select a sport-</option>
        <option value="athletics">Athletics</option>
        <option value="basketball">Basketball</option>
        <option value="cricket">Cricket</option>
        <option value="football">Football</option>
        <option value="hockey">Hockey</option>
        <option value="swimming">Swimming</option>
        <option value="tennis">Tennis</option>
        </select><br>
        <input type="Submit"> <input type="reset">
        
    </form>
	</div>
</body>

</html>