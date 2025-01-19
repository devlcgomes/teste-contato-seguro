import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorTable } from '../../components/AuthorTable';
import { BookTable } from '../../components/BookTable';
import { Modal } from '../../components/Modal';
import { AuthorForm } from '../../components/AuthorForm';
import { BookForm } from '../../components/BookForm';
import {
  Container,
  Header,
  Title,
  ButtonContainer,
  Button,
  LogoutButton,
  Section,
  SectionTitle
} from './styles';

export function Dashboard() {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <Container>
      <Header>
        <div>
          <Title>Gerenciador de Livros</Title>
          <p>Bem-vindo, {localStorage.getItem('userEmail')}</p>
        </div>
        <ButtonContainer>
          <Button onClick={() => setIsAuthorModalOpen(true)}>
            Novo Autor
          </Button>
          <Button onClick={() => setIsBookModalOpen(true)}>
            Novo Livro
          </Button>
          <LogoutButton onClick={handleLogout}>
            Sair
          </LogoutButton>
        </ButtonContainer>
      </Header>

      <Section>
        <SectionTitle>Autores</SectionTitle>
        <AuthorTable />
      </Section>

      <Section>
        <SectionTitle>Livros</SectionTitle>
        <BookTable />
      </Section>

      <Modal
        title="Novo Autor"
        open={isAuthorModalOpen}
        onOpenChange={setIsAuthorModalOpen}
      >
        <AuthorForm onSuccess={() => setIsAuthorModalOpen(false)} />
      </Modal>

      <Modal
        title="Novo Livro"
        open={isBookModalOpen}
        onOpenChange={setIsBookModalOpen}
      >
        <BookForm onSuccess={() => setIsBookModalOpen(false)} />
      </Modal>
    </Container>
  );
} 