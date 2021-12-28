import React, {useEffect, useRef, useState} from 'react';
import Card from './Cards'
import '../scss/board.scss'
import image from '../assets/images';

type BoardProps = {
    setMoves: React.Dispatch<React.SetStateAction<number>>,
    finishGameCB: () => void,
    idCards : Array<number>
}

function Board(props: BoardProps) {
    const [returnCards, setReturnCards] = useState<Array<number>>([])
    const [initialCards, setInitialCards] = useState<Array<number>>([])
    const [disableAllCards, setdisableAllCards] = useState<boolean>(false)
    const timeout = useRef<NodeJS.Timeout>(setTimeout(() => {}, 0));

    const disable = () => {
        setdisableAllCards(true)
    }

    const enable = () => {
        setdisableAllCards(false)
    }

    const checkCompletion = () => {
        if (initialCards.length === props.idCards.length){
            props.finishGameCB()
        }
    }

    const evaluate = () => {
        const [first, second] = returnCards
        enable()

        if ((first % 6 + 1) === (second % 6 + 1)) {
            timeout.current = setTimeout(() => {
                setInitialCards((prev) => [...prev, first, second])
                setReturnCards([])
                return      
            },100)
        }

        timeout.current = setTimeout(() => {
            setReturnCards([])      
        },500)
    }

    const cardClick = (id:number) => {
        if (returnCards.length === 1) {
            setReturnCards((prev) => [...prev, id])
            props.setMoves((moves) => moves+1)
            disable()
        } else {
            setReturnCards([id])
        }
    }

    useEffect(() => {
        let timeout:NodeJS.Timeout = setTimeout(() => {}, 0)
        if (returnCards.length === 2) {
            timeout = setTimeout(evaluate, 400)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [returnCards])

    useEffect(() => {
        checkCompletion()  
    },[initialCards])

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
                            image={image[i % 6 + 1]}
                            id={i}
                            onClick={cardClick}
                            isFlipped={isFlipped(i)}
                            isDisable={disableAllCards}
                            isInactive={isInactive(i)}/>
                        )
                })
            }
        </div>
    )
}

export default Board;