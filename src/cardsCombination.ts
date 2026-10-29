
export type  Taught = 'Coeur' | 'Carreau' | 'Pique' | 'Trefle';
export type CardValue= 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export interface Card {
  value: CardValue;
  taught: Taught;
}

export type Hand = Card[]
/*


const myCard: Card = {
  valeur: 14,       // 
  enseigne: 'coeur'  // 
};

*/
export function combineCards(hand: Hand[]){
    let result = 0;
    if(hand.length == 0 ){
        return result;
    }
    //passer sur les listes 
       for(let i=0;i< hand.length;i++){
        for(let j=0;j< hand[i]?.length!;j++){
            if(hand[j]?.length! != 5 ){
                result = -1;
                return result;
            }
        }
            
    }
    

    return result
}

export function color(card: Card[]){

    let colorCards = 0;
    let sameColor=true;
    let firstColor = card[0]?.taught
        if(
            firstColor != card[1]?.taught
        ){
            return false
        }
    
    

}

export function carre(card: Card[]){

    let nbr = 0;
    let firstVal = card[0]?.value
    let result = true;
    for(let j=1;j<= card.length;j++){

            if( card[j]?.value != firstVal){
                nbr++;
            }
        }

        if(nbr == 2){
            result = false
        }
        return false;
    

}