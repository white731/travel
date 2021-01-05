import axios from "axios";
import { useEffect, useState } from "react";
import FinanceChart from "./FinanceChart";
import { Container } from "semantic-ui-react";
import FinanceForm from "./FinanceForm"; 

const FinanceData = () => {


  const [symbol, setSymbol] = useState("IMMR")

  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics',
    params: {symbol: symbol, region: 'US'},
    headers: {
      'x-rapidapi-key': 'a9ca5c9906msh7dfe4547c325051p1692e6jsn798668ee52bb',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  
  const [revenue, setRevenue] = useState(0)
  const [profit, setProfit] = useState(0)

  useEffect(()=>{
    axios.request(options).then(function (response) {
      console.log(response.data);
      setSymbol(response.data.symbol)
      setRevenue(response.data.financialData.totalRevenue.raw)
      setProfit(response.data.financialData.grossProfits.raw)
    }).catch(function (error) {
      console.error(error);
    });
  },[])

  const setCompanySymbol=(symbol)=>{
    setSymbol(symbol)
    axios.request(options).then(function (response) {
      console.log(response.data);
      setSymbol(response.data.symbol)
      setRevenue(response.data.financialData.totalRevenue.raw)
      setProfit(response.data.financialData.grossProfits.raw)
    }).catch(function (error) {
      console.error(error);
    });
   
  }

return (
  <Container>
    <h1> 
      Finance Data for {symbol}
      <FinanceForm/>
      <FinanceChart symbol = {symbol} revenue={revenue} profit={profit} setCompanySymbol={setCompanySymbol}/>
    </h1>
    </Container>
)

}

export default FinanceData

