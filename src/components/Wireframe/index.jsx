import { useState } from 'react';
import picture from '../../assets/wireframe.jpg';
import { Button } from '../Button';

export const Wireframe = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className="wireframe">
            <Button onClick={handleClick} className='wireframe-button' content='WIREFRAME CORRECTION' />
            {
                open && 
                <div>
                    <span className='closeButton' onClick={handleClick}>+</span>
                    <img src={picture} alt='wireframe' />
                </div>
            }
        </div> 
    )
}