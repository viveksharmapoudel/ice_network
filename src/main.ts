import {
	balanceTransfer,
	getBalance,
	getBlockNumber,
	getByPrivateKey,
} from "./helper";

async function main() {
	const block = await getBlockNumber();
	console.log("current block number is ", block);

	transferTest();
}

const pkICZ1 =
	"2287054547c45ca8c9afc689a5457268803709287b2b7365e9e748562364fc6e";
const pkICZ2 =
	"1a87d4c53366bd17ff02a7fda4ca8ffdfcd7a67cb5e1ca8cad863ae270525f81";

const pkG1 =
	"0x9893a04cabb36212c9f0a7615b84e40516b78088db0ccb0ca2eceea949126d5b";
const pkG2 =
	"0xaf2471d51ccfd9e67e1394f7de8d6279c391d49bf25cab28d8614c0b5a6545a9";

async function transferTest() {
	const sender = await getByPrivateKey(pkG1);
	const receiver = await getByPrivateKey(pkG2);
	if (sender != undefined && receiver != undefined) {
		const balance = await getBalance(sender);
		console.log("balance -> ", balance._hex);

		balanceTransfer(sender, receiver, 2);
	}
}

main();
