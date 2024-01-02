import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const App = () => {
    const[item, setItem] = useState('');
    const[price, setPrice] = useState('');

    const addItemCart = () => {
        emailjs.send('Service_Id', 'Template-id', {
            to_email: 'danielgodwin713@gmail.com',
            subject: 'New Item Added to cart',
            item_name: item,
            item_price: price
        }).then  (
            function (response) {
                console.log("Email Sent Successfully!", response);
            },
            function(error) {
                console.log("Email Not Sent",error);
            }
        );
    };

return (
    <div>
        <input 
        type='text'
        placeholder='Item'
        value={item}
        onChange={ (e) => setItem(e.target.value)}
        />

        <input 
        type='number'
        placeholder='Enter number'
        value={price}
        onChange={ (e) => setPrice(e.target.value)}
        />

        <button onClick={addItemCart}>ADD TO CART</button>
    </div>
)
};

export default App;