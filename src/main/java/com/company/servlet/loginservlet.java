package com.company.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import com.company.dao.UserDaoImpl;
import com.company.dao.UserDao;

/**
 * Servlet implementation class loginservlet
 */
public class loginservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static UserDao userDao = new UserDaoImpl();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public loginservlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String user= request.getParameter("username");
		String pass= request.getParameter("password");
		if(userDao.isValidUser(user,pass)) {
			HttpSession session = request.getSession();
			session.setAttribute("username", user);
			response.sendRedirect("welcome.jsp");
		}
		else {
			response.sendRedirect("login.jsp?error=1");
			System.out.println("Error aa gya");
		}
	}

}
