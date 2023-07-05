
    export const Pessoa = ({nome, idade, profissao, fotoPessoa}) =>{
        return(
            <div>
                <h1>Nome: {nome}</h1>
                <p>Idade: {idade}</p>
                <p>Profissao: {profissao}</p>
                <img src={fotoPessoa} alt={nome} />
            </div>
        )
    }