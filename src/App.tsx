import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Input } from './components/Input';
import { CreateButton } from './components/CreateButton';
import TasksBoard from "./components/TasksBoard";

import styles from "./App.module.css";


function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isLoadPage, setIsLoadPage] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const darkThemeIsActive = darkTheme ? 'darkTheme' : 'lightTheme';


  function setTasksStorage() {
    // Se é load ou reload da página, ele vai prevenir o useEffect na atualização do state tasks
    // atualizar e zerar as tasks armazenadas...
    if (isLoadPage) {
      setIsLoadPage(false);
      return;
    }

    const parsedTasks = JSON
      .stringify(tasks);

    localStorage
      .setItem('listTasks', parsedTasks);
  }

  function getTasksOnStorage() {
    const tasksOnStorage = localStorage.getItem('listTasks');

    if (tasksOnStorage) {
      const parsedTasksOnStorage = JSON.parse(tasksOnStorage);
      setTasks(parsedTasksOnStorage);
    }

    return;
  }

  useEffect(() => {
    getTasksOnStorage()
  }, [])

  useEffect(() => {
    setTasksStorage()
  }, [tasks])


  return (
    <section className={`
      ${styles[darkThemeIsActive]}
      ${styles.section}
    `}>
      <Header />
      <main>
        <form className={styles.inputContainer}>
          <Input
            theme={darkThemeIsActive}
            stateManagement={[inputValue, setInputValue]}
          />
          <CreateButton
            stateManagement={[setTasks, inputValue, setInputValue]}
          />
        </form>
        <TasksBoard 
          theme={darkThemeIsActive}
          stateManagement={[tasks, setTasks]}
        />
      </main>
    </section>
  )
}

export default App
