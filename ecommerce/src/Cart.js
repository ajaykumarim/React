
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const Cart = ({ addto1, value1 }) => {
    let b = []
    let [int, en] = useState(1)
    for (let i = 0; i <= addto1.length; i++) {
        if (addto1[i] != addto1[i + 1]) {
            b.push(addto1[i])
        }
    }
    let req = value1.filter((s) => b.includes(s.img));
    console.log(req);
    let [one, two] = useState(null)
    if (one == null) {
        req = req
    } else {
        req = one
    }
    // const [quantities, setQuantities] = useState({});
    const [quantities, setQuantities] = useState(() => {
        const initialQuantities = {};
        req.forEach((q) => {
            initialQuantities[q.id] = 1;
        });
        return initialQuantities;
    });
    const plus = (itemId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 0) + 1,
        }));
    }; 

    const minus = (itemId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 1),
        }));
    };
    let del = (q) => {
        two(one = req.filter((a) => a != q))
    }
    return (
        <div className='Cartpagediv'>
            {req.map((q, index) =>
                <div key='q.id' className='itemscartdiv'>
                    <div ><img className='addedimg' src={q.img} /></div>
                    <div className='itemscart'>
                        <button onClick={() => minus(q.id)} className='butt'>-</button ><p>{quantities[q.id] || 0}</p><button onClick={() => plus(q.id)} className='butt'>+</button>
                        <button className='delete' onClick={() => del(q)}>Delete</button>
                    </div>
                </div>
            )}
            <button><Link to='/'>Exit</Link></button>
        </div>
    )
}