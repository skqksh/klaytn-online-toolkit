import BlockHashDecoder from './views/BlockInfo/BlockHashDecoder'

import SendMultisigTx from './views/Transaction/SendMultisigTx'
import TxHashDecoder from './views/Transaction/TxHashDecoder'
import RLPEncoder from './views/Transaction/RLPEncoder'
import RLPDecoder from './views/Transaction/RLPDecoder'

import FunctionSignature from './views/SmartContract/FunctionSignature'
import FunctionCall from './views/SmartContract/FunctionCall'
import ABIEncoder from './views/SmartContract/ABIEncoder'
import ABIDecoder from './views/SmartContract/ABIDecoder'
import DetectKCT from './views/SmartContract/DetectKCT'
import KIP7Deploy from './views/SmartContract/KIP7Deploy'

import CheckAccountKey from 'views/Miscellaneous/CheckAccountKey'
import GenerateKeystore from './views/Miscellaneous/GenerateKeystore'
import KeccakFromString from './views/Miscellaneous/KeccakFromString'
import LoadKeystore from './views/Miscellaneous/LoadKeystore'
import AccountUpdateWithMultiSigKey from './views/Miscellaneous/AccountUpdateMultiSig'
import AccountUpdateWithRoleBasedKey from './views/Miscellaneous/AccountUpdateRoleBased'

import { RouteType } from 'types'

const routes: RouteType[] = [
  {
    name: 'Block Info',
    path: '/blockinfo',
    items: [
      {
        path: '/blockhashDecode',
        name: 'Decoder from BlockHash',
        component: BlockHashDecoder,
      },
    ],
  },
  {
    name: 'Transaction',
    path: '/transaction',
    items: [
      {
        path: '/rlpEncode',
        name: 'RLP Encoder',
        component: RLPEncoder,
      },
      {
        path: '/rlpDecode',
        name: 'Decoder from RLP',
        component: RLPDecoder,
      },
      {
        path: '/txHashDecode',
        name: 'Decoder from txHash',
        component: TxHashDecoder,
      },
      {
        path: '/sendMultisigTx',
        name: 'Send Multisig Transaction',
        component: SendMultisigTx,
      },
    ],
  },
  {
    name: 'Smart Contract',
    path: '/smartcontract',
    items: [
      {
        path: '/ABIEncoder',
        name: 'ABI Encoder',
        component: ABIEncoder,
      },
      {
        path: '/ABIDecoder',
        name: 'ABI Decoder',
        component: ABIDecoder,
      },
      {
        path: '/functionCall',
        name: 'Function Call with ABI & Params',
        component: FunctionCall,
      },
      {
        path: '/functionSig',
        name: 'Encode Function Signature',
        component: FunctionSignature,
      },
      {
        path: '/KCTDetection',
        name: 'KCT Detection',
        component: DetectKCT,
      },
      {
        path: '/KIP7Deploy',
        name: 'Deploy KIP-7 Token',
        component: KIP7Deploy,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    path: '/misc',
    items: [
      {
        path: '/loadKeystore',
        name: 'Load Keystore',
        component: LoadKeystore,
      },
      {
        path: '/generateKeystore',
        name: 'Generate Keystore',
        component: GenerateKeystore,
      },
      {
        path: '/hashFromStr',
        name: 'Hash From String(Keccak256)',
        component: KeccakFromString,
      },
      {
        path: '/accountUpdateWithMultiSigKey',
        name: 'Update Account with MultiSigKey',
        component: AccountUpdateWithMultiSigKey,
      },
      {
        path: '/accountUpdateWithRoleBasedKey',
        name: 'Update Account with RoleBasedKey',
        component: AccountUpdateWithRoleBasedKey,
      },
      {
        path: '/checkAccountKey',
        name: 'Check Account Key Type by Address',
        component: CheckAccountKey,
      },
    ],
  },
]

export default routes
