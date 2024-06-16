<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang ='en'>
    <head>
    <%String username = (String) session.getAttribute("username"); %>
        <meta charset = "UTF=8">
        <meta name="viewport" content="width=device-width , intial-scale=1.0">
        <title>Welcome,<%= username %>! </title>
        <link rel="stylesheet" href="welcomestar.css">
        <script src = "https://kit.fontawsome.com/a076d05399.js"></script>
    </head>
<body>
    <%
        // Retrieve the session object
        HttpSession session1 = request.getSession(false);

        // Check if the session is not null and the username attribute is set
        if (session1 != null && session1.getAttribute("username") != null) {
            // Get the username from the session
    %>
        <!-- start quiz button -->
        <div class="startbutton"><button>Take the Quiz</button></div>
        <!-- information box -->
        <div class="info_box">
            <div class="info_title">
            <h1>Welcome, <%= username %>!</h1>
            </div>
        <div class="info_list">
        	<div class="info"><span>Some Rules Of This Quiz </span></div>
            <div class="info">ONCE YOU SELECT YOUR ANSWER YOU CANT <span>RESELECT</span></div>
            <div class="info">TAKE YOUR TIME TO ANSWER THE QUESTIONS</div>
            <div class="info">PLEASE DO NOT EXIT THE QUIZ UNTILL FINISHED</div>
            <div class="info">YOU GAIN POINTS ON THE BASIS OF YOUR CORRECT OPTIONS</div>
        </div>
        <div class="buttons">
            <a href ="logout.jsp"><button class="quit">Exit Quiz</button></a>
            <a href="quiz.jsp"><button class="restart">Continue</button></a>
        </div>
    </div>

    <%
        } else {
            // Redirect to the login page if the session is not valid
            response.sendRedirect("login.jsp");
        }
    %>


</body>
</html>