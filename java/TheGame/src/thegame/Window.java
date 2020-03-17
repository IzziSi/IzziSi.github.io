/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package thegame;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Container;
import javax.swing.JFrame;
import javax.swing.JTextArea;
import javax.swing.JTextField;

/**
 *
 * @author Administrator
 */
public class Window {
    
    JFrame windowFrame;
    Container con;
    JTextArea outputScreen;
    JTextField inputField;
    public Window() {
        windowFrame = new JFrame();
        windowFrame.setSize(800, 600);
        windowFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        windowFrame.getContentPane().setBackground(Color.black);
        windowFrame.setVisible(true);
        con = windowFrame.getContentPane(); 
        
        outputScreen = new JTextArea();
        outputScreen.setSize(800, 400);
        outputScreen.setBackground(Color.black);
        outputScreen.setForeground(Color.white);
        outputScreen.setEditable(false);
        con.add(outputScreen);
        
        inputField = new JTextField();
        inputField.setSize(800, 200);
        //inputField.setLayout((new FlowLayout(FlowLayout.LEFT)));
        inputField.setBackground(Color.white);
        inputField.setForeground(Color.black);
        con.add(inputField,BorderLayout.SOUTH);
        windowFrame.repaint();
//        
//        inputField = new JTextArea();
//        inputField.setSize(800, 100);
//        inputField.setBackground(Color.white);
//        
//        con.add(inputField);
    }
}
