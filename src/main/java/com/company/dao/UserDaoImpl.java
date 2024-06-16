package com.company.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.company.util.DBUtil;

public class UserDaoImpl implements UserDao{

	@Override
	public boolean isValidUser(String user, String pass) {
		String query = "SELECT * FROM users WHERE username = ? AND password = ?";
   	 try (Connection connection = DBUtil.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(query)) {

           preparedStatement.setString(1, user);
           preparedStatement.setString(2, pass);

           ResultSet resultSet = preparedStatement.executeQuery();
//           System.out.println("Query is up and running");
           return resultSet.next();
          
       } catch (SQLException e) {
           e.printStackTrace();
           return false;
       }
	}

	@Override
	public boolean addUser(User user) {
		 String query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

	        try (Connection connection = DBUtil.getConnection();
	             PreparedStatement preparedStatement = connection.prepareStatement(query)) {

	            preparedStatement.setString(1, user.getUsername());
	            preparedStatement.setString(2, user.getEmail());
	            preparedStatement.setString(3, user.getPassword());

	            int rowsAffected = preparedStatement.executeUpdate();
	            System.out.println("User Apna Holiya !!");

	            return rowsAffected > 0;
	        } catch (SQLException e) {
	            e.printStackTrace();
	            return false;
	        }
	}

}
