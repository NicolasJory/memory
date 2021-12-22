import {useEffect, useRef, useState} from 'react';
import Card from './Cards'
import './Board'
type BoardProps = {
    idCards : Array<number>
}
const front= [
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SWSH7/SWSH7_FR_49.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SM75/SM75_FR_1.png' ,
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SM10/SM10_FR_33.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/PL3/PL3_FR_93.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SM10/SM10_FR_75.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/DP7/DP7_FR_19.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SM9/SM9_FR_15.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SM8/SM8_FR_133.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SM9/SM9_FR_17.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/XY3/XY3_FR_36.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/DP3/DP3_FR_87.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SWSH4/SWSH4_FR_26.png',
'https://assets.pokemon.com/assets/cms2-fr-fr/img/cards/site_search/SMP/SMP_FR_SM145.png'
]

function Board(props: BoardProps) {
    const [returnCards, setReturnCards] = useState<Array<number>>([])
    const [initialCards, setInitialCards] = useState<Array<number>>([])
   
    const cardClick = (id:number) => {
        if (returnCards.length === 1) {
            setReturnCards((last) => [...last, id])
        } else {
            setReturnCards([id])
        }
    }

    const isFlipped = (id: number) => {
        return initialCards.includes(id) || returnCards.includes(id)
    }

    const isInactive = (id: number) => {
        return initialCards.includes(id)
    }
    return (
        <div className={'board'}>
            {
                props.idCards.map(i => {
                    return (
                        <Card 
                            key={i}
                            image={front[i]}
                            id={i}
                            isFlipped={isFlipped(i)}
                            isInactive={isInactive(i)}
                            onClick={cardClick}/>
                        )
                })
            }
        </div>
    )
}

export default Board;