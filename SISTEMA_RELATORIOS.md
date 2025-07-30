# Sistema de Relatórios de Desempenho - ENADE

## 📊 Visão Geral

O sistema de relatórios permite aos administradores analisar o desempenho dos alunos e identificar padrões de acerto/erro nas questões do ENADE.

## 🔧 Funcionalidades Implementadas

### **1. Captura de Dados**
- ✅ **Tentativas por Questão**: Registra cada tentativa de resposta
- ✅ **Respostas dos Alunos**: Armazena respostas individuais
- ✅ **Dados de Sessão**: Informações completas de cada quiz
- ✅ **Timestamps**: Data e hora de cada interação

### **2. Tipos de Relatórios**

#### **📈 Relatório por Questão**
- **Total de tentativas** por questão
- **Número de acertos** e erros
- **Taxa de acerto** em porcentagem
- **Detalhes individuais** de cada tentativa
- **Gráfico de barras** comparativo

#### **👥 Relatório por Aluno**
- **Número de sessões** por aluno
- **Total de questões** respondidas
- **Taxa de acerto** individual
- **Histórico de sessões** com detalhes
- **Gráfico de rosca** com desempenho

#### **📋 Visão Geral**
- **Métricas gerais** do sistema
- **Total de sessões** e alunos únicos
- **Taxa média de acerto** geral
- **Gráficos temporais** de atividade
- **Distribuição** de dados

### **3. Filtros Disponíveis**
- **Por Aluno**: Relatórios específicos por estudante
- **Por Período**: Últimos 7, 30, 90 dias ou todo período
- **Por Tipo**: Questões, alunos ou visão geral

## 🗂️ Estrutura de Dados

### **Coleção "reports"**
```javascript
{
  studentId: "uid_do_aluno",
  studentName: "Nome do Aluno",
  studentEmail: "email@exemplo.com",
  sessionId: "timestamp_único",
  startTime: "Data/hora início",
  endTime: "Data/hora fim",
  totalQuestions: 10,
  correctAnswers: 7,
  score: 70,
  questionAttempts: {
    "questao_1": {
      totalAttempts: 1,
      correctAnswers: 1,
      wrongAnswers: 0,
      attempts: [
        {
          studentId: "uid",
          studentAnswer: "A",
          isCorrect: true,
          timestamp: "2024-01-01T10:00:00Z"
        }
      ]
    }
  },
  studentAnswers: [
    {
      questionId: "questao_1",
      studentAnswer: "A",
      correctAnswer: "A",
      isCorrect: true,
      timestamp: "2024-01-01T10:00:00Z",
      studentId: "uid"
    }
  ],
  themes: ["Matemática", "Português"],
  isAllQuestionsMode: false
}
```

## 📁 Arquivos do Sistema

### **1. `reports-panel.html`**
- **Painel principal** de relatórios
- **Interface administrativa** com login
- **Gráficos interativos** com Chart.js
- **Tabelas detalhadas** de dados
- **Filtros avançados**

### **2. `enade.html` (Modificado)**
- **Captura de tentativas** em tempo real
- **Registro de respostas** dos alunos
- **Salvamento automático** de dados
- **Integração** com sistema de login

### **3. `admin-panel-fixed.html` (Modificado)**
- **Link para relatórios** no painel admin
- **Navegação integrada** entre painéis

## 🎯 Como Usar

### **1. Acesso aos Relatórios**
1. Faça login no painel administrativo
2. Clique em **"📊 Relatórios"**
3. Faça login novamente (segurança)
4. Selecione o tipo de relatório

### **2. Gerando Relatórios**
1. **Escolha o tipo**: Questões, Alunos ou Visão Geral
2. **Selecione filtros**: Aluno específico e período
3. **Clique em "Gerar Relatório"**
4. **Analise os dados** nos gráficos e tabelas

### **3. Visualizando Detalhes**
- **Clique em "Detalhes"** nas tabelas
- **Modal com informações** específicas
- **Histórico completo** de tentativas
- **Dados temporais** organizados

## 📊 Métricas Disponíveis

### **Por Questão:**
- Total de tentativas
- Número de acertos
- Número de erros
- Taxa de acerto (%)
- Detalhes de cada tentativa

### **Por Aluno:**
- Número de sessões
- Total de questões respondidas
- Total de acertos
- Taxa de acerto individual
- Histórico de sessões

### **Visão Geral:**
- Total de sessões no sistema
- Número de alunos únicos
- Total de questões respondidas
- Taxa média de acerto
- Atividade temporal

## 🔍 Análises Possíveis

### **1. Identificação de Questões Difíceis**
- Questões com baixa taxa de acerto
- Padrões de erro comuns
- Necessidade de revisão de conteúdo

### **2. Desempenho Individual**
- Alunos com dificuldades
- Progresso ao longo do tempo
- Áreas de melhoria

### **3. Tendências Gerais**
- Evolução do desempenho coletivo
- Questões mais populares
- Padrões de uso do sistema

## 🛠️ Tecnologias Utilizadas

- **Chart.js**: Gráficos interativos
- **Firebase Firestore**: Armazenamento de dados
- **Tailwind CSS**: Interface responsiva
- **JavaScript ES6**: Lógica de relatórios

## 📈 Próximas Funcionalidades

### **Planejadas:**
- **Exportação de dados** (PDF, Excel)
- **Relatórios comparativos** entre períodos
- **Alertas automáticos** para baixo desempenho
- **Dashboards personalizados**
- **Análise de tendências** temporais

### **Melhorias:**
- **Filtros mais avançados**
- **Gráficos mais detalhados**
- **Relatórios em tempo real**
- **Integração com notificações**

## 🔐 Segurança

- **Acesso restrito** apenas a administradores
- **Autenticação dupla** para relatórios
- **Dados anonimizados** quando necessário
- **Logs de acesso** para auditoria

## 📞 Suporte

Para dúvidas sobre o sistema de relatórios:
1. Verifique a documentação
2. Teste com dados de exemplo
3. Consulte os logs do console
4. Entre em contato com o administrador

---

**Sistema de Relatórios ENADE** - Versão 1.0  
*Desenvolvido para análise de desempenho educacional* 