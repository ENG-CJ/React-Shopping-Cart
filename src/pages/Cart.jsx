import { CartList } from '../util/CartList';
import React, { useState } from 'react'
import * as mui from '@mui/material'
export default function Cart() {
  const [cartListData, setCartListData] = useState(1);
  return (
    <mui.Container>
      <div>Here is Your Items</div>
      <div>Pay Without Tax</div>
      <mui.Divider />

     <CartList/>
      <mui.Box>
        <mui.Typography>Total : $1000</mui.Typography>
      </mui.Box>
    </mui.Container>
  );
}
