import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './Repositorios.Styles.css';

const Repositorios = () => {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {

        async function loadRepositories() {
            const response = await Axios.get('https://api.github.com/users/diogoschimm/repos');
            setRepositories(response.data);
        }

        loadRepositories();

    }, []) // Vai executar somente uma vez, como se fosse o componentDidMount, porque do Array vazio []

    return (
        <div className="repositorios">
            {repositories.map((repo, index) => (
                <div key={repo.id} className="repo">
                    <small>{index + 1}</small><br />
                    <strong>{repo.name}</strong> <br />
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Acessar</a>
                </div>
             ))}
        </div>
    );
}
export default Repositorios;