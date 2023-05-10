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
public class Hometown {
    private static Hometown[] hometown = new Hometown[6];
    private String name; 
    private String description;
    private int population;
    private String race;
    
    public static final void hometownDetails() {
        for (int i = 0;i < hometown.length;i++) {
            Hometown town = new Hometown();
            switch (i) {
                case 0:
                    town.name = "Yorkville";
                    town.description = "Just a town of mangly Humans.";
                    town.population = 0;
                    town.race = "Human";
                    hometown[i] = town;
                    break;
                case 1:
                    town.name = "Rivedhol";
                    town.description = "A town of elves.";
                    town.population = 0;
                    town.race = "Elf";
                    hometown[i] = town;
                    break;
                case 2:
                    town.name = "Menbihr";
                    town.description = "Town o Dwarfs";
                    town.population = 0;
                    town.race = "Dwarf";
                    hometown[i] = town;
                    break;
                case 3:
                    town.name = "Chal Caves";
                    town.description = "Dark, moist, gelatinous.";
                    town.population = 0;
                    town.race = "Gelatinous Cube";
                    hometown[i] = town;
                    break;
                case 4:
                    town.name = "Soren Isles";
                    town.description = "Snip snip.";
                    town.population = 0;
                    town.race = "Crabpeople";
                    hometown[i] = town;
                    break;
                case 5:
                    town.name = "Yarnoppolis";
                    town.description = "An ameowsing place to live. Lots of yarn.";
                    town.population = 0;
                    town.race = "Catpeople";
                    hometown[i] = town;
                    break;
            }
        }
    }
      public String findHometown(String findRace) {
        for (Hometown hometown1 : hometown) {
            if (hometown1.race.toLowerCase().equals(findRace.toLowerCase())) {
                findRace = hometown1.name;
            }
        }
          return findRace;
      }
}

