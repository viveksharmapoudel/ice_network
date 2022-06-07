import { ethers } from "ethers";

const conUrl = "https://arctic-rpc.icenetwork.io:9933/";
const remote_provider = new ethers.providers.JsonRpcProvider(conUrl);
const local_provider = new ethers.providers.JsonRpcProvider();
export const provider = local_provider;
