
import { useCoins } from '../CoinsContext';

const CoinManager = () => {
  const { coins, setCoins } = useCoins();

 export const addCoins = () => {
    setCoins(coins + 10);
  };

  export const spendCoins = () => {
    if (coins >= 10) {
      setCoins(coins - 10);
    } else {
      alert('Not enough coins');
    }
  };

//   return (
//     <div>
//       <h2>Manage Coins</h2>
//       <p>Current Coins: {coins}</p>
//       <button onClick={addCoins}>Add 10 Coins</button>
//       <button onClick={spendCoins}>Spend 10 Coins</button>
//     </div>
//   );
};

// export default CoinManager;
