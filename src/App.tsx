import { useState } from 'react'
import styled from 'styled-components'
import { DataProvider } from './contexts/DataContext'
import { AuthorTable } from './components/AuthorTable'
import { BookTable } from './components/BookTable'
import { Modal } from './components/Modal'
import { AuthorForm } from './components/AuthorForm'
import { BookForm } from './components/BookForm'
import { GlobalStyles } from './styles/GlobalStyles'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Header = styled.header`
  margin-bottom: 30px;
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

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
`

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  color: #444;
  margin-bottom: 20px;
`

function App() {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false)
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  return (
    <DataProvider>
      <GlobalStyles />
      <Container>
        <Header>
          <Title>Gerenciador de Livros</Title>
          <ButtonContainer>
            <Button onClick={() => setIsAuthorModalOpen(true)}>
              Novo Autor
            </Button>
            <Button onClick={() => setIsBookModalOpen(true)}>
              Novo Livro
            </Button>
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
    </DataProvider>
  )
}

export default App
