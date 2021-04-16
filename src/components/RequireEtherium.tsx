import * as React from 'react'

const RequireEtherium: React.FC = ({ children }) => {
  const notEnabled = (
    <div>
      <h1>Your wallet is not connected.</h1>
      <ol>
        <li>
          Download{' '}
          <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'>
            MetaMask
          </a>
        </li>
        <li>Select "Ropsten Test Network"</li>
        <li>
          Send yourself some tokens{' '}
          <a href='https://faucet.ropsten.be/'>https://faucet.ropsten.be/</a>
        </li>
        <li>Start checking of todos</li>
      </ol>
    </div>
  )

  if (typeof window === 'undefined') {
    return notEnabled
  }

  if (typeof window.ethereum === 'undefined') {
    return notEnabled
  }

  return <>{children}</>
}

export default RequireEtherium
