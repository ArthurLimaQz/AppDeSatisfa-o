import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import IndexScreen from '../app/index'; 

import perguntas from '../data/constants/perguntas';

describe('Fluxo do Questionário de Satisfação', () => {

  it('TC-01: Deve renderizar a primeira pergunta corretamente ao iniciar', () => {
    const { getByText } = render(<IndexScreen />);

    const primeiraPergunta = perguntas[0];
    
    expect(getByText(primeiraPergunta.enunciado)).toBeTruthy();
  });

  it('TC-02: Deve avançar para a próxima pergunta após o usuário selecionar uma resposta', async () => {
    const { getByText } = render(<IndexScreen />);

    const primeiraPergunta = perguntas[0];
    const segundaPergunta = perguntas[1];

    const primeiraOpcao = primeiraPergunta.opcoes[0];
    fireEvent.press(getByText(primeiraOpcao));

    await waitFor(() => {
      expect(getByText(segundaPergunta.enunciado)).toBeTruthy();
    });
  });

  it('TC-03: Deve exibir a mensagem "Fim!" após responder a última pergunta', async () => {
    const { getByText } = render(<IndexScreen />);

    for (const pergunta of perguntas) {
      const primeiraOpcao = pergunta.opcoes[0];
      
      fireEvent.press(getByText(primeiraOpcao));
      
      await waitFor(() => {});
    }

    await waitFor(() => {
      expect(getByText('Sua avaliação foi enviada com sucesso!')).toBeTruthy();
    });
  });

});