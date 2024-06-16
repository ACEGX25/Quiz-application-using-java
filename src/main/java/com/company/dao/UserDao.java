package com.company.dao;

public interface UserDao {

	boolean isValidUser(String user, String pass);

	boolean addUser(User user);

}
