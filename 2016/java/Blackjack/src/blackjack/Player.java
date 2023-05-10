/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package blackjack;
import java.util.ArrayList;
//import java.util.Random();
/**
 *
 * @author izzis
 */
public class Player {
    
    public ArrayList<Card> hand;
    public int chips;
    public String playerName;
    public int playerID;


    
    public Player(String name) {
        hand = new ArrayList<Card>();
        chips = 100;
        playerName = name;
        playerID = 0;
    }
    
    public void hit(Card card) {
        hand.add(card);
    }

    public int calcMaxHandTotal() {
        int total = 0;
                
        for(int i = 0; i < hand.size();i++) {
           if (hand.get(i).Value == 1 && (total + 11) > 21) {
           total += hand.get(i).Value;
           
        } else if (hand.get(i).Value == 1) { 
               total+= 11;
           } else {
            total += hand.get(i).Value;
        }}
        
        return total;
    }
}

/*
int handTotal = calcMaxHandTotal();
        System.out.println(handTotal);
        if (handTotal > 21) {
            System.out.println("Bust!!!");
        }
*/