package com.revature.Social.Network.controllers;

import com.revature.Social.Network.models.User;
import com.revature.Social.Network.services.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = {"http://localhost:4200"}, allowCredentials = "true")
public class UserController {
    Logger logger = Logger.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    public UserController(UserService userService) {
    }

    @GetMapping
    public List<User> getAllUser(){
        return this.userService.getAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return  userService.createUser(user);
    }


    @PutMapping
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }
    @DeleteMapping("{userId}")
    public String deleteUser(@PathVariable Integer userId){
        userService.deleteUser(userId);

        return "the user with the id" + userId + "was successfully deleted";
    }


    @GetMapping("{username}")
    public User getUserGivenUsername(@PathVariable String username){
        return this.userService.getUserGivenUsername(username);
    }
}
