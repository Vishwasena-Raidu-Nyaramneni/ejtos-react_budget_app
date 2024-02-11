import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const changeCurrencyLogo = (val) => {
        dispatch({
          type: "CHG_CURRENCY",
          payload: val,
        });
      };


      
    return (
<div className='alert alert-secondary' onChange={(event) => changeCurrencyLogo(event.target.value)}>
Currency
<select name='Currency' id='Currency' style={{
          padding: '8px 12px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '2px',
          backgroundColor: '#90ee90',
          cursor: 'pointer'
        }}>
        <option  value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option></select>
</div>
    );
};
export default Currency;