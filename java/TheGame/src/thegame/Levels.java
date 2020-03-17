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
public class Levels {
    private Levels[] numLevels = new Levels[100];
    
   private int level;
   private long experienceToNextLevel;
   
   public void levelDetails() {
       
       for (int i = 0; i < 100; i++) {
       long previousExp; 
           if (i == 0) {
                long experience =  50;
                Levels levelStats = new Levels();
                levelStats.level = i+1;
                levelStats.experienceToNextLevel = experience;
                numLevels[i] = levelStats;
//                System.out.println("Level " + levelStats.level + " exp: " + levelStats.experienceToNextLevel); 
           }
           else {
               int previousIndex = i-1;
               previousExp = numLevels[previousIndex].experienceToNextLevel;
               long experience =  previousExp + 350;
                  
                Levels levelStats = new Levels();
                levelStats.level = i;
                levelStats.experienceToNextLevel = (int) experience;
                numLevels[i] = levelStats;
//                System.out.println("Level " + levelStats.level + " exp: " + levelStats.experienceToNextLevel);    
           }
           
           
       }
   }

       
   public long getMaxExp(int level) {
       int index = level - 1;
       return numLevels[index].experienceToNextLevel;
   }
}



