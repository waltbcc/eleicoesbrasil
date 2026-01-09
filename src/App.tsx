import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import formatarDataLongaBR from "./Utils";

function App() {

    const [auditoria, setAuditoria] = useState(null);
    const [capas, setCapas] = useState(null);

    useEffect(() => {
        const fetchAuditoria = async () => {
            try {
                const response = await axios.get('/api/getAuditoria');
                console.log("Auditoria:", response.data.rows);
                setAuditoria(response.data.rows);
            } catch (error) {
                console.log(
                    'Failed to request auditoria: ',
                    (error.response ? error.response.data.message : '')
                );
                setAuditoria(
                    'Failed to request auditoria: ',
                    (error.response ? error.response.data.message : '')
                );
            }
        };

        fetchAuditoria();
    }, []); // <-- executa apenas 1 vez

    useEffect(() => {
        const fetchCapas = async () => {
            try {
                const response = await axios.get('/api/getCapas');
                console.log("Capas:", response.data.rows);
                setCapas(response.data.rows);
            } catch (error) {
                console.log(
                    'Failed to request capas: ',
                    (error.response ? error.response.data.message : '')
                );
                setCapas(
                    'Failed to request capas: ',
                    (error.response ? error.response.data.message : '')
                );
            }
        };

        fetchCapas();
    }, []); // <-- executa apenas 1 vez

    return (
        <>
            {Header("Eleições Brasil - 2026", formatarDataLongaBR(new Date()))}

            {Main(auditoria, capas)}

            <Footer />
        </>
    );
}

export default App;