import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import Swap from './assets/swap.png'
import DotGrid from './DotGrid/DotGrid';

function App() {

  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")


  const currencyInfo = useCurrencyInfo(from)


  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

useEffect(()=>{
   if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
},[amount, from, to, currencyInfo])

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div className="relative w-full h-screen flex flex-wrap justify-center items-center">
      <div className="absolute inset-0 z-0 pointer-events-none bg-black">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
        
      <div className="w-full ">
        {/* */}
          <div className="w-full max-w-md mx-auto rounded-lg p-5 backdrop-blur-sm z-10  ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md text-white px-2 py-0.5"
                  style={{background:"#5227FF"}}
                  onClick={swap}
                >
                  <img src={Swap} alt="Swap" className="w-5 h-5 block" />
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  isAmountDisable
                />
              </div>
              <button type="submit" className="w-full text-white px-4 py-3 rounded-lg"
              style={{background:"#5227FF"}}>
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default App
