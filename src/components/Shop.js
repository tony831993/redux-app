import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div className='shop-component'>
        <h2>Update balance</h2>
        {/* <button type="button" className="btn btn-sm btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(10)) }}>Withdraw</button>
        <button type="button" className="btn btn-sm btn-success mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>Deposit</button> */}
        <button type="button" className="btn btn-sm btn-primary mx-2" onClick={ () => {withdrawMoney(10)} }>Withdraw</button>
        <button type="button" className="btn btn-sm btn-success mx-2" onClick={ () => {depositMoney(100)} }>Deposit</button>
      </div>
    </>
  )
}
