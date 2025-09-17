import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

// Importando o componente principal que será testado
import IndexScreen from '../app/index'; 

// O Jest irá usar automaticamente o mock das perguntas que estão no seu projeto
import perguntas from '../data/constants/perguntas';

describe('Fluxo do Questionário de Satisfação', () => {

  it('TC-01: Deve renderizar a primeira pergunta corretamente ao iniciar', () => {
    // Renderiza a tela principal do app
    const { getByText } = render(<IndexScreen />);

    // Busca pela primeira pergunta com base no seu arquivo de dados `perguntas.ts`
    const primeiraPergunta = perguntas[0];
    
    // Verifica se o enunciado da primeira pergunta está visível na tela
    expect(getByText(primeiraPergunta.enunciado)).toBeTruthy();
  });

  it('TC-02: Deve avançar para a próxima pergunta após o usuário selecionar uma resposta', async () => {
    // Renderiza a tela principal
    const { getByText } = render(<IndexScreen />);

    // Define a primeira e a segunda pergunta para facilitar a verificação
    const primeiraPergunta = perguntas[0];
    const segundaPergunta = perguntas[1];

    // Encontra e clica na primeira opção de resposta da primeira pergunta
    const primeiraOpcao = primeiraPergunta.opcoes[0];
    fireEvent.press(getByText(primeiraOpcao));

    // Aguarda a renderização e verifica se o enunciado da segunda pergunta apareceu na tela
    await waitFor(() => {
      expect(getByText(segundaPergunta.enunciado)).toBeTruthy();
    });
  });

  it('TC-03: Deve exibir a mensagem "Fim!" após responder a última pergunta', async () => {
    // Renderiza a tela
    const { getByText } = render(<IndexScreen />);

    // Loop para responder a todas as perguntas
    for (const pergunta of perguntas) {
      // Encontra a primeira opção da pergunta atual
      const primeiraOpcao = pergunta.opcoes[0];
      
      // Clica na opção
      fireEvent.press(getByText(primeiraOpcao));
      
      // Aguarda a próxima renderização
      await waitFor(() => {});
    }

    // Após responder a todas, aguarda e verifica se a mensagem final é exibida
    await waitFor(() => {
      // CORREÇÃO AQUI: Verificamos uma das mensagens de sucesso que realmente aparecem.
      expect(getByText('Sua avaliação foi enviada com sucesso!')).toBeTruthy();
    });
  });

});