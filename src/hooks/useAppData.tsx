import * as io from "socket.io-client";
import { useEffect, useState } from "react";
import axios from 'axios';

const socket = io.connect("http://localhost:3001");

const useBTCPrice = () => {
  const [btcPrice, setBTCPrice] = useState(0);
  useEffect(() => {
    socket.on("receive_btc_price", (data) => {
      if (data !== null) setBTCPrice(data);
    });
  }, [socket]);
  return {
    btcPrice
  }
}

const usePurchasesAndTotals = (userID: string) => {
  const [purchases, setPurchases] = useState([]);
  const [totals, setTotals] = useState({
    totalAmount: 0,
    totalPurchasePrice: 0,
    totalCost: 0,
    totalCurrentValue: 0,
    totalValueCostComparison: {
      percentge: 0,
      money: 0
    }
  });

  useEffect(() => {
    if (userID) {
      axios.post('http://localhost:443/getPurcharses', { userID: userID }).then((response) => {
      setPurchases(response.data.purchases);
      setTotals(response.data.totals)
    });
    }
  }, [userID]);

  return {
    purchases,
    totals
  }
}

export { useBTCPrice, usePurchasesAndTotals }
