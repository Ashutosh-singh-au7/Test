import React from 'react';
import { Switch } from 'antd';

const Toggle = ({onClick})=>{
    return(
        <Switch 
            className='mt-3 ml-5'
            defaultChecked={false}
            unCheckedChildren='dark'
            checkedChildren="light"
            onChange={onClick} 
        />
    )
};

export default Toggle;