/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package blackjack;

import java.util.Scanner;

/**
 *
 * @author Administrator
 */
public class Game {

    Player[] playerList;
    
    Game() {

    }

    public void start() {
        int numPlayers = 0;
        Scanner playerInput = new Scanner(System.in);

        while (numPlayers < 2) {
            System.out.println("How many players?");

            try {
                numPlayers = playerInput.nextInt() + 1;
            } catch (Exception e) {
                System.out.println("Please enter a number.");
            }
        }

        playerList = new Player[numPlayers];

        for (int i = 0; i < numPlayers; i++) {
            if (i == 0) {
                Player user = new Player("Dealer");
                user.chips = 0;
                user.playerID = i;
                playerList[i] = user;
            } else if (i > 0) {
                System.out.println("What is your name?");
                String input = playerInput.next();
                String output;
                if (input.length() > 1) {
                    //Capitalizes first letter
                    output = input.substring(0, 1).toUpperCase() + input.substring(1);
                } else {
                    output = input;
                }
                Player user = new Player(output);
                user.chips = 200;
                user.playerID = i;
                System.out.println("Welcome, " + user.playerName + "! You have " + user.chips + " chips.");

                try {
                    Thread.sleep(1000);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                }
                playerList[i] = user;
            }
        }

        Deck dealerDeck = new Deck();
        dealerDeck.deal(playerList, dealerDeck);
    }

    public void hit(Player currentPlayer, Deck currentDeck) {
        currentPlayer.hand.add(currentDeck.cards.get(0));
        String message;
        message = currentPlayer.playerName + " was dealt ";
        message += currentDeck.cards.get(0).Face;
        message += " of " + currentDeck.cards.get(0).Suit + ".";
        currentDeck.cards.remove(0);
        int total = currentPlayer.calcMaxHandTotal();
        message += "\nTotal: " + total;

        System.out.println(message);
    }

    public void currentRound() {
        for (int i = 0;i > playerList.length;i++) {
            int index = i + 1;
            if (i == playerList.length-1) {
                index = 0;
            }
            
            int total = playerList[index].calcMaxHandTotal();
            System.out.println(playerList[index] + " has a total of " + total + ".");
            System.out.println("Hit or stay?");
            String playerInput;
            //finish hit or stay and calculations
        }
    }
//    public void stay(Player currentPlayer, Deck currentDeck) {
//        
//        currentPlayer.calcMaxHandTotal();
//    }
}
