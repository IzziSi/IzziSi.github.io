/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package thegame;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Calendar;
import java.util.Scanner;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JTextPane;
/**
 *
 * @author Administrator
 */
public class Player {
        private String lastName;
        private int level;
        private double experience;
        private String race;
        private String hometown;
        private int age;
        private String firstName;
        private int roomNum;
        private String birthday;
        private String description;
        private int guildID;
        
        
    public Player() {
        guildID = 00;
        level = 1;
        experience = 0;
        age = 16;
        roomNum = 1;
        description = "stands here.";
    }
    
    public void setFirstName(String name) {
        name = name.substring(0,1).toUpperCase() + name.substring(1);
        this.firstName = name;
    } 

    public String getFirstName() {
        return firstName;
    }
    
    public void setGuild(int ID) {
        this.guildID = ID; 
    }
    
    public void setLastName(String name) {
        name = name.substring(0,1).toUpperCase() + name.substring(1);
        this.lastName = name;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setAge(int personAge) {
        this.age = personAge;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setBirthday(int age) {
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.YEAR, -age);
        Date date = new Date();
        date = cal.getTime();
        SimpleDateFormat outputFormat = new SimpleDateFormat("MMMM dd yyyy");
        this.birthday = outputFormat.format(date);
    }
    
        
    public void setExperience(double exp) {
        Levels maxExp = new Levels();
        maxExp.levelDetails();
        double percentExp;
        double totalExp = maxExp.getMaxExp(level);
        percentExp = ((exp/totalExp)*100);
        this.experience = percentExp;
    }
    
    public double getExperience() {
        return experience;
    }
    
    public void setHometown(String findRace) {
     Hometown town = new Hometown();
     Hometown.hometownDetails();
     this.hometown = town.findHometown(findRace);
    }
    
    public String getHometown() {
        return hometown;
    }
    
    public void setLevel(int lvl) {
        this.level = lvl;
    }
    
    public int getLevel() {
        return level;
    }
    
    public void setRace(String personRace) {
        this.race = personRace;
    }
    
    public String getRace() {
        return race;
    }
    
    public void checkRace(String playerInput) {
        Scanner input = new Scanner(System.in);
        Race raceList = new Race();
        
        boolean chkRaceInput = raceList.checkRace(playerInput);
        while (chkRaceInput == false) {
            
            switch(playerInput.toLowerCase()) {
                case "human":
                    setRace("Human");
                    chkRaceInput = true;
                    break;
                case "dwarf":
                    setRace("Dwarf");
                    chkRaceInput = true;
                    break;
                case "elf":
                    setRace("Elf");
                    chkRaceInput = true;
                    break;
                case "catpeople":
                    setRace("Catpeople");
                    chkRaceInput = true;
                    break;
                case "crabpeople":
                    setRace("Crabpeople");
                    chkRaceInput = true;
                    break;
                case "gelatinous cube":
                    setRace("Gelatinous Cube");
                    chkRaceInput = true;
                    break;
                case "cube":
                    setRace("Gelatinous Cube");
                    chkRaceInput = true;
                    break;
                case "gelatinous":
                    setRace("Gelatinous Cube");
                    chkRaceInput = true;
                    break;
                default:
                    System.out.println("Please select a race: Human, Dwarf, Elf, Catpeople, Crabpeople, Gelatinous Cube.");
                    playerInput = input.next();
            }
            
        }
    }

    public void setRoomNum(int num) {
        this.roomNum = num;
    }
    
    public int getRoomNum() {
        return roomNum;
    }

    public String getStats(Player player) {
        String message;
        message = "Name: " + this.firstName + " " + this.lastName + "\n";
        message += "Age: " + this.age + " years old. Born on " + this.birthday + ".\n";
        message += "Hometown: " + this.hometown + "\n";
        message += "Race: " + this.race + "\n";
        message += "Guild: " + this.guildID + "\n";
        message += "Level: " + this.level + " Experience: " + this.experience +"%\n";
        System.out.println(message);
        return message;
    }

     protected static void createPlayer() {
        Scanner input = new Scanner(System.in);
        String playerInput;
        Player player = new Player();
        System.out.println("Choose a first name.");
        int whileLoopIteration = 0;
        do {
            
            if (whileLoopIteration > 0) {
                System.out.println("Please only enter alphabetic letters.");
            }
            
            playerInput = input.next();
            whileLoopIteration++;
        } while (CommonMethods.chkAsString(playerInput) == false );
        
        player.setFirstName(playerInput);
        
        System.out.println("Welcome, " + player.getFirstName() + ". What is your last name?");
        
        whileLoopIteration = 0;
        do {
            if (whileLoopIteration > 0) {
                System.out.println("Please only enter alphabetic letters.");
            }
            playerInput = input.next();
            whileLoopIteration++;
        } while (CommonMethods.chkAsString(playerInput) == false );
        
        player.setLastName(playerInput);
        
        System.out.println(player.getFirstName() + " " + player.getLastName() + ", how old are you?");
        System.out.println("(Please enter a number from 1-50)");
        String chkAge = input.next();
        int playerAge = 0;
        do {
            try {
                playerAge = Integer.parseInt(chkAge);
            } catch (Exception e) {
                playerAge = 0;
            }
            
            if (playerAge > 50 || playerAge < 1) {
                System.out.println("Please enter a number from 1-50");
                chkAge = input.next();
            }
        } while (!CommonMethods.chkAsInteger(chkAge) || chkAge.equals("0"));
        
            
        player.setAge(playerAge);
        
        System.out.println("Select a race: Human, Dwarf, Elf, Catpeople, Crabpeople, Gelatinous Cube.");
        playerInput = input.next();
        player.checkRace(playerInput);
        player.setLevel(1);
        player.setExperience(0);
        player.setHometown(player.getRace());
        player.setBirthday(playerAge);
        player.getStats(player);
        
        System.out.println("Character created!");
        player.setRoomNum(1);
        Room currentRoom = Area.entranceRoom();
        Room.look(currentRoom);
    }
     
     public void beginGame() {
        Scanner input = new Scanner(System.in);
        //inputScreen.setText("Type 'New' to create a new character or type your first and last name to log in.");
        System.out.println("Type 'New' to create a new character or type your first and last name to log in.");
        String playerInput = input.nextLine();
        
        if (playerInput.toLowerCase().equals("new")) {
            Player.createPlayer();
        } else {
            String[] fullName = playerInput.split(" ");
            for (String name : fullName) {
                System.out.println("Name: " + name);
                //inputScreen.setText("Name: " + name);
                //Temp work around til adding in a database
            }
        }
     }
}

