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
      'x-rapidapi-key': 'a9ca5c9906msh7dfe4547c325051p1692e6jsn798668ee52bb',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };


  const handleSubmit = () => {
    console.log(company)
    axios.request(options).then(function (response) {
      console.log(response.data);
      console.log(response.data.quotes[0].symbol)
      props.setCompanySymbol(response.data.quotes[0].symbol)
    }).catch(function (error) {
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

