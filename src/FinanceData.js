import axios from "axios";
import { useEffect, useState } from "react";
import FinanceChart from "./FinanceChart";
import { Container } from "semantic-ui-react";
import FinanceForm from "./FinanceForm"; 

const FinanceData = () => {


  const [symbol, setSymbol] = useState("AAPL")
  const [companyName, setCompanyName] = useState("Apple Computers")
  const [revenue, setRevenue] = useState(0)
  const [profit, setProfit] = useState(0)
  const [userInput, setUserInput] = useState(false)

  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics',
    params: {symbol: symbol, region: 'US'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  


  useEffect(()=>{

    if (userInput === false) {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setSymbol(response.data.symbol)
      setRevenue(response.data.financialData.totalRevenue.raw)
      setProfit(response.data.financialData.grossProfits.raw)
    }).catch(function (error) {
      setSymbol("AAPL")
      setCompanyName("Apple Computers")
      setRevenue(274515001344)
      setProfit(104956000000)
      console.error(error);
    });
  }
  },[])

  const setCompanySymbol=(symbol,companyName)=>{
    setUserInput(true)
    setSymbol(symbol)
    setCompanyName(companyName)
    // debugger
    axios.request(options).then(function (response) {
      console.log(response.data);
      // setSymbol(response.data.symbol)
      setRevenue(response.data.financialData.totalRevenue.raw)
      setProfit(response.data.financialData.grossProfits.raw)
    }).catch(function (error) {
      setSymbol("AAPL")
      setCompanyName("Apple Computers")
      setRevenue(274515001344)
      setProfit(104956000000)
      console.error(error);
      
    });
   
  }

return (
  <Container>
    <h1> Finance Data for {symbol}</h1>
    <h3>{companyName}</h3>
      <FinanceForm setCompanySymbol={setCompanySymbol}/>
      <FinanceChart symbol = {symbol} revenue={revenue} profit={profit} />
    
    </Container>
)

}

export default FinanceData

