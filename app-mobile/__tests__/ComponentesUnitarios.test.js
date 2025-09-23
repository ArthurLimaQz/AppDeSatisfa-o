import { fireEvent, render } from '@testing-library/react-native';

import Enunciado from '../components/questionario/Enunciado';
import Opcao from '../components/questionario/Opcao';


describe('Componente: Enunciado', () => {
  it('Deve renderizar o texto do enunciado corretamente', () => {
    const textoDoEnunciado = "Esta é uma pergunta de teste?";

    const { getByText } = render(<Enunciado enunciado={textoDoEnunciado} />);

    const elementoTexto = getByText(textoDoEnunciado);

    expect(elementoTexto).toBeTruthy();
  });
});



describe('Componente: Opcao', () => {
  it('Deve renderizar o texto da opção corretamente', () => {
    const textoDaOpcao = "Esta é uma opção de resposta";

    const { getByText } = render(
      <Opcao 
        texto={textoDaOpcao} 
        onPress={() => {}} 
      />
    );

    expect(getByText(textoDaOpcao)).toBeTruthy();
  });

  it('Deve chamar a função onPress quando for clicado', () => {
    const mockOnPress = jest.fn();
    const textoDaOpcao = "Clique aqui";

    const { getByText } = render(
      <Opcao 
        texto={textoDaOpcao} 
        onPress={mockOnPress} 
      />
    );

    const elementoOpcao = getByText(textoDaOpcao);
    fireEvent.press(elementoOpcao);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});