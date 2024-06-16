<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<body>
    <%
        // Retrieve the session object
        HttpSession session1 = request.getSession(false);
    if(session1 != null ){
    	session1.invalidate();
    }
            response.sendRedirect("index.html");
        
    %>


</body>
</html>