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
public class Expenses {
    private int userID;
    private String title;
    private int amount;
    private Date paymentDate;
    private String note;
    private int income;
    
    public void setUserID(int id) {
        this.userID = id;
    }
    
    public int getUserID() {
        int id = this.userID;
        return id;
    }
    
    public void setTitle(String name) {
        this.title = name;
    }
    
    public String getTitle() {
        String name = this.title;
        return name;
    }
    
    public void setAmount(int cost) {
        this.amount = cost;
    }
    
    public int getAmount() {
        int cost = this.amount;
        return cost;
    }
    
    public void setIncome(int monthlyIncome) {
        this.income = monthlyIncome;
    }
    
    public int getIncome() {
        int monthlyIncome = this.income;
        return monthlyIncome;
    }
    
    public void setNote(String memo) {
        this.note = memo;
    }
    
    public String getNote() {
        String memo = this.note;
        return memo;
    }

    public void setPaymentDate(Date inputDate) {
        this.paymentDate = inputDate;
    }
    
    public Date getPaymentDate() {
        Date theDate = this.paymentDate;
        return theDate;
    }
    
    
}
