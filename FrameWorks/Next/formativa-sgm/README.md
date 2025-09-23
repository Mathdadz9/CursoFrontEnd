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


## 📌 Diagrama de Classes

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

