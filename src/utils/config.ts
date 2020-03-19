interface ServerNode {
  name: string
  url: string
}
export { ServerNode }
interface API {
  serverList: Array<ServerNode>
  jsonRpc: string
  url: string
  status: string
  statistics: string
  blockList: string
  blockListV2: string
  transactionList: string
  ercTransactionList: string
}

interface Config {
  api: API
  apiTimeout: number
  apiTimeoutMsg: string
  apiErrorMsg: string
  icpRecordName?: string
  icpRecordUrl?: string
}

const api: API = {
  serverList: [
    {
      name: 'Re-Birth Server',
      url: 'https://rebirth.citahub.com'
    },
    {
      name: 'CITA Node Server',
      url: 'https://testnet.citahub.com'
    }
  ],
  jsonRpc: '/',
  url: '/api/info/url',
  status: '/api/status',
  statistics: '/api/statistics',
  blockList: '/api/blocks',
  blockListV2: '/api/v2/blocks',
  transactionList: '/api/transactions',
  ercTransactionList: '/api/erc20/transfers'
}

const config: Config = {
  api: api,
  apiTimeout: 15000,
  apiTimeoutMsg: 'api timeout，try it later',
  apiErrorMsg: 'network error！',
  icpRecordName: '',
  icpRecordUrl: ''
}

export { api }
export default config
