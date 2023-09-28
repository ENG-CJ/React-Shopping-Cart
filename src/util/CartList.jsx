import React from "react";
import * as mui  from '@mui/material';
export function CartList({
  image,
  itemName,
  size,
  price,
}) {
  return <mui.Paper>
        <mui.Box sx={{
      display: "flex",
      justifyContent: "space-between"
    }}>
          <mui.Box>
            <img src={"../../images/t-1.jfif"} />
          </mui.Box>
          <mui.Box sx={{
        mt: 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "start"
      }}>
            <mui.Typography sx={{
          fontSize: 30,
          fontFamily: "poppins",
          fontWeight: "bold"
        }}>
              T-shirt 1 Hello
            </mui.Typography>
            <mui.Typography>Size: XL</mui.Typography>
            <mui.Typography>Price: $40</mui.Typography>
          </mui.Box>

          <mui.Box sx={{
        mt: 7,
        mr: 4 // display: "flex",
        // flexDirection: "column",
        // alignItems: "start",

      }}>
            <mui.Typography>Quantity</mui.Typography>
            <mui.Box sx={{
          display: "flex",
          alignItems: "center"
        }}>
              <mui.Button >
                +
              </mui.Button>
              <mui.Typography>1</mui.Typography>
              <mui.Button >
                -
              </mui.Button>
            </mui.Box>
          </mui.Box>
        </mui.Box>
      </mui.Paper>;
}
  