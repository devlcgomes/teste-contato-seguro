import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Book } from '../types';
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

const Select = styled.select`
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

interface BookFormProps {
  onSuccess: () => void;
}

type BookFormData = Omit<Book, 'id'>;

export function BookForm({ onSuccess }: BookFormProps) {
  const { addBook, authors } = useData();
  const { register, handleSubmit, formState: { errors } } = useForm<BookFormData>();

  const onSubmit = (data: BookFormData) => {
    const book: Book = {
      ...data,
      pages: data.pages ? Number(data.pages) : undefined,
      id: crypto.randomUUID()
    };
    addBook(book);
    onSuccess();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>Nome</Label>
        <Input
          {...register('name', { required: 'Nome é obrigatório' })}
          placeholder="Digite o nome do livro"
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Autor</Label>
        <Select
          {...register('author_id', { required: 'Autor é obrigatório' })}
          defaultValue=""
        >
          <option value="" disabled>Selecione um autor</option>
          {authors.map(author => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </Select>
        {errors.author_id && <ErrorMessage>{errors.author_id.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Número de Páginas</Label>
        <Input
          type="number"
          {...register('pages', { min: 1 })}
          placeholder="Digite o número de páginas"
        />
        {errors.pages && <ErrorMessage>{errors.pages.message}</ErrorMessage>}
      </FormGroup>

      <Button type="submit">Salvar Livro</Button>
    </Form>
  );
} 