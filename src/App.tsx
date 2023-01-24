import { Header } from "./components/Header";
import { Input } from './components/Input';
import { CreateButton } from './components/CreateButton';
import TasksBoard from "./components/TasksBoard";

import styles from "./App.module.css";


function App() {

  return (
    <>
      <Header />
      <main>
        <div className={styles.inputContainer}>
          <Input />
          <CreateButton />
        </div>
        <TasksBoard />
      </main>
    </>
  )
}

export default App
