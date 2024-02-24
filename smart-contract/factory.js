import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB99b0E2974F7A07Ceec1d4BcBf1FFdC0E7Cbf738"
);

export default instance;
