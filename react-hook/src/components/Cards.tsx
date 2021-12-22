import './Cards.scss';
import classnames from 'classnames';


const back= 'https://i.pinimg.com/originals/c5/b1/f3/c5b1f35d29702f1d9cb49f5760029603.png';
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


type CardProps = {
    image: string,
    id: number,
    isFlipped: boolean,
    onClick: (id:number) => void,
    isInactive: boolean
}
function Cards(props: CardProps) {


    const clickHandler = () => {
        !props.isFlipped && props.onClick(props.id)
    }
    return (
        <div
            className={classnames("card", {
                "is-flipped": props.isFlipped,
                "is-inactive": props.isInactive
            })}
            onClick={clickHandler}
        >
            <div className="card-front">
                <img src={props.image} alt="card front"/>
            </div>
            <div className="card-back">
                <img src={back} alt="card back"/>
            </div>
        </div>
    );
}

export default Cards;
