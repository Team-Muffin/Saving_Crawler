import axios from "axios";
import * as fs from 'fs';
import { getImgPathByCode } from "./utils/logo_converter.js";

//depositIdList.js = 상품 아이디 리스트
//depositList.js = 예금 간략 정보 
//depositDetail.js = 예금 상세 정보

// https://new-m.pay.naver.com/savings/api/v1/productList?productTypeCode=1002&companyGroupCode=BA&regionCode=00&productCategories%5B%5D=anyone&offset=0&sortType=PRIME_INTEREST_RATE
// https://new-m.pay.naver.com/savings/_next/data/myONoeojN_eppLX19bh4D/detail/ea010b547e5fd305aa60d647f86a736e.json?

const TOTAL_PAGE = 6
const LIST_URL = "https://new-m.pay.naver.com/savings/api/v1/productList?productTypeCode=1002&companyGroupCode=BA&regionCode=00&productCategories%5B%5D=anyone&sortType=PRIME_INTEREST_RATE&offset="
const DETAIL_URL = "https://new-m.pay.naver.com/savings/_next/data/myONoeojN_eppLX19bh4D/detail/"

let depositli =  await getList();
getDetail();

async function getList(){
  const depositList =[]

  for(let i=0; i<TOTAL_PAGE;i++){
    let offset = i*20
    const resp =  await((await axios.get(LIST_URL+offset)).data.result.products)
    depositList.push(resp);
    


  }

  Promise.all(depositList).then(data=>{
    //console.log(data);
    fs.writeFileSync('./output/depositList.json',JSON.stringify(data))
  })

  return depositList;
}

async function getDetail(){
  const depositDetail=[]
  const depositIdList =[]

  for(let i=0; i< depositli.length; i++){
    for(let j=0; j<depositli[i].length-1; j++){

        let id = depositli[i][j].code;
        const resp = await axios.get(DETAIL_URL+id+".json?")
        //console.log(resp)

        depositDetail.push(extractProductDetail(resp.data))
        depositIdList.push(id)

              
    }

    Promise.all(depositDetail).then(data=>{
      //console.log(data);
      fs.writeFileSync('./output/depositDetail.json',JSON.stringify(data))
    })

    Promise.all(depositIdList).then(data=>{
      //console.log(data);
      fs.writeFileSync('./output/depositIdList.json',JSON.stringify(data))
    })
    
  
  }
}

function extractProductDetail(data) {
  let ret = {};

  // console.log(data);
  ret = data.pageProps.dehydratedState.queries[1].state.data.result;
  ret.companyImgUrl = getImgPathByCode(ret.partnerCode);
  return ret;
}
