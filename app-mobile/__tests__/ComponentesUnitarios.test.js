import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Importando os componentes que serão testados individualmente
import Enunciado from '../components/questionario/Enunciado';
import Opcao from '../components/questionario/Opcao';

// ===============================================================
// == TESTE DE UNIDADE PARA O COMPONENTE ENUNCIADO
// ===============================================================
describe('Componente: Enunciado', () => {
  it('Deve renderizar o texto do enunciado corretamente', () => {
    const textoDoEnunciado = "Esta é uma pergunta de teste?";

    // 1. Renderiza APENAS o componente Enunciado, de forma isolada
    const { getByText } = render(<Enunciado enunciado={textoDoEnunciado} />);

    // 2. Procura pelo texto que foi passado como propriedade (props)
    const elementoTexto = getByText(textoDoEnunciado);

    // 3. Verifica se o componente renderizou o texto com sucesso
    expect(elementoTexto).toBeTruthy();
  });
});


// ===============================================================
// == TESTE DE UNIDADE PARA O COMPONENTE OPCAO
// ===============================================================
describe('Componente: Opcao', () => {
  it('Deve renderizar o texto da opção corretamente', () => {
    const textoDaOpcao = "Esta é uma opção de resposta";

    // 1. Renderiza o componente Opcao isoladamente
    const { getByText } = render(
      <Opcao 
        texto={textoDaOpcao} 
        onPress={() => {}} // Passa uma função vazia, pois não estamos testando o clique aqui
      />
    );

    // 2. Verifica se o texto passado via props foi renderizado
    expect(getByText(textoDaOpcao)).toBeTruthy();
  });

  it('Deve chamar a função onPress quando for clicado', () => {
    // 1. Cria uma "função espiã" (mock function) para observar se ela é chamada
    const mockOnPress = jest.fn();
    const textoDaOpcao = "Clique aqui";

    // 2. Renderiza o componente Opcao passando a função espiã como prop
    const { getByText } = render(
      <Opcao 
        texto={textoDaOpcao} 
        onPress={mockOnPress} 
      />
    );

    // 3. Simula o clique do usuário no componente
    const elementoOpcao = getByText(textoDaOpcao);
    fireEvent.press(elementoOpcao);

    // 4. Verifica se a nossa função espiã foi chamada exatamente 1 vez
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});