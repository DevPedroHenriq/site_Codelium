# Configuração do Sistema de Email

Este projeto usa o **Web3Forms** para enviar emails do formulário de contato para `codeliumcompany@gmail.com`.

## Passos para Configuração:

### 1. Criar Conta no Web3Forms (Gratuito)
- Acesse: https://web3forms.com
- Clique em "Get Started for Free"
- Faça login com GitHub ou Google

### 2. Obter a Access Key
- Após fazer login, você verá seu dashboard
- Digite o email de destino: `codeliumcompany@gmail.com`
- Clique em "Create Access Key"
- Copie a chave gerada (formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

### 3. Configurar Variável de Ambiente no Vercel
- Acesse o dashboard do seu projeto no Vercel
- Vá em: Settings → Environment Variables
- Adicione uma nova variável:
  - **Name:** `WEB3FORMS_ACCESS_KEY`
  - **Value:** Cole a chave que você copiou
  - **Environments:** Marque Production, Preview e Development
- Clique em "Save"

### 4. Fazer Redeploy
- Após adicionar a variável de ambiente, faça um novo deploy do projeto
- Ou use o comando: `vercel --prod`

## Como Funciona:

1. Usuário preenche o formulário no site
2. Ao clicar em "Enviar Mensagem", os dados são enviados para `/api/contact`
3. A API formata os dados e envia via Web3Forms
4. Web3Forms encaminha o email para `codeliumcompany@gmail.com`
5. Usuário recebe confirmação de envio

## Campos Enviados:

- **Nome:** Nome completo do cliente
- **Email:** Email para contato
- **Telefone:** Número de telefone
- **Como nos encontrou:** Origem do lead (Google, Instagram, Indicação, etc.)
- **Nicho:** Segmento de atuação do cliente
- **Mensagem:** Descrição do projeto/necessidade

## Recursos do Plano Gratuito:

- ✅ 250 submissões por mês
- ✅ Notificações por email
- ✅ Proteção anti-spam
- ✅ Sem limite de tempo

## Suporte:

Se tiver problemas, verifique:
- A variável de ambiente está configurada corretamente
- O projeto foi deployado após adicionar a variável
- Verifique os logs no Vercel para erros
- Teste localmente criando um arquivo `.env.local` com a chave
