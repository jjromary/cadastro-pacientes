import React from "react";
import { Header } from "../../components/Header";
import { GlobalStyle } from "../../styles/global";
import { useState } from "react";
import { NewPacienteModal } from "../../components/NewPacienteModal";
import { Dashboard } from "../../components/Dashboard";
import { Footer } from "../../components/Footer";

export function PagesHome(){
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  

    function handleOpenNewTaskModal() {
      setIsNewTaskModalOpen(true);
    }
  
    function handleCloseNewTaskModal() {
      setIsNewTaskModalOpen(false);
    }
    return (
      <>
        <Header  onOpenNewTaskModal={handleOpenNewTaskModal}/>
        <Dashboard />
        <NewPacienteModal 
          isOpen={isNewTaskModalOpen} 
          onRequestClose={handleCloseNewTaskModal}
        />
        <Footer />
        <GlobalStyle />
      </>
    );
}