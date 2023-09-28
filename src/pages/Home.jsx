import {
  Badge,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShopCard from "../util/ShopCard";
import { toast, Toaster } from "react-hot-toast";
import data from "../data.json";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Home() {
  const [cartItemsCount, setCartItemsCount] = useState([]);
  const hasData = (item) => {
    var items = JSON.parse(localStorage.getItem("cart") || "[]");
    if (items.length <= 0) return false;
    var itemData = items.filter((value) => value.itemName == item.itemName);
    return itemData.length > 0;
  };

  const getCartItems=()=> JSON.stringify(localStorage.getItem('cart'));

  const addToCart = (item) => {      
    var itemHasData = hasData(item);
    if (itemHasData) {
      toast.error(`the item ${item.itemName} Already Exist in the cart`, {
        duration: 3000,
        position: "top-center",
      });
    } else {
      var items = JSON.parse(localStorage.getItem("cart") || "[]");
      items.push(item);
      localStorage.setItem("cart", JSON.stringify(items));
      setCartItemsCount(JSON.parse(localStorage.getItem("cart") || "[]"));
      toast.success("Added to cart", {
        duration: 3000,
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    console.log(cartItemsCount);
    var items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItemsCount(items);
  }, []);

  return (
    <Container>
      <Toaster />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          {" "}
          <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
            Let's Shop 😁
          </Typography>
          <Typography sx={{ fontSize: 17, fontWeight: "normal" }}>
            Enjoy what ever you see
          </Typography>
        </Box>

        <Badge onClick={()=>alert("Cart")}  badgeContent={cartItemsCount.length} color="primary">
         <ShoppingCartIcon color="action" />
        </Badge>
      </Box>
      <Divider />
      <Grid container columnSpacing={2}>
        {data.items.map((item) => (
          <Grid item>
            <ShopCard item={item} getData={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
