
import MainScreen from './src/Screens/MainScreen';

const taskList = [
  {
    id: 1,
    task: "Clase a las 9am",
    completed: false
  },
  {
    id: 2,
    task: "Limpiar el living",
    completed: false
  },{
    id: 3,
    task: "Limpiar el baño",
    completed: false
  },{
    id: 4,
    task:  "Ir al mercado",
    completed: false
  },{
    id: 5,
    task: "Clase a las 7pm",
    completed: false
  },
]

export default function App() {
  return (
    <MainScreen taskList = {taskList}/>
  );
}
