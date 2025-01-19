import { Modal } from '../../components/Modal';
import { AuthorForm } from '../../components/AuthorForm';
import { BookForm } from '../../components/BookForm';
import { DashboardContent } from '../../components/DashboardContent';
import { useDashboard } from '../../hooks/useDashboard';
import {
  Container,
  Content,
  Sidebar,
  SidebarItem,
  MainContent,
  Header,
  Title,
} from './styles';
import { 
  FiHome, 
  FiUsers, 
  FiBook, 
  FiBarChart2, 
  FiSettings,
  FiLogOut 
} from 'react-icons/fi';

export function Dashboard() {
  const {
    activeSection,
    setActiveSection,
    isAuthorModalOpen,
    isBookModalOpen,
    handleOpenAuthorModal,
    handleCloseAuthorModal,
    handleOpenBookModal,
    handleCloseBookModal,
    handleLogout,
    userEmail,
    chartData
  } = useDashboard();

  return (
    <Container>
      <Sidebar>
        <div>
          <Title>BookManager</Title>
          <SidebarItem 
            active={activeSection === 'home'} 
            onClick={() => setActiveSection('home')}
          >
            <FiHome /> Início
          </SidebarItem>
          <SidebarItem 
            active={activeSection === 'authors'} 
            onClick={() => setActiveSection('authors')}
          >
            <FiUsers /> Autores
          </SidebarItem>
          <SidebarItem 
            active={activeSection === 'books'} 
            onClick={() => setActiveSection('books')}
          >
            <FiBook /> Livros
          </SidebarItem>
          <SidebarItem 
            active={activeSection === 'stats'} 
            onClick={() => setActiveSection('stats')}
          >
            <FiBarChart2 /> Estatísticas
          </SidebarItem>
          <SidebarItem 
            active={activeSection === 'settings'} 
            onClick={() => setActiveSection('settings')}
          >
            <FiSettings /> Configurações
          </SidebarItem>
        </div>
        <SidebarItem onClick={handleLogout}>
          <FiLogOut /> Sair
        </SidebarItem>
      </Sidebar>

      <Content>
        <Header>
          <div>
            <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <p>Bem-vindo, {userEmail}</p>
          </div>
        </Header>

        <MainContent>
          <DashboardContent
            activeSection={activeSection}
            onOpenAuthorModal={handleOpenAuthorModal}
            onOpenBookModal={handleOpenBookModal}
            chartData={chartData}
          />
        </MainContent>
      </Content>

      <Modal
        title="Novo Autor"
        open={isAuthorModalOpen}
        onOpenChange={handleCloseAuthorModal}
      >
        <AuthorForm onSuccess={handleCloseAuthorModal} />
      </Modal>

      <Modal
        title="Novo Livro"
        open={isBookModalOpen}
        onOpenChange={handleCloseBookModal}
      >
        <BookForm onSuccess={handleCloseBookModal} />
      </Modal>
    </Container>
  );
} 