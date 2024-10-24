import { ICurrencySelect } from "../interfaces";

export const getExchangeData = async (params: ICurrencySelect) => {
  const requestUrl = `${process.env.REACT_APP_BASE_URL}function=${process.env.REACT_APP_FUNCTION_CALL}&from_symbol=${params.fromCurrency}&to_symbol=${params.toCurrency}&apikey=${process.env.REACT_APP_API_KEY}`;
  const requestOptions = {
      method: 'GET',
      headers: {
          'User-Agent': 'request'
      }
  }
  return await fetch(requestUrl, requestOptions)
  .then(response => response.json());
//   return {
//     "Meta Data": {
//       "1. Information": "Forex Daily Prices (open, high, low, close)",
//       "2. From Symbol": "EUR",
//       "3. To Symbol": "USD",
//       "4. Output Size": "Compact",
//       "5. Last Refreshed": "2024-10-21 12:15:00",
//       "6. Time Zone": "UTC",
//     },
//     "Time Series FX (Daily)": {
//       "2024-10-21": {
//         "1. open": "1.08657",
//         "2. high": "1.08690",
//         "3. low": "1.08445",
//         "4. close": "1.08556",
//       },
//       "2024-10-20": {
//         "1. open": "1.08696",
//         "2. high": "1.08743",
//         "3. low": "1.08613",
//         "4. close": "1.08672",
//       },
//       "2024-10-17": {
//         "1. open": "1.08295",
//         "2. high": "1.08637",
//         "3. low": "1.08282",
//         "4. close": "1.08295",
//       },
//       "2024-10-15": {
//         "1. open": "1.08841",
//         "2. high": "1.09016",
//         "3. low": "1.08682",
//         "4. close": "1.08841",
//       },
//       "2024-10-14": {
//         "1. open": "1.09092",
//         "2. high": "1.09182",
//         "3. low": "1.08858",
//         "4. close": "1.09092",
//       },
//       "2024-10-13": {
//         "1. open": "1.09254",
//         "2. high": "1.09397",
//         "3. low": "1.09057",
//         "4. close": "1.09254",
//       },
//       "2024-10-10": {
//         "1. open": "1.09339",
//         "2. high": "1.09542",
//         "3. low": "1.09274",
//         "4. close": "1.09339",
//       },
//       "2024-10-09": {
//         "1. open": "1.09433",
//         "2. high": "1.09545",
//         "3. low": "1.09140",
//         "4. close": "1.09433",
//       },
//       "2024-10-08": {
//         "1. open": "1.09757",
//         "2. high": "1.09806",
//         "3. low": "1.09407",
//         "4. close": "1.09757",
//       },
//       "2024-10-07": {
//         "1. open": "1.09757",
//         "2. high": "1.09975",
//         "3. low": "1.09617",
//         "4. close": "1.09757",
//       },
//       "2024-10-03": {
//         "1. open": "1.10356",
//         "2. high": "1.10400",
//         "3. low": "1.09561",
//         "4. close": "1.10356",
//       },
//       "2024-10-02": {
//         "1. open": "1.10485",
//         "2. high": "1.10485",
//         "3. low": "1.10096",
//         "4. close": "1.10485",
//       },
//       "2024-10-01": {
//         "1. open": "1.10639",
//         "2. high": "1.10822",
//         "3. low": "1.10341",
//         "4. close": "1.10639",
//       },
//       "2024-09-30": {
//         "1. open": "1.11366",
//         "2. high": "1.11458",
//         "3. low": "1.10611",
//         "4. close": "1.11366",
//       },
//       "2024-09-29": {
//         "1. open": "1.11698",
//         "2. high": "1.12084",
//         "3. low": "1.11361",
//         "4. close": "1.11698",
//       },
//       "2024-09-26": {
//         "1. open": "1.11772",
//         "2. high": "1.11998",
//         "3. low": "1.11266",
//         "4. close": "1.11772",
//       },
//       "2024-09-25": {
//         "1. open": "1.11310",
//         "2. high": "1.11896",
//         "3. low": "1.11268",
//         "4. close": "1.11310",
//       },
//       "2024-09-24": {
//         "1. open": "1.11912",
//         "2. high": "1.12124",
//         "3. low": "1.11417",
//         "4. close": "1.11912",
//       },
//       "2024-09-23": {
//         "1. open": "1.11117",
//         "2. high": "1.11635",
//         "3. low": "1.11040",
//         "4. close": "1.11117",
//       },
//       "2024-09-22": {
//         "1. open": "1.11608",
//         "2. high": "1.11682",
//         "3. low": "1.10849",
//         "4. close": "1.11608",
//       },
//       "2024-09-19": {
//         "1. open": "1.11620",
//         "2. high": "1.11817",
//         "3. low": "1.11373",
//         "4. close": "1.11620",
//       },
//       "2024-09-18": {
//         "1. open": "1.11148",
//         "2. high": "1.11807",
//         "3. low": "1.10705",
//         "4. close": "1.11148",
//       },
//       "2024-09-17": {
//         "1. open": "1.11231",
//         "2. high": "1.11408",
//         "3. low": "1.11091",
//         "4. close": "1.11231",
//       },
//       "2024-09-16": {
//         "1. open": "1.11295",
//         "2. high": "1.11462",
//         "3. low": "1.11131",
//         "4. close": "1.11295",
//       },
//       "2024-09-15": {
//         "1. open": "1.10884",
//         "2. high": "1.11354",
//         "3. low": "1.10871",
//         "4. close": "1.10884",
//       },
//       "2024-09-12": {
//         "1. open": "1.10779",
//         "2. high": "1.11025",
//         "3. low": "1.10739",
//         "4. close": "1.10779",
//       },
//       "2024-09-11": {
//         "1. open": "1.10109",
//         "2. high": "1.10475",
//         "3. low": "1.10065",
//         "4. close": "1.10109",
//       },
//       "2024-09-10": {
//         "1. open": "1.10210",
//         "2. high": "1.10550",
//         "3. low": "1.10028",
//         "4. close": "1.10210",
//       },
//       "2024-09-09": {
//         "1. open": "1.10375",
//         "2. high": "1.10503",
//         "3. low": "1.10163",
//         "4. close": "1.10375",
//       },
//       "2024-09-08": {
//         "1. open": "1.10872",
//         "2. high": "1.10914",
//         "3. low": "1.10350",
//         "4. close": "1.10872",
//       },
//       "2024-09-05": {
//         "1. open": "1.11111",
//         "2. high": "1.11496",
//         "3. low": "1.10672",
//         "4. close": "1.11111",
//       },
//       "2024-09-04": {
//         "1. open": "1.10804",
//         "2. high": "1.11211",
//         "3. low": "1.10752",
//         "4. close": "1.10804",
//       },
//       "2024-09-03": {
//         "1. open": "1.10489",
//         "2. high": "1.10940",
//         "3. low": "1.10408",
//         "4. close": "1.10489",
//       },
//       "2024-09-02": {
//         "1. open": "1.10675",
//         "2. high": "1.10705",
//         "3. low": "1.10337",
//         "4. close": "1.10675",
//       },
//       "2024-09-01": {
//         "1. open": "1.10448",
//         "2. high": "1.10776",
//         "3. low": "1.10425",
//         "4. close": "1.10448",
//       },
//       "2024-08-29": {
//         "1. open": "1.10804",
//         "2. high": "1.10957",
//         "3. low": "1.10540",
//         "4. close": "1.10804",
//       },
//       "2024-08-28": {
//         "1. open": "1.11250",
//         "2. high": "1.11402",
//         "3. low": "1.10563",
//         "4. close": "1.11250",
//       },
//       "2024-08-27": {
//         "1. open": "1.11779",
//         "2. high": "1.11819",
//         "3. low": "1.11054",
//         "4. close": "1.11779",
//       },
//       "2024-08-26": {
//         "1. open": "1.11647",
//         "2. high": "1.11796",
//         "3. low": "1.11513",
//         "4. close": "1.11647",
//       },
//       "2024-08-25": {
//         "1. open": "1.11879",
//         "2. high": "1.12011",
//         "3. low": "1.11529",
//         "4. close": "1.11879",
//       },
//       "2024-08-22": {
//         "1. open": "1.11172",
//         "2. high": "1.11959",
//         "3. low": "1.11068",
//         "4. close": "1.11172",
//       },
//       "2024-08-21": {
//         "1. open": "1.11554",
//         "2. high": "1.11575",
//         "3. low": "1.10993",
//         "4. close": "1.11554",
//       },
//       "2024-08-20": {
//         "1. open": "1.11279",
//         "2. high": "1.11483",
//         "3. low": "1.11056",
//         "4. close": "1.11279",
//       },
//       "2024-08-19": {
//         "1. open": "1.10865",
//         "2. high": "1.11173",
//         "3. low": "1.10725",
//         "4. close": "1.10865",
//       },
//       "2024-08-18": {
//         "1. open": "1.10250",
//         "2. high": "1.10726",
//         "3. low": "1.10239",
//         "4. close": "1.10250",
//       },
//       "2024-08-15": {
//         "1. open": "1.09727",
//         "2. high": "1.10044",
//         "3. low": "1.09737",
//         "4. close": "1.09727",
//       },
//       "2024-08-14": {
//         "1. open": "1.10132",
//         "2. high": "1.10169",
//         "3. low": "1.09505",
//         "4. close": "1.10132",
//       },
//       "2024-08-13": {
//         "1. open": "1.09970",
//         "2. high": "1.10485",
//         "3. low": "1.09883",
//         "4. close": "1.09970",
//       },
//       "2024-08-12": {
//         "1. open": "1.09363",
//         "2. high": "1.09625",
//         "3. low": "1.09157",
//         "4. close": "1.09363",
//       },
//       "2024-08-11": {
//         "1. open": "1.09138",
//         "2. high": "1.09397",
//         "3. low": "1.09133",
//         "4. close": "1.09138",
//       },
//       "2024-08-08": {
//         "1. open": "1.09157",
//         "2. high": "1.09313",
//         "3. low": "1.09096",
//         "4. close": "1.09157",
//       },
//       "2024-08-07": {
//         "1. open": "1.09281",
//         "2. high": "1.09469",
//         "3. low": "1.08823",
//         "4. close": "1.09281",
//       },
//       "2024-08-06": {
//         "1. open": "1.09262",
//         "2. high": "1.09364",
//         "3. low": "1.09069",
//         "4. close": "1.09262",
//       },
//       "2024-08-05": {
//         "1. open": "1.09510",
//         "2. high": "1.09631",
//         "3. low": "1.09047",
//         "4. close": "1.09510",
//       },
//       "2024-08-04": {
//         "1. open": "1.09108",
//         "2. high": "1.10074",
//         "3. low": "1.08937",
//         "4. close": "1.09108",
//       },
//       "2024-08-01": {
//         "1. open": "1.07876",
//         "2. high": "1.09262",
//         "3. low": "1.07830",
//         "4. close": "1.07876",
//       },
//       "2024-07-31": {
//         "1. open": "1.08239",
//         "2. high": "1.08378",
//         "3. low": "1.07783",
//         "4. close": "1.08239",
//       },
//       "2024-07-30": {
//         "1. open": "1.08161",
//         "2. high": "1.08519",
//         "3. low": "1.08087",
//         "4. close": "1.08161",
//       },
//       "2024-07-29": {
//         "1. open": "1.08195",
//         "2. high": "1.08378",
//         "3. low": "1.08000",
//         "4. close": "1.08195",
//       },
//       "2024-07-28": {
//         "1. open": "1.08538",
//         "2. high": "1.08719",
//         "3. low": "1.08031",
//         "4. close": "1.08538",
//       },
//       "2024-07-25": {
//         "1. open": "1.08513",
//         "2. high": "1.08685",
//         "3. low": "1.08427",
//         "4. close": "1.08513",
//       },
//       "2024-07-24": {
//         "1. open": "1.08395",
//         "2. high": "1.08644",
//         "3. low": "1.08293",
//         "4. close": "1.08395",
//       },
//       "2024-07-23": {
//         "1. open": "1.08507",
//         "2. high": "1.08665",
//         "3. low": "1.08267",
//         "4. close": "1.08507",
//       },
//       "2024-07-22": {
//         "1. open": "1.08898",
//         "2. high": "1.09004",
//         "3. low": "1.08445",
//         "4. close": "1.08898",
//       },
//       "2024-07-21": {
//         "1. open": "1.08992",
//         "2. high": "1.09016",
//         "3. low": "1.08737",
//         "4. close": "1.08992",
//       },
//       "2024-07-18": {
//         "1. open": "1.09016",
//         "2. high": "1.09016",
//         "3. low": "1.08774",
//         "4. close": "1.09016",
//       },
//       "2024-07-17": {
//         "1. open": "1.09402",
//         "2. high": "1.09421",
//         "3. low": "1.09054",
//         "4. close": "1.09402",
//       },
//       "2024-07-16": {
//         "1. open": "1.09025",
//         "2. high": "1.09472",
//         "3. low": "1.08963",
//         "4. close": "1.09025",
//       },
//       "2024-07-15": {
//         "1. open": "1.09016",
//         "2. high": "1.09063",
//         "3. low": "1.08722",
//         "4. close": "1.09016",
//       },
//       "2024-07-14": {
//         "1. open": "1.08855",
//         "2. high": "1.09219",
//         "3. low": "1.08844",
//         "4. close": "1.08855",
//       },
//       "2024-07-11": {
//         "1. open": "1.08728",
//         "2. high": "1.09112",
//         "3. low": "1.08631",
//         "4. close": "1.08728",
//       },
//       "2024-07-10": {
//         "1. open": "1.08333",
//         "2. high": "1.08984",
//         "3. low": "1.08329",
//         "4. close": "1.08333",
//       },
//       "2024-07-09": {
//         "1. open": "1.08148",
//         "2. high": "1.08287",
//         "3. low": "1.08119",
//         "4. close": "1.08148",
//       },
//       "2024-07-08": {
//         "1. open": "1.08309",
//         "2. high": "1.08342",
//         "3. low": "1.08062",
//         "4. close": "1.08309",
//       },
//       "2024-07-07": {
//         "1. open": "1.08260",
//         "2. high": "1.08472",
//         "3. low": "1.08151",
//         "4. close": "1.08260",
//       },
//       "2024-07-04": {
//         "1. open": "1.08107",
//         "2. high": "1.08384",
//         "3. low": "1.08107",
//         "4. close": "1.08107",
//       },
//       "2024-07-03": {
//         "1. open": "1.07933",
//         "2. high": "1.08167",
//         "3. low": "1.07842",
//         "4. close": "1.07933",
//       },
//       "2024-07-02": {
//         "1. open": "1.07484",
//         "2. high": "1.08156",
//         "3. low": "1.07371",
//         "4. close": "1.07484",
//       },
//       "2024-07-01": {
//         "1. open": "1.07371",
//         "2. high": "1.07461",
//         "3. low": "1.07106",
//         "4. close": "1.07371",
//       },
//       "2024-06-30": {
//         "1. open": "1.07353",
//         "2. high": "1.07782",
//         "3. low": "1.07208",
//         "4. close": "1.07353",
//       },
//       "2024-06-27": {
//         "1. open": "1.07085",
//         "2. high": "1.07210",
//         "3. low": "1.06860",
//         "4. close": "1.07085",
//       },
//       "2024-06-26": {
//         "1. open": "1.06801",
//         "2. high": "1.07262",
//         "3. low": "1.06778",
//         "4. close": "1.06801",
//       },
//       "2024-06-25": {
//         "1. open": "1.07096",
//         "2. high": "1.07204",
//         "3. low": "1.06677",
//         "4. close": "1.07096",
//       },
//       "2024-06-24": {
//         "1. open": "1.07327",
//         "2. high": "1.07458",
//         "3. low": "1.06922",
//         "4. close": "1.07327",
//       },
//       "2024-06-23": {
//         "1. open": "1.06878",
//         "2. high": "1.07470",
//         "3. low": "1.06844",
//         "4. close": "1.06878",
//       },
//       "2024-06-20": {
//         "1. open": "1.07064",
//         "2. high": "1.07227",
//         "3. low": "1.06719",
//         "4. close": "1.07064",
//       },
//       "2024-06-19": {
//         "1. open": "1.07515",
//         "2. high": "1.07504",
//         "3. low": "1.07075",
//         "4. close": "1.07515",
//       },
//       "2024-06-18": {
//         "1. open": "1.07423",
//         "2. high": "1.07533",
//         "3. low": "1.07263",
//         "4. close": "1.07423",
//       },
//       "2024-06-17": {
//         "1. open": "1.07407",
//         "2. high": "1.07612",
//         "3. low": "1.07111",
//         "4. close": "1.07407",
//       },
//       "2024-06-16": {
//         "1. open": "1.07022",
//         "2. high": "1.07262",
//         "3. low": "1.06876",
//         "4. close": "1.07022",
//       },
//       "2024-06-13": {
//         "1. open": "1.07388",
//         "2. high": "1.07458",
//         "3. low": "1.06682",
//         "4. close": "1.07388",
//       },
//       "2024-06-12": {
//         "1. open": "1.08132",
//         "2. high": "1.08178",
//         "3. low": "1.07538",
//         "4. close": "1.08132",
//       },
//       "2024-06-11": {
//         "1. open": "1.07403",
//         "2. high": "1.08518",
//         "3. low": "1.07350",
//         "4. close": "1.07403",
//       },
//       "2024-06-10": {
//         "1. open": "1.07643",
//         "2. high": "1.07735",
//         "3. low": "1.07211",
//         "4. close": "1.07643",
//       },
//       "2024-06-09": {
//         "1. open": "1.07789",
//         "2. high": "1.07828",
//         "3. low": "1.07336",
//         "4. close": "1.07789",
//       },
//       "2024-06-06": {
//         "1. open": "1.08944",
//         "2. high": "1.09018",
//         "3. low": "1.08050",
//         "4. close": "1.08944",
//       },
//       "2024-06-05": {
//         "1. open": "1.08745",
//         "2. high": "1.08987",
//         "3. low": "1.08637",
//         "4. close": "1.08745",
//       },
//       "2024-06-04": {
//         "1. open": "1.08819",
//         "2. high": "1.08899",
//         "3. low": "1.08610",
//         "4. close": "1.08819",
//       },
//       "2024-06-03": {
//         "1. open": "1.09074",
//         "2. high": "1.09182",
//         "3. low": "1.08607",
//         "4. close": "1.09074",
//       },
//       "2024-06-02": {
//         "1. open": "1.08530",
//         "2. high": "1.08909",
//         "3. low": "1.08280",
//         "4. close": "1.08530",
//       },
//       "2024-05-30": {
//         "1. open": "1.08354",
//         "2. high": "1.08826",
//         "3. low": "1.08116",
//         "4. close": "1.08355",
//       },
//     },
//   };
};
