/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package thegame;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Container;
import java.util.Scanner;
import javax.swing.JFrame;
import javax.swing.JTextArea;
import javax.swing.JTextField;



/**
 *https://www.youtube.com/watch?v=G5yr4sekAI0&vl=en 12:32
 * @author Administrator
 */
public class TheGame {

    /**
     * @param args the command line arguments
     */
    
    /*
    -create a working window
    -Need to build Calendar to check birthday vs. date and update player age
    -build guilds, abilities, setGuild (player class)
    -create a temp hardcoded map (create Area class "types")
    -create NPCs
    */
    
    
    public static void main(String[] args) {
        Window window = new Window();
        

    }
    
    public TheGame() {
       
        
        Player currentPlayer = new Player();
        currentPlayer.beginGame();
    }

}
    
