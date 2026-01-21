import { UserService } from "./services/user.service";
import "dotenv/config";

console.log("Hello, world!")

const userService = new UserService();

userService.criar({
    nome: "Pedro",
    email: "pedro.gael.feld@gmail.com",
    senha: 123456,
    endereco: {
        cidade: "Sapiranga",
        uf: "RS",
        rua: "Rua A",
        numero: 100,
    },
    dtNascimento: new Date("2004-08-17"),
})
.then(result => console.log(result))
.catch(error => console.log(error));

// não está sendo possível criar um novo user devido a um problema com o prisma client
// npm run dev retorna com erro, ele não localiza o módulo '@prisma/client'