const NAME_CODE = {
    BK_KDB: "002",
    BK_IBK: "003",
    BK_KB: "004",
    BK_SH: "007",
    BK_EXIM: "008",
    BK_NH: "011",
    BK_WOORI: "020",
    BK_SC: "023",
    BK_CITI: "027",
    BK_DAEGU: "031",
    BK_BUSAN: "032",
    BK_KWANGJU: "034",
    BK_JEJU: "035",
    BK_JEONBUK: "037",
    BK_KYOUNGNAM: "039",
    BK_KFCC: "045",
    BK_CU: "048",
    BK_HSBC: "054",
    BK_DEUTSCH: "055",
    BK_BOA: "060",
    BK_BNP: "061",
    BK_JPMORGAN: "057",
    BK_ICBC: "062",
    BK_CHINA: "063",
    BK_CCB: "067",
    BK_NFCF: "064",
    BK_EPOST: "071",
    BK_HANA: "081",
    BK_SHINHAN: "088",
    BK_K: "089",
    BK_KAKAO: "090",
    BK_TOSS: "092",
    BK_NHCENTRAL: "N893",
    BK_SHCENTRAL: "N894",
    SB_COMMON: "050",
    SB_SBI: "103",
    SB_SBI2: "N823",
    SB_WELCOME: "105",
    SB_JTCHINE: "N801",
    SB_SSIN: "N802",
    SB_PEPPER: "N803",
    SB_BNK: "N804",
    SB_IBK: "N805",
    SB_DAOL: "N806",
    SB_DONGWONJEIL: "N807",
    SB_LENDIT: "N808",
    SB_SHINHAN: "N809",
    SB_YEKARAM: "N810",
    SB_WOORIFIN: "N811",
    SB_KIWOOMYES: "N812",
    SB_HANWHA: "N813",
    SB_OK: "N814",
    SB_KOREAINVEST: "N815",
    SB_DB: "N816",
    SB_HB: "N817",
    SB_JT: "N818",
    SB_KB: "N819",
    SB_ACUON: "N820",
    SB_NH: "N821",
    SB_OSB: "N822",
    SB_COREA: "N824",
    SB_DAISHIN: "N825",
    SB_MOA: "N826",
    SB_SMART: "N827",
    SB_JINJU: "N830",
    SB_KIWOOM: "N831",
    SB_HANA: "N833",
    SB_YOONGCHANG: "N835",
    SB_CK: "N844",
    SB_DH: "N845",
    SB_SNT: "N846",
    SB_KOOKJE: "N847",
    SB_KUMHWA: "N848",
    SB_NAMYANG: "N849",
    SB_DAEMYUNG: "N850",
    SB_DAEBAEK: "N851",
    SB_DAEAH: "N852",
    SB_DAEWON: "N853",
    SB_DAEHAN: "N854",
    SB_DOUBLE: "N855",
    SB_THEK: "N856",
    SB_DONGYANG: "N857",
    SB_DREAM: "N858",
    SB_RAON: "N859",
    SB_MUSTSAMIL: "N860",
    SB_MK: "N861",
    SB_BARO: "N862",
    SB_BOORIM: "N863",
    SB_SAMJUNG: "N864",
    SB_SAMHO: "N865",
    SB_SERAM: "N866",
    SB_CENTRAL: "N867",
    SB_SOLBRAIN: "N868",
    SB_SKY: "N869",
    SB_STAR: "N870",
    SB_ASAN: "N871",
    SB_ANGUK: "N872",
    SB_ANYANG: "N873",
    SB_MS: "N874",
    SB_YOUNGJIN: "N875",
    SB_OHSUNG: "N876",
    SB_OHTOO: "N877",
    SB_WOORI: "N878",
    SB_UNION: "N879",
    SB_YUANTA: "N880",
    SB_INSUNG: "N882",
    SB_INCHEON: "N883",
    SB_CHOEUN: "N884",
    SB_CHOHEUNG: "N885",
    SB_TRUE: "N886",
    SB_CHUNGJU: "N887",
    SB_PYUNGTAEK: "N888",
    SB_PURUN: "N889",
    SB_HANSUNG: "N890",
    SB_HEUNGKUK: "N891",
    SB_SSINPLUS: "N892",
    CAPITAL_WOORIF: "299",
    CAPITAL_DGB: "301",
    CAPITAL_BNK: "302",
    CAPITAL_LOTTE: "303",
    CAPITAL_HYUNDAI: "304",
    CAPITAL_JB_WOORI: "305",
    CAPITAL_NH: "306",
    CAPITAL_ACUON: "307",
    CAPITAL_KB: "308",
    CAPITAL_HANKOOK: "309",
    CAPITAL_HANA: "310",
    CAPITAL_MIRAE: "N828",
    CAPITAL_WELCOME: "N829",
    CAPITAL_PEOPLE_FUND: "N832",
    CAPITAL_OK: "N834",
    CD_WOORI: "041",
    CD_BC: "361",
    CD_SAMSUNG: "365",
    CD_SHINHAN: "366",
    CD_HYUNDAI: "367",
    CD_LOTTE: "368",
    CD_HANA: "374",
    CD_KB: "381",
    CD_NH: "371",
    CD_IBK: "N908",
    CD_NAVER_PAY: "N909",
    CD_KAKAO_PAY: "N910",
    IS_KYOBOLIFE: "436",
    IS_DONGYANG: "402",
    IS_LINA: "435",
    IS_LOTTE: "445",
    IS_MERITZFIRE: "448",
    IS_MET: "N896",
    IS_MIRAE: "431",
    IS_SAMSUNGLIFE: "452",
    IS_SAMSUNGFIRE: "441",
    IS_SHINHAN: "438",
    IS_KOREAPOST: "N897",
    IS_CHUBBLIFE: "460",
    IS_KB_PRUDENTIAL: "439",
    IS_FUBON: "434",
    IS_HANALIFE: "401",
    IS_HANAFIRE: "N898",
    IS_HANWHALIFE: "432",
    IS_HANWHAFIRE: "454",
    IS_HI: "442",
    IS_HEUNGKUKLIFE: "453",
    IS_ABL: "437",
    IS_HEUNGKUKFIRE: "403",
    IS_AIGFIRE: "N900",
    IS_AXA: "447",
    IS_BNPLIFE: "N901",
    IS_BNPFIRE: "N902",
    IS_DBLIFE: "457",
    IS_DBFIRE: "443",
    IS_DGB: "456",
    IS_KBFIRE: "444",
    IS_KDB: "458",
    IS_MG: "N903",
    IS_NHLIFE: "N904",
    IS_NHFIRE: "N905",
    IS_CARROT: "N895",
    IS_ACE: "N899",
    IS_AIGLIFE: "455",
    IS_LIFEPLANET: "433",
    IS_SGIC: "094",
    IS_IBKI: "N907",
    IS_THEK: "N906",
    IV_YUANTA: "209",
    IV_KB: "218",
    IV_SSIN: "221",
    IV_HANYANG: "222",
    IV_LEADING: "223",
    IV_BNK: "224",
    IV_IBK: "225",
    IV_DAOL: "227",
    IV_MIRAE: "238",
    IV_SAMSUNG: "240",
    IV_KOREA: "243",
    IV_NH: "247",
    IV_KYOBO: "261",
    IV_HI: "262",
    IV_HM: "263",
    IV_KIWOOM: "264",
    IV_EBEST: "265",
    IV_SK: "266",
    IV_DAISHIN: "267",
    IV_HANWHA: "269",
    IV_HANA: "270",
    IV_TOSS: "271",
    IV_SHINHAN: "278",
    IV_DBFI: "279",
    IV_EUGENE: "280",
    IV_MERITZ: "287",
    IV_KAKAOPAY: "288",
    IV_BOOKOOK: "290",
    IV_SHINYOUNG: "291",
    IV_CAPE: "292",
    IV_HANKUK: "293",
    IV_FOSS: "294",
    IV_WOORI: "295",
    IV_DS: "N837",
    IV_KR: "N838",
    IV_MACQUARIE: "N839",
    IV_YUHWA: "N840",
    IV_KTB: "N841",
    IV_KOREAASSET: "N842",
    IV_HEUNGKUK: "N843"
  }
  
  // https://financial.pstatic.net/pie/common-bi/1.0.2/images/BK_SHINHAN_Profile.png
  const BASE_URL = "https://financial.pstatic.net/pie/common-bi/1.0.2/images/";
  const SUFFIX = "Profile.png";
  
  export function getImgPathByCode(code) {
    //console.log(code)
    let name = Object.entries(NAME_CODE).filter(([key, value]) => {
      return code == value;
    })[0];

    return toUrl(name[0]);
  }
  
  function toUrl(name) {
    return `${BASE_URL}${name}_${SUFFIX}`;
  }