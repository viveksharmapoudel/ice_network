import { ethers } from "ethers";
import { provider } from "./config";

export function getByPrivateKey(pk: string) {
	try {
		const wallet = new ethers.Wallet(pk);

		// const encrypted_json = wallet.encrypt("password_here");
		// // saving wallet
		// encrypted_json.then((json) => fs.writeFileSync("wallet", json));
		// let encrypted_wallet = fs.readFileSync("wallet", { encoding: "utf8" });
		// let wallet_ = ethers.Wallet.fromEncryptedJson(
		// 	encrypted_wallet,
		// 	"password_here"
		// );
		return wallet;
	} catch (e) {
		console.log("error occured", e);
	}
}

export function getBalance(wallet: ethers.Wallet): Promise<ethers.BigNumber> {
	return provider.getBalance(wallet.address).then((bal) => bal);
}

export function getBlockNumber(): Promise<number> {
	return provider.getBlockNumber();
}

export async function balanceTransfer(
	senderWallet: ethers.Wallet,
	receiverWallet: ethers.Wallet,
	value: number
) {
	const tx = {
		to: receiverWallet.address,
		value: ethers.utils.parseEther(String(value)),
	};

	const connect_sender = senderWallet.connect(provider);

	await connect_sender.sendTransaction(tx).then((res) => console.log(res));
}
