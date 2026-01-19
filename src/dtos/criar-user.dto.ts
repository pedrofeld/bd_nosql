export interface CriarUserDto {
    nome: string;
    email: string;
    senha: number;
    endereco: CriarUserEndereco;
    dtNascimento?: Date;
}

interface CriarUserEndereco {
    cidade: string;
    uf: string;
    rua: string;
    numero: number;
}