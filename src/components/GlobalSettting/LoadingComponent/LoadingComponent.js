import React from 'react';
import styleLoading from './LoadingComponent.module.css';
import { useSelector } from 'react-redux';

function LoadingComponent(props) {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    console.log(isLoading);
    if (isLoading) {
        return (

        <div className={styleLoading.bgLoading}>
            <img src={require('../../../assets/imgLoading/imgLoading.gif')} alt='cmm' />
        </div>
        );
    } else {
        return null
    }


}

export default LoadingComponent;