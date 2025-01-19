import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
`;

const Logo = styled.div`
  width: 60px;
  height: 60px;
  background: #ff6b00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 24px;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.50rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0.50rem;

  &::placeholder {
    color: #999;
  }
`;

const RememberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.50rem;
  font-size: 0.9rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
`;

const ForgotPassword = styled.a`
  color: #0066cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #ff6b00;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: #ff5500;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0.50rem 0;
  color: #666;
  font-size: 0.9rem;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }

  &::before {
    margin-right: 0.5rem;
  }

  &::after {
    margin-left: 0.5rem;
  }
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
`;

const SocialButton = styled.button<{ $provider: 'google' | 'facebook' }>`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  color: #333;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$provider === 'google' ? '#f8f8f8' : '#f0f2f5'};
  }
`;

const SignUpText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;

  a {
    color: #0066cc;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface LoginFormData {
  email: string;
  password: string;
  remember?: boolean;
}

export function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', data.email);
    if (data.remember) {
      localStorage.setItem('rememberMe', 'true');
    }
    navigate('/dashboard');
  };

  return (
    <LoginBox>
      <Logo>📚</Logo>
      <Title>Seja bem-vindo!</Title>
      <Subtitle>Insira suas credenciais para acessar a plataforma</Subtitle>
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Insira seu email"
          {...register('email', { required: true })}
        />
        
        <Input
          type="password"
          placeholder="Insira sua senha"
          {...register('password', { required: true })}
        />
        
        <RememberContainer>
          <CheckboxLabel>
            <input
              type="checkbox"
              {...register('remember')}
            />
            Manter conectado por 30 dias
          </CheckboxLabel>
          <ForgotPassword href="#">Esqueceu sua senha?</ForgotPassword>
        </RememberContainer>

        <Button type="submit">Entrar</Button>

        <Divider>Ou</Divider>

        <SocialButtonsContainer>
          <SocialButton $provider="google" type="button">
            Google
          </SocialButton>
          
          <SocialButton $provider="facebook" type="button">
            Facebook
          </SocialButton>
        </SocialButtonsContainer>

        <SignUpText>
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </SignUpText>
      </Form>
    </LoginBox>
  );
} 