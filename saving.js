import axios from "axios";
import * as fs from 'fs';
import { getImgPathByCode } from "./utils/logo_converter.js";

//savingIdList.js = 상품 아이디 리스트
//savingList.js = 예금 간략 정보 
//savingDetail.js = 예금 상세 정보


//https://new-m.pay.naver.com/savings/api/v1/productList?productTypeCode=1003&companyGroupCode=BA&regionCode=00&offset=0&sortType=PRIME_INTEREST_RATE

const TOTAL_PAGE = 17
const LIST_URL = "https://new-m.pay.naver.com/savings/api/v1/productList?productTypeCode=1003&companyGroupCode=BA&regionCode=00&sortType=PRIME_INTEREST_RATE&offset=0"
const DETAIL_URL = "https://new-m.pay.naver.com/savings/_next/data/myONoeojN_eppLX19bh4D/detail/"

let savingli = await getList();
getDetail();




async function getList(){
    const savingList=[];

    for(let i=0; i<TOTAL_PAGE-1; i++){
        const resp =  await((await axios.get(LIST_URL+i)).data.result.products)
        savingList.push(resp);
    }

    Promise.all(savingList).then(data=>{
        //console.log(data);
        fs.writeFileSync('./output/savingList.json',JSON.stringify(data))
    })
    
    return savingList;

}


async function getDetail(){
  const savingDetail=[]
  const savingIdList =[]

  for(let i=0; i< savingli.length; i++){
    for(let j=0; j<savingli[i].length-1; j++){

        let id = savingli[i][j].code;
        const resp = await axios.get(DETAIL_URL+id+".json?")
        savingDetail.push(extractProductDetail(resp.data))
        savingIdList.push(id)

              
    }

    Promise.all(savingDetail).then(data=>{
      //console.log(data);
      fs.writeFileSync('./output/savingDetail.json',JSON.stringify(data))
    })

    Promise.all(savingIdList).then(data=>{
      //console.log(data);
      fs.writeFileSync('./output/savingIdList.json',JSON.stringify(data))
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
