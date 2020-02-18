/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mentorbudget;

/**
 *
 * @author izzis
 */
public class User {
    public String username;
    private String password;
    private int userID;
    private int mentorID;
    private int budgetID;
    
    public void setPassword(String pw) {
        this.password = pw;
    }
    
    public int getPassword() {
        return this.password
    }
    
    public void setUserID(int id) {
        this.userID = id;
    }
    
    public int getUserID() {
        int id = this.userID;
        return id;
    }
    
        public void setMentorID(int id) {
        this.mentorID = id;
    }
    
    public int getMentorID() {
        int id = this.mentorID;
        return id;
    }
    
        public void setBudgetID(int id) {
        this.budgetID = id;
    }
    
    public int getbudgetID() {
        int id = this.budgetID;
        return id;
    }
}
