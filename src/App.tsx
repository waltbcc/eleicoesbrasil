import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import formatarDataLongaBR from "./Utils";

interface AuditoriaRow {
  // Adicione as propriedades da auditoria aqui
  [key: string]: any;
}

interface CapaRow {
  caminho: string;
  codimagem: number;
  relevancia: number;
}

function App() {
  const [auditoria, setAuditoria] = useState<AuditoriaRow[] | null>(null);
  const [capas, setCapas] = useState<CapaRow[] | null>(null);

  useEffect(() => {
    const fetchAuditoria = async () => {
      try {
        const response = await axios.get("/api/getAuditoria");
        console.log("Auditoria:", response.data.rows);
        setAuditoria(response.data.rows);
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response?.data?.message || error.message
            : "Erro desconhecido";

        console.log("Failed to request auditoria:", errorMessage);
        setAuditoria(null);
      }
    };

    fetchAuditoria();
  }, []);

  useEffect(() => {
    const fetchCapas = async () => {
      try {
        const response = await axios.get("/api/getCapas");
        console.log("Capas:", response.data.rows);
        setCapas(response.data.rows);
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response?.data?.message || error.message
            : "Erro desconhecido";

        console.log("Failed to request capas:", errorMessage);
        setCapas(null);
      }
    };

    fetchCapas();
  }, []);

  return (
    <>
      <Header
        codacompan="Eleições Brasil - 2026"
        data_extenso={formatarDataLongaBR(new Date())}
      />

      <Main auditoria={auditoria} capas={capas} />

      <Footer />
    </>
  );
}

export default App;
