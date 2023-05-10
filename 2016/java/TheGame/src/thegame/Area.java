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
public class Area {
    protected static Room entranceRoom() {
    int num;
        Room entranceRoom;
        entranceRoom = new Room();
        entranceRoom.roomName = "Chow Hall";
        entranceRoom.roomDescription = "You look around the room. This is the lunch room.";
        entranceRoom.roomNumber = 1;
        entranceRoom.numRoomDirections = (int) (Math.random() * 5 );
        if (entranceRoom.roomNumber == 0) {
            entranceRoom.roomNumber = 1;
        }
        if (entranceRoom.numRoomDirections == 0) {
            entranceRoom.numRoomDirections = 1;
        }
        
        for (int i = 0; i < entranceRoom.numRoomDirections;i++) {
            num = (int) Math.round(((Math.random() * 9)));
            entranceRoom.roomDirections[i] = Directions.getDirection(num);
            }

//        String lookRoom;
//        lookRoom = "You are in: " + entranceRoom.roomName + System.lineSeparator();
//        lookRoom += entranceRoom.roomDescription + System.lineSeparator();
//        lookRoom += "The current exits are: ";
//        for (int i = 0; i <= entranceRoom.numRoomDirections -1;i++) {
//            if (i == entranceRoom.numRoomDirections - 1) {
//                lookRoom += entranceRoom.roomDirections[i];
//            } else {
//            lookRoom += entranceRoom.roomDirections[i] + ", ";    
//            }
//            
//        }
//        System.out.println(lookRoom);
        return entranceRoom;
    }
//    
//    protected String moveRoom() {
//        
//    }
    //entranceRoom.roomNumber =  (int) Math.round(Math.random() * (100-50 + 1));
    
    
}
