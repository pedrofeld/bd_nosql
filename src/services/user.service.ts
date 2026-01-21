import repository from "../database/repository";
import { CriarUserDto } from "../dtos/criar-user.dto";

export class UserService {
    public async criar(dados: CriarUserDto){
        try {
            // 1 - entrada de dados (dados: CriarUserDto)

            // 2 - lógica de negócio (validações, regras, etc) + processamento
            const result = await repository.user.create({
                data: dados,
            });

            // 3 - saída de dados (retorno)
            return result;
        } catch (error: any) {
            console.log(error.toString());
            return null;
        }
    }
}