/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mentorbudget;
import java.util.ArrayList;
/**
 *
 * @author izzis
 */
public class Mentor {
    private int mentorID;
    private ArrayList<User> mentee = new ArrayList<User>();
    
    public void setMentorID(int id) {
        this.mentorID = id;
    }
    
    public int getMentorID() {
        int id = this.mentorID;
        return id;
    }
    
    public void addMentee(User getMentee) {
        this.mentee.add(getMentee);
    }
    
    public void removeMentee(User deleteMentee) {
        this.mentee.remove(deleteMentee);
    }
    
    
}
