import axios from "axios";
import { useState } from "react";
import { Form } from "semantic-ui-react";



const FinanceForm = (props) => {

  const [company, setCompany] = useState("apple")

  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
    params: {q: `${company}`, region: 'US'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };


  const handleSubmit = () => {
    console.log(company)
    axios.request(options).then(function (response) {
      console.log(response.data);
      console.log(response.data.quotes[0].symbol)
      console.log(response.data.quotes[0].shortname)
      props.setCompanySymbol(response.data.quotes[0].symbol, response.data.quotes[0].shortname)
    }).catch(function (error) {
      alert("Please enter a valid company name")
      console.error(error);
    });

  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
      placeholder="Enter a company name here"
      onChange={(e)=>{setCompany(e.target.value)}}
      />
    </Form>
  )

}

export default FinanceForm

