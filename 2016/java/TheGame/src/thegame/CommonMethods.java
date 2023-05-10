/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package thegame;

import java.util.Scanner;
import java.util.regex.Pattern;

/**
 *
 * @author Administrator
 */
public class CommonMethods {
    protected static boolean chkAsString(String inputString) {
        Pattern p = Pattern.compile("^[a-zA-z]*$");
        boolean noSpecialChar = p.matcher(inputString).find();
        return noSpecialChar;
    }
    protected static boolean chkAsInteger(String inputString) {
        Pattern p = Pattern.compile("^[0-9]*$");
        boolean noSpecialChar = p.matcher(inputString).find();
        return noSpecialChar;
    }
}
