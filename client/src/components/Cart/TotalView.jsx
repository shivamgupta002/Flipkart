import React, { useState, useEffect } from "react";

import { Box, Typography, styled } from "@mui/material";

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: #1px solid #f0f0f0;
`;
const Heading = styled(Typography)`
  color: #878787;
`;
const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;
const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: green;
  font-weight: 500;
`;

// #####################################################
const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      return (
        (price += item.price.mrp),
        (discount += item.price.mrp - item.price.cost)
      );
    });
    setPrice(price);
    setDiscount(discount);
  };
  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <>
      <Box>
        <Header>
          <Heading>PRICE DETAIL</Heading>
        </Header>
        <Container>
          <Typography>
            Price ({cartItems?.length} item)
            <Price component="span">₹{price}</Price>
          </Typography>
          <Typography>
            Discount
            <Price component="span">- {discount}</Price>
          </Typography>
          <Typography>
            Delivery Charges
            <Price component="span"> + ₹60</Price>
          </Typography>
          <Typography variant="h6">
            Total Amount
            <Price component="span">₹{price - discount + 60}</Price>
          </Typography>
          <Discount>You will save ₹{discount + 60} on this order</Discount>
        </Container>
      </Box>
    </>
  );
};

export default TotalView;
