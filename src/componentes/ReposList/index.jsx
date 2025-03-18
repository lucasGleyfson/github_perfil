import { useEffect } from "react";
import { useState } from "react";
import styles from './ReposList.module.css'


const ReposList = ({nomeUsuario}) => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson);
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {/* <h1>Repositórios</h1> */}
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id} className={styles.listItem} >

                        <div className={styles.ItemName} >
                            <b>Nome</b>
                            {name}
                        </div>

                        <div className={styles.ItemLanguage}>
                            <b>Linguagem</b>
                            {language}
                        </div>

                        <a className={styles.ItemLink} target="_blank" href={html_url}>visitar no GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ReposList;