<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Sign up</title>
<link rel="stylesheet" type="text/css" href="sign.css">
</head>
<body>
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" action="signupservlet" method="post">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" name="username" placeholder="User name ">
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-email"></i>
					<input type="text" class="login__input" name="email"  placeholder="Email ">
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" name="password" placeholder="Password">
				</div>
				<button class="button login__submit">
					<span class="button__text">Sign up Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
					
				</button>
				<a href="index.html" class="button login__back-to-home">
    <span class="button__text">Back To Home</span>
    <i class="button__icon fas fa-chevron-right"></i>
</a>
				
				
			</form>
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
