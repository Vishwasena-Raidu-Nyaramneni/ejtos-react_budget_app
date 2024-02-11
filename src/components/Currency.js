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
<select name='Currency' id='Currency'>
        <option value="$">Currency($ Dollar)</option>
        <option value="£">Currency(£ Pound)</option>
          <option value="€">Currency(€ Euro)</option>
          <option value="₹">Currency(₹ Ruppee)</option></select>
</div>
    );
};
export default Currency;