import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer Logo" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/53091519?s=460&u=0bdce2798f871a65f4b296f50ea9f57a3dc81689&v=4" 
                        alt="Alison Bessa"
                    />
                    <div>
                        <strong>Endereço do repositório</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/53091519?s=460&u=0bdce2798f871a65f4b296f50ea9f57a3dc81689&v=4" 
                        alt="Alison Bessa"
                    />
                    <div>
                        <strong>Endereço do repositório</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/53091519?s=460&u=0bdce2798f871a65f4b296f50ea9f57a3dc81689&v=4" 
                        alt="Alison Bessa"
                    />
                    <div>
                        <strong>Endereço do repositório</strong>
                        <p>Descrição do repositório</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;