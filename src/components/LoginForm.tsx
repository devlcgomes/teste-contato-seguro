import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: #444;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #45a049;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.875rem;
`;

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    // Simplificando a autenticação: apenas salva o email e redireciona
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', data.email);
    navigate('/dashboard');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Acesso ao Sistema</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              {...register('email', { 
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Digite um email válido'
                }
              })}
              placeholder="seu@email.com"
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Senha</Label>
            <Input
              type="password"
              {...register('password', { 
                required: 'Senha é obrigatória',
                minLength: {
                  value: 4,
                  message: 'A senha deve ter no mínimo 4 caracteres'
                }
              })}
              placeholder="Sua senha"
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </FormGroup>

          <Button type="submit">Entrar</Button>
        </Form>
      </LoginBox>
    </LoginContainer>
  );
} 