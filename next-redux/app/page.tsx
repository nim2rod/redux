// npx create-next-app --example with-redux my-app

/* Components */
import { Counter } from './components/Counter/Counter'

export default function IndexPage() {
  return <Counter />
}

export const metadata = {
  title: 'Redux Toolkit',
}
