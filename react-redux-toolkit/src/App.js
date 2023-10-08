import { createPortal } from 'react-dom';
import './App.css';
import Counter from './features/counter/Counter';
import ModalComponent from './features/modal/ModalComponent';
import SearchUsers from './features/search/UsersList';
import { useSelector, useDispatch } from 'react-redux';

import {
  showModal,
  hideModal,
} from "./features/modal/modalSlice";
import TodoList from './features/search/TodoList';

function App() {
  // const [showModal, setShowModal] = useState(false);
  const isModalOpen = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();

  return (
    <main className="App">
      <Counter />
      <hr />
      <section className="box">
        <button onClick={() => dispatch(showModal())}>
          Show Modal
        </button>

        {
          isModalOpen &&
          createPortal(
            <ModalComponent onClose={() => dispatch(hideModal())} />, document.body)
        }

        <button onClick={() => {
          console.log('reset');
          dispatch({ type: 'logout' })
        }}>
          Reset Store
        </button>

      </section>
      <section className="search-list">
        <SearchUsers />
        <TodoList />
      </section>
    </main>
  );
}

export default App;
