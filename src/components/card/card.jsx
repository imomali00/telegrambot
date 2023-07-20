import './card.css'
import Button from "../button/button.jsx";
import {useState} from "react";

const Card = ({course, onAddItem, onRemoveItem}) => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(p => p + 1)
        onAddItem(course)
    }
    const handleDecrement  = () => {
        setCount(p => p - 1)
        onRemoveItem(course)
    }
    return (
        <div className="card">
            <span className={`${count !== 0 ? 'card__badge' : 'card__badge-hidden'}`}>{count}</span>

            <div className="image__container">
                <img src={course.Image} alt={course.title} width={'100%'} height={'230px'}/>
            </div>

            <div className="card__body">
                <h1 className="card__title">{course.title}</h1>
                <div className="card__price">
                    {course.price.toLocaleString('en-US', {
                        style: "currency",
                        currency: 'USD'
                    })}
                </div>
            </div>

            <div className="hr"></div>

            <div className="btn__container">
                 <Button
                     onClick={handleIncrement}
                     title={'+'}
                     type={'add'}
                 />

                {count !== 0 && (
                <Button
                    title={'-'}
                    type={'remove'}
                    onClick={handleDecrement}
                />
                )}
            </div>
        </div>
    );
};

export default Card;