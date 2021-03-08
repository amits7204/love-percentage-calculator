import axios from "axios";

const BASE_URL = 'https://love-calculator.p.rapidapi.com/getPercentage';

export default function* getLPC(payload){
    console.log("PAYLOAD API: ", payload)
    const options = {
        method: 'GET',
        url: BASE_URL,
        params: {fname: payload.fname, sname: payload.sname},
        headers: {
          'x-rapidapi-key': '9e234a030bmsh4bdf86d4332ce63p19cb2fjsnc431c26d6c5b',
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
        }
      };
    const response = yield axios.request(options)
    .then(function (response) {
        console.log("RESPONSE: ",response.data)
        return response.data
    }).catch(function (error) {
        console.error(error);
    });

    return response
}

