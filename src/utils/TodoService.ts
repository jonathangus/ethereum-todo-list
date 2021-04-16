import { Contract, ethers, providers } from 'ethers'
import Todo from '../artifacts/contracts/Todo.sol/Todo.json'

declare global {
  interface Window {
    ethereum: any
  }
}

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' })
}

if (typeof process.env.NEXT_PUBLIC_TODO_ADRESS !== 'string') {
  throw new Error('Missing adress for contract')
}
const adress: string = process.env.NEXT_PUBLIC_TODO_ADRESS

class TodoService {
  provider: providers.Web3Provider
  contract: Contract

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum)
    this.contract = new ethers.Contract(adress, Todo.abi, this.provider)
  }

  getAll = async () => {
    try {
      const data = await this.contract.getAll()

      return data || []
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  addTodo = async (name: string) => {
    await requestAccount()
    const signer = this.provider.getSigner()
    const contract = new ethers.Contract(adress, Todo.abi, signer)
    const transaction = await contract.addTodo(name)
    await transaction.wait()
  }

  toggleTodo = async (id: number, completed: boolean) => {
    await requestAccount()
    const signer = this.provider.getSigner()
    const contract = new ethers.Contract(adress, Todo.abi, signer)
    const transaction = await contract.toggle(id, completed)
    await transaction.wait()
  }
}

export default TodoService
