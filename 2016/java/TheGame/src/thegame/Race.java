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
public class Race {
    private static final String[] race = {"Human", "Dwarf", "Elf", "Catpeople", "Crabpeople", "Gelatinous Cube"};
        
    public boolean checkRace(String input) {
        if (input.length() > 0) {
            input = input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
        }
         boolean findMatch = race.equals(input);
        return findMatch;
    }
}



