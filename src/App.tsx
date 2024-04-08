import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <Header />
      <main className="flex-1 h-full w-full">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
