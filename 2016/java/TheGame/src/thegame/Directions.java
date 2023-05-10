/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package thegame;

/**
 *
 * @author Administrator
 */
public class Directions {
    private static final String[] directions = {
    "North",
    "South",
    "East",
    "West",
    "Northwest",
    "Southwest",
    "Northeast",
    "Southeast",
    "In",
    "Out",
};
    public static String getDirection(int index) {
        return directions[index];
    }
    
    public static String checkDirection(String direction) {
        String intendedDirection = "Not a direction";
        switch (direction.toLowerCase()) {
            case "n":
            case "north":
                intendedDirection = directions[0];
                break;
            case "s:":
            case "south":
                intendedDirection = directions[1];
                break;
            case "east":
                intendedDirection = directions[2];
                break;
            case "west":
                intendedDirection = directions[3];
                break;
            case "northwest":
                intendedDirection = directions[4];
                break;
            case "southwest":
                intendedDirection = directions[5];
                break;
            case "northeast":
            intendedDirection = directions[6];
                break;
            case "se":
            case "southeast":
                intendedDirection = directions[7];
                break;
            case "in":
                intendedDirection = directions[8];
                break;
            case "out":
                intendedDirection = directions[9];
                break;
        }
        
        return intendedDirection;    
    }
}
