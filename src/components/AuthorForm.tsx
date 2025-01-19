import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Author } from '../types';
import { useData } from '../contexts/DataContext';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #45a049;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 14px;
`;

interface AuthorFormProps {
  onSuccess: () => void;
}

export function AuthorForm({ onSuccess }: AuthorFormProps) {
  const { addAuthor } = useData();
  const { register, handleSubmit, formState: { errors } } = useForm<Author>();

  const onSubmit = (data: Author) => {
    const author: Author = {
      ...data,
      id: crypto.randomUUID()
    };
    addAuthor(author);
    onSuccess();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          {...register('name', { required: 'Nome é obrigatório' })}
          placeholder="Digite o nome do autor"
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          {...register('email')}
          placeholder="Digite o email do autor"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <Button type="submit">Salvar Autor</Button>
    </Form>
  );
} 