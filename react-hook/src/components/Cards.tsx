import '../scss/cards.scss';
import classnames from 'classnames';


type CardProps = {
    image: string,
    id: number,
    isDisable: boolean,
    isFlipped: boolean,
    isInactive: boolean,
    onClick: (id:number) => void,
}
function Cards(props: CardProps) {

    const back= 'https://i.pinimg.com/originals/c5/b1/f3/c5b1f35d29702f1d9cb49f5760029603.png';

    const clickHandler = () => {
        !props.isFlipped && !props.isDisable && props.onClick(props.id)
    }
    return (
        <div
            className={classnames("card", {
                "is-flipped": props.isFlipped,
                "is-inactive": props.isInactive,
                "is-disable": props.isDisable
            })}
            onClick={clickHandler}
        >
            <div className="card-front">
                <img src={back} alt="card front"/>
            </div>
            <div className="card-back">
                <img src={props.image} alt="card back"/>
            </div>
        </div>
    );
}

export default Cards;
