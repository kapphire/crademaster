const TronWeb = require('tronweb');
const contractArtifact = require('./build/contracts/TRXtoUSDTExchange.json');

// TRON configuration
const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const eventServer = 'https://api.shasta.trongrid.io';
const privateKey = 'YOUR_PRIVATE_KEY'; // Replace with your private key

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

// Contract interaction
async function main() {
    const contractAddress = 'TXXXXXXXXXXXXXXXXXXXXXXXX'; // Replace with your deployed contract address
    const contract = await tronWeb.contract().at(contractAddress);

    // Fetch the current TRX/USDT price
    const trxToUsdtPrice = await contract.getTRXToUSDTPrice().call();
    console.log(`Current TRX to USDT price: ${trxToUsdtPrice.toString()}`);

    // Send some TRX to the contract
    const tx = await tronWeb.trx.sendTransaction(contractAddress, 1000000); // 1 TRX in sun (smallest unit)
    console.log(`TRX sent to contract: ${tx.txid}`);
}

main().catch(console.error);
