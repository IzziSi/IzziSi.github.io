/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mentorbudget;
import java.util.Date;
/**
 *
 * @author izzis
 */
public class budget {
    private int userID;
    private String title;
    private int amount;
    private Date paymentDate;
    private String reoccuring;
    private String rollover;
    
    public void setUserID(int id) {
        this.userID = id;
    }
    
    public int getUserID() {
        int id = this.userID;
        return id;
    }
    
    public void setTitle(String memo) {
        this.title = memo;
    }
    
    public String getTitle() {
        String memo = this.title;
        return memo;
    }
    
    public void setAmount(int cost) {
        this.amount = cost;
    }
    
    public int getAmount() {
        int cost = this.amount;
        return cost;
    }
    
    public void setPaymentDate(Date theDate) {
        this.paymentDate = theDate;
    }
    
    public Date getPaymentDate() {
        Date theDate = this.paymentDate;
        
        return theDate;
    }
    
    public void setReoccuring(String reoccur) {
        this.reoccuring = reoccur;
    }
    
    public String getReoccuring(){
        return this.reoccuring;
    }
    
    public void getRollover(String roll) {
        this.rollover = roll;
    }
    
    public String getRollover() {
        return this.rollover;
    }

}
