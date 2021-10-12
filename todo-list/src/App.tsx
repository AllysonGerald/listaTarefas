import {useState} from 'react';
import * as C from './App.styles';
import {Item} from './types/item';

const App = () => {
  const [list, setList] = useState<Item[]>([

    {id: 1, name: 'Comprar Pão', done: false},
    {id: 2, name: 'Comprar Leite', done: false},
    {id: 2, name: 'Comprar Feijão', done: false},
  ]);
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área de adicionar novas tarefas */}

        {list.map((item, index)=>(
          <div>{item.name}</div>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;