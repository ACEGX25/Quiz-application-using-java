<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="stylesheet" type="text/css" href="loginsty.css">
</head>
<body>
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" action="loginservlet" method="post">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="username" class="login__input" name="username" placeholder="User name " required>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" name="password" placeholder="Password" required>
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
					
				</button>				
								<a href="index.html" class="button login__back-to-home">
    <span class="button__text">Back To Home</span>
    <i class="button__icon fas fa-chevron-right"></i>
</a>
			</form>
			<% String error = request.getParameter("error"); %>
<% if (error != null && error.equals("1")) { %>
<div class="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    <p align="center">Invalid Username or password, please retry</p>
</div>
<% } %>
		<% String rs = request.getParameter("signup"); %>
<% if (rs != null && rs.equals("success")) { %>
<div class="galert">
    <span class="closebtn2" onclick="this.parentElement.style.display='none';">&times;</span>
    <p align="center">Sign up success</p>
</div>
<% } %>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</body>
</html>

