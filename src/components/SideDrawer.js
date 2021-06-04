import React from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { drawerActions } from '../store/reducers/drawer-slice';


const SideDrawer = () =>{
    const dispatch = useDispatch();
    const { drawer } = useSelector((state)=> state.drawer);
    
    const onClose = ()=>{
        dispatch(drawerActions.setVisible({
            drawer: false
        }))
    }
    return (
        <Drawer 
            className='text-center'
            title={`Top Liked Post and Comment`}
            placement="left"
            // closable={false}
            onClose={onClose}
            visible={drawer}
        >
            
            <Link  to='/like'>
                <button onClick={()=>{
                    dispatch(drawerActions.setVisible({
                        drawer: false,
                    }))
                }} className='text-right btn btn-primary btn-raised '>
                    Top Liked post
                </button>
            </Link>
            <Link  to='/comment'>
            <button onClick={()=>{
                dispatch(drawerActions.setVisible({
                    drawer: false,
                }))
            }} className='text-left btn btn-primary btn-raised '>
                Top Liked Comment
            </button>
        </Link>
        </Drawer>
    )
};

export default SideDrawer;