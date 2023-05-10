/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package blackjack;
import java.util.Random;
import java.util.ArrayList;
/**
 *
 * @author izzis
 */
public class Deck {
        public ArrayList<Card> cards;
        
        public Deck() {
           cards = new ArrayList<>();
           String[] Suits = {"Hearts", "Clubs", "Spades","Diamonds"};
           String[] Faces = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9",
               "10","Jack", "Queen", "King"};

           int[] Values = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10};
            for (int x = 0; x <= 3; x++) {
                for (int i = 0; i < 13; i++) {
                    Card card = new Card();
                    card.Face = Faces[i];
                    card.Value = Values[i];
                    card.Suit = Suits[x];
                    cards.add(card);
                }
           }
         // shuffleDeck();
        }
        
        public void shuffleDeck() {
           ArrayList<Card> shuffledDeck;
           shuffledDeck = new ArrayList<>();
           Random rand = new Random();
           int placeholderNum;
           for (int i = cards.size()-1; i >= 0;i--) {
               if (i == 0) {
                   placeholderNum = 0;
               } else {
                   placeholderNum = rand.nextInt(i);
               }
               
               shuffledDeck.add(cards.get(placeholderNum));
               cards.remove(placeholderNum);
           }
           cards.clear();
           cards.addAll(shuffledDeck);
        }
        

        public void printDeck() {
            for (int p=0; p < cards.size(); p++) {
                System.out.println(
                cards.get(p).Face + " ( " + 
                cards.get(p).Value + ") of " +
                cards.get(p).Suit 
                );
            }
            
        }
            //dealer needs to be dealt last. please fix.
        public void deal(Player[] players, Deck deck) {
            String message = "";
            for (int handsDealt = 0;handsDealt < 2;handsDealt++) {
                           
                for (Player player : players) {
                    player.hand.add(deck.cards.get(0));
                    deck.cards.remove(0);
                    message = player.playerName + " is dealt";
                    if (handsDealt == 1 && player.playerID == 0) {
                        message += ".";
                    } else {
                        message += " " + player.hand.get(handsDealt).Face;
                        message += " of " + player.hand.get(handsDealt).Suit + ".";
                    }
                    System.out.println(message);
                }
            }
            message = "All hands have been dealt.\nDeck has " + deck.cards.size() + " cards left.";
            
            
            System.out.println(message);
        
        }
}

