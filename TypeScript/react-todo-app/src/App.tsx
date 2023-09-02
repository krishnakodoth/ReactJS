import { useState } from "react";
import { Toaster } from "react-hot-toast";
import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

import styles from "./styles/modules/app.module.scss";
import ActionBar from "./components/ActionBar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <AppContent />
          <ActionBar setModalOpen={setModalOpen} />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: "1.4rem",
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
