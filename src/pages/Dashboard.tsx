import { useState } from 'react';
import styled from 'styled-components';
import { AuthorTable } from '../components/AuthorTable';
import { BookTable } from '../components/BookTable';
import { Modal } from '../components/Modal';
import { AuthorForm } from '../components/AuthorForm';
import { BookForm } from '../components/BookForm';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

const LogoutButton = styled(Button)`
  background: #f44336;

  &:hover {
    background: #d32f2f;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  color: #444;
  margin-bottom: 20px;
`;

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