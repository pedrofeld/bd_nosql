import repository from "../database/repository";
import { CriarUserDto } from "../dtos/criar-user.dto";

export class UserService {
    public async criar(dados: CriarUserDto){
        try {
            // 1 - entrada de dados (dados: CriarUserDto)

            // 2 - lógica de negócio (validações, regras, etc) + processamento
            const result = await repository.user.create({
                data: {
                    nome: dados.nome,
                    email: dados.email,
                    senha: dados.senha,
                    endereco: {
                        cidade: dados.endereco.cidade,
                        uf: dados.endereco.uf,
                        rua: dados.endereco.rua,
                        numero: dados.endereco.numero,
                    },
                    dtNascimento: dados.dtNascimento,
                }
            });

            // 3 - saída de dados (retorno)
            return result;
        } catch (error: any) {
            console.log(error.toString());
            return null;
        }
    }
}