/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculator;
import java.util.Scanner;
/**
 *
 * @author izzis
 */
public class Calculator {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner displayInput = new Scanner(System.in);
        System.out.println("0");
        String firstProblem;
        firstProblem = displayInput.nextLine();
        while (!firstProblem.contains("=")) {
            System.out.println(firstProblem);
            firstProblem = firstProblem + " " + displayInput.nextLine();}
            System.out.println(firstProblem);
    }

 }