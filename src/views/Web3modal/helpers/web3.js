import { KIP7_CONTRACT, KIP17_CONTRACT } from '../constants'
import { apiGetGasPriceKlaytn,  getChainData } from './utilities'

export function getKIP7Contract(web3, contractAddress) {
    const tokenContract = new web3.eth.Contract(
        KIP7_CONTRACT.abi,
        contractAddress
    );
    return tokenContract;
}

export function getKIP17Contract(web3, contractAddress) {
    const tokenContract = new web3.eth.Contract(
        KIP17_CONTRACT.abi,
        contractAddress
    );
    return tokenContract
}

export function callBalanceOf(address, chainId, contractAddress, web3) {
    return new Promise(async(resolve, reject) => {
        try{
            const contract = getKIP7Contract(web3, contractAddress)

            await contract.methods
            .balanceOf(address)
            .call(
                { from: '0x0000000000000000000000000000000000000000' },
                (err, data) => {
                if (err) {
                    console.log('err', err)
                    reject(err)
                }
                    resolve(data)
                }
            )
        } catch(err) {
            reject(err)
        }
    })
}

export function callTransfer(address, chainId, contractAddress, web3) {
    return new Promise(async(resolve, reject) => {
        try {
            const contract = getKIP7Contract(web3, contractAddress)
            const chain = getChainData(chainId).chain
            const gasPrice = chain === 'klaytn' ? await apiGetGasPriceKlaytn(chainId) : undefined;
            const gas = chain === 'klaytn'
                ? await contract.methods.transfer(address, '1000000000000000000').estimateGas({from: address})
                : undefined;
            await contract.methods
            .transfer(address, '1000000000000000000')
            .send({ from: address, gas: gas, gasPrice: gasPrice}, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        } catch(err) {
            reject(err)
        }
    })
}

export function callTransferFrom(address, chainId, contractAddress, web3, tokenId) {
    return new Promise(async(resolve, reject) => {
        try {
            const contract = getKIP17Contract(web3, contractAddress)
            const chain = getChainData(chainId).chain
            const gasPrice = chain === 'klaytn' ? await apiGetGasPriceKlaytn(chainId) : undefined;
            const gas = chain === 'klaytn'
                ? await contract.methods.transferFrom(address, address, tokenId).estimateGas({from: address})
                : undefined;
            await contract.methods
            .transferFrom(address, address, tokenId)
            .send({ from: address, gas: gas, gasPrice: gasPrice}, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        } catch(err) {
            reject(err)
        }
    })
}
