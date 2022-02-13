import React, { useState } from "react";
import { Box, Container, Grid } from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";
import "./procedure.css";
import Item from "./Item";
import { IoPersonAdd } from "react-icons/io5";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
export default function Procedure() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="procedure">
      <h1 className="header">Steps to use quilt.chat</h1>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <Grid templateRows="repeat(3,1fr)" gap="5">
              <Box d="flex" alignItems="center">
                <button className="button">connect wallet</button>
              </Box>
              <Box d="flex" alignItems="center" className="box">
                1. Connect your metamask wallet
              </Box>
            </Grid>
          </Item>
          <Item>
            <Grid templateRows="repeat(2,1fr)" gap="5">
              <Box d="flex" alignItems="center">
                <form>
                  Password
                  <br></br>
                  <input placeholder="Password" className="form" />
                  <button id="up" type="button" className="button">
                    Sign up
                  </button>
                </form>
              </Box>
              <Box className="box">
                2. Sign up using password of your choice
              </Box>
            </Grid>
          </Item>
          <Item>
            <Grid templateRows="repeat(2,1fr)" gap="5">
              <Box>
                Password
                <br></br>
                <input placeholder="Password" className="form" />
                <button id="in" type="button" className="button">
                  Sign in
                </button>
              </Box>
              <Box className="box">
                3. Sign in using the same password and remember the password
              </Box>
            </Grid>
          </Item>
          <Item>
            <Grid templateRows="repeat(3,1fr)" gap="5">
              <Box>
                <button className="button">Generate new private key</button>
              </Box>
              <Box className="box">
                4. Generate private key. This will require some coins based on
                the network you are using
              </Box>
            </Grid>
          </Item>
          <Item>
            <Grid templateRows="repeat(2,1fr)" gap="5">
              <Box>
                <div className="text-2xl text-white mb-2 pt-6">Friends</div>
                <br></br>

                <input
                  placeholder="Reciever address"
                  name="address"
                  className="form"
                />

                <IoPersonAdd className="button" size="20px"></IoPersonAdd>
              </Box>
              <Box className="box">
                5. Paste the friend’s wallet address and add friend. Click on
                the friend’s address and enjoy chatting
              </Box>
            </Grid>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}
