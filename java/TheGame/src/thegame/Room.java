/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package thegame;
import java.util.Random;
import java.lang.Math;
/**
 *
 * @author Administrator
 */
public class Room {
    protected int roomNumber;
    protected int numRoomDirections;
    protected String roomName;
    protected String roomDescription;
    protected String[] roomDirections = new String[9];
    protected String[] roomItems = new String[20]; //will expand at a later date

    public static String look(Room currentRoom) {
        String lookRoom;
        lookRoom = "You are in: " + currentRoom.roomName + System.lineSeparator();
        lookRoom += currentRoom.roomDescription + System.lineSeparator();
        lookRoom += "The current exits are: ";
        for (int i = 0; i <= currentRoom.numRoomDirections -1;i++) {
            if (i == currentRoom.numRoomDirections - 1) {
                lookRoom += currentRoom.roomDirections[i];
            } else {
            lookRoom += currentRoom.roomDirections[i] +  ", ";    
            }
            
        }
        System.out.println(lookRoom);
        return lookRoom;
    }
    
    public static void leaveRoom(Room currentRoom, String inputDirection, Player thisPlayer) {
        inputDirection = Directions.checkDirection(inputDirection);
        if (currentRoom.roomDirections.equals(inputDirection)) {
            System.out.println(inputDirection);
            thisPlayer.setRoomNum(1);
        //walk to new room
        } else {
            String noDirection = "There is no room to the " + inputDirection;
            
            System.out.println(noDirection);
            //return noDirection;
        }
    }
          
}
