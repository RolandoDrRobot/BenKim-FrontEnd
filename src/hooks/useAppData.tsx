import * as io from "socket.io-client";
import { useEffect, useState } from "react";

const useBTCPrice = () => {
  const [btcPrice, setBTCPrice] = useState(0);
  const socket = io.connect("http://localhost:3001");
  useEffect(() => {
    socket.on("receive_btc_price", (data) => {
      console.log(data);
      if (data !== null) setBTCPrice(data);
    });
  }, [socket]);
  return {
    btcPrice
  }
}

export { useBTCPrice }
