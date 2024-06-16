<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang ='en'>
    <head>
        <meta charset = "UTF=8">
        <meta name="viewport" content="width=device-width , intial-scale=1.0">
        <title>QUIZ APPLICATION </title>
        <link rel="stylesheet" href="styleq.css">
        <script src = "https://kit.fontawsome.com/a076d05399.js"></script>
    </head>
    <body>
     <%
        // Retrieve the session object
        HttpSession session1 = request.getSession(false);

        // Check if the session is not null and the username attribute is set
        if (session1 != null && session1.getAttribute("username") != null) {
            // Get the username from the session
            String username = (String) session.getAttribute("username");
    %>
        <div class="app">
            <h1>PANCHAYAT Quiz</h1>
            <div class="quiz">
                <h2 id="question">Question Here</h2>
                <div id="answerb">
                    <button class="btn">
                        Answer 1
                    </button>
                    <button class="btn">
                        Answer 2
                    </button>
                    <button class="btn">
                        Answer 3
                    </button>
                    <button class="btn">
                        Answer 4
                    </button>
                </div>
                <button id="next-btn">Next</button>
            </div>
        </div>
        <script src="script.js">
        </script>
          <%
        } else {
            // Redirect to the login page if the session is not valid
            response.sendRedirect("login.jsp");
        }
    %>
    </body>
</html>