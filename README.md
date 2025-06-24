# App

Check-in em clientes

## RF's - Requisitos Funcionais
- [] Deve ser possivel se cadastrar;
- [] Deve ser possivel se autenticar;
- [] Deve ser possivel obter o perfil de um usuário logado;
- [] Deve ser possível obeter o número de check-ins realizados pelo técnico;
- [] Deve ser possível o usuário obter seu histórico de check-ins no cliente;
- [] Deve ser possível visualizar as filiais de clientes próximos;
- [] Deve ser possível o usuário buscar filiais de clientes pelo nome;
- [] Deve ser possivel o usuário realizar check-in no cliente;
- [] Deve ser possível validar o check-in de um usuário;
- [] Deve ser possível cadastrar a filial de um cliente;

## RN's - Regras de Negócio
- [] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] O técnico não pode fazer 5 check-ins em clientes no mesmo dia;
- [] O técnico não pode fazer check-in se não estiver perto de (100m) da academia;
- [] O check-in só pode ser validado até 20 minutos após criado;
- [] O check-in só pode ser valido por administradores;

## RNF's - Requisitos não Funcionais
- [] A senha do usuário precisa estar criptografada
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [] O usuário deve ser identificado por um JWT (JSON Web Token)