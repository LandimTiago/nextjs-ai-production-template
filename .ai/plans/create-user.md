Você está trabalhando neste repositório e deve seguir estritamente as instructions do repo (.github/copilot-instructions.md e .github/instructions/\*.instructions.md).

Tarefa: implementar a feature CreateUser (mock).

Requisitos obrigatórios:

Separar claramente em domain, application e infra

Domain e Application não podem importar Next/React

Criar erros tipados:

InvalidInputError

UserAlreadyExistsError

Validação de input deve acontecer no application

Persistência fake em memória (infra)

Criar rota POST app/api/users/route.ts

Rota deve apenas: ler request, chamar use-case, mapear erros para HTTP

Criar teste unitário do use-case com Vitest

Formato da resposta (obrigatório):

Lista de arquivos criados/modificados

Código completo de cada arquivo

Riscos / contratos afetados

Plano de validação (testes + curl)

Assumptions

Não faça refactor fora do escopo. Não adicione bibliotecas sem justificar.
