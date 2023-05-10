/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zork;

import java.util.Scanner;

/**
 *
 * @author izzis
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Welcome to Zork!\n>");

        Scanner scanner = new Scanner(System.in);
        String inputString = scanner.nextLine();

        if ("QUIT".equalsIgnoreCase(inputString)) {
            System.out.println("Thank you for playing!");
            System.exit(0);
        }
    }
}
