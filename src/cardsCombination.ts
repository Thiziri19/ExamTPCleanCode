
export type  Taught = 'Coeur' | 'Carreau' | 'Pique' | 'Trefle';
export type CardValue= 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export interface Card {
  value: CardValue;
  taught: Taught;
}
/*


const myCard: Card = {
  valeur: 14,       // 
  enseigne: 'coeur'  // 
};

// 
const nomsValeurs: Record<ValeurCarte, string> = {
  2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10",
  11: "Valet", 12: "Dame", 13: "Roi", 14: "As"
};
*/
export function combineCards(hand: Card[][]){
    let result = 0;
    if(hand.length == 0 ){
        return result;
    }
}