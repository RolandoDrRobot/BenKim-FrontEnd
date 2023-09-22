import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

const useBTCPrice = () => {
  const [btcPrice, setBTCPrice] = useState(0);
  const update = useCallback(async () => {
    try {
      await axios.get('http://localhost:443/fetchBtcPrice').then((response) => {
        setBTCPrice(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    update();
  }, [update]);
  return {
    btcPrice
  }
}

export { useBTCPrice }

// const usePurchases = () => {
  
// }

// const useTotals = () => {
  
// }