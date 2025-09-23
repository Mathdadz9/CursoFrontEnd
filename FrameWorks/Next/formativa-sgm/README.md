# Sistema de Gestão de Manutenção (Formativa)

## Briefing

### Visão Geral do Projeto
O projeto consiste no desenvolvimento de um Sistema de Gestão de Manutenção (SGM) no formato de uma aplicação web.

## Escopo

- ### Objetivos:

- ### Público-Alvo:
    - Técnicos de Manutenção
    - Gestores de Manutenção
    - Administradores do Sistema

- ### Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

1. ### Diagrama de Classes
Este Diagrama modela as principais entidades do sistema:
- Usuarios (User/usuarios);
- Maquinas/Equipamentos (Equipment);
- Ordem de Serviço (Service);


```mermaid

classDiagram

    class Usuario {
        +String id
        +String nome
        +String email
        +String senha
        +String funcao
        +login()
        +logout()
        +create()
        +read()
        +update()
        +delete()
    }

    class Equipamento {
        +String id
        +String nome
        +String modelo
        +String numeroSerie
        +String localizacao
        +String status
        +create()
        +read()
        +update()
        +delete()
    }

    class OrdemDeServico {
        +String id
        +String titulo
        +String descricao
        +String tipoManutencao
        +String status
        +String IdEquipamento
        +create()
        +read()
        +update()
        +delete()
        +abrir()
        +fechar()
    }

    Usuario "1" --> "1+" OrdemDeServico : Responsavel *
    Equipamento "1" --> "1+" OrdemDeServico : associado a*
```
 #### Explicação do Diagrama de Classe
 - Um Usuário (Técnico) por ser responsável por várias Ordens de Servico
 - Um Equipamento por estar associado a várias Ordens de Serviço

 2. ### Diagrama de Caso de Uso
 Ilustrar as interações dos diferentes atores com o sistema. 



```mermaid
graph TD
    subgraph "SGM"
        UC1([Fazer Login])
        UC2([Gerenciar Ordens de Serviço - CRUD])
        UC3([Gerenciar Equipamentos - CRUD])
        UC4([Gerenciar Usuários - CRUD])
        UC5([Acessar o DashBoard])
        UC6([Gerar Relatórios])
        UC7([Atribuir Ordem de Serviço])
        UC8([Atualizar Status de Ordem])
        UC9([Pesquisar Equipamentos])
    end

    Tecnico([Técnico de Manutenção])
    Gestor([Gerente de Manutenção])
    Admin([Administrador do Sistema])
    Usuario([Usuário Comum])

    %% === Relacionamentos ===
    Tecnico --> UC1
    Tecnico --> UC2
    Tecnico --> UC3
    Tecnico --> UC5
    Tecnico --> UC8
    Tecnico --> UC9

    Gestor --> UC1
    Gestor --> UC2
    Gestor --> UC3
    Gestor --> UC5
    Gestor --> UC6
    Gestor --> UC7
    Gestor --> UC8

    Admin --> UC1
    Admin --> UC4
    Admin --> UC5
    Admin --> UC6

    Usuario --> UC1
    Usuario --> UC5
    Usuario --> UC3
```