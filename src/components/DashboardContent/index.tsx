import { DashboardSection } from '../../hooks/useDashboard';
import { AuthorTable } from '../AuthorTable';
import { BookTable } from '../BookTable';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Section,
  SectionTitle,
  ButtonContainer,
  Button,
  StatsContainer,
  StatCard,
  ChartContainer
} from '../../pages/Dashboard/styles';

interface DashboardContentProps {
  activeSection: DashboardSection;
  onOpenAuthorModal: () => void;
  onOpenBookModal: () => void;
  chartData: Array<{ name: string; value: number; }>;
}

export function DashboardContent({
  activeSection,
  onOpenAuthorModal,
  onOpenBookModal,
  chartData
}: DashboardContentProps) {
  switch (activeSection) {
    case 'authors':
      return (
        <Section>
          <SectionTitle>Autores</SectionTitle>
          <ButtonContainer>
            <Button onClick={onOpenAuthorModal}>
              Novo Autor
            </Button>
          </ButtonContainer>
          <AuthorTable />
        </Section>
      );
    case 'books':
      return (
        <Section>
          <SectionTitle>Livros</SectionTitle>
          <ButtonContainer>
            <Button onClick={onOpenBookModal}>
              Novo Livro
            </Button>
          </ButtonContainer>
          <BookTable />
        </Section>
      );
    default:
      return (
        <>
          <StatsContainer>
            <StatCard>
              <h3>Total de Autores</h3>
              <p>42</p>
            </StatCard>
            <StatCard>
              <h3>Total de Livros</h3>
              <p>156</p>
            </StatCard>
            <StatCard>
              <h3>Livros este mês</h3>
              <p>8</p>
            </StatCard>
          </StatsContainer>
          
          <ChartContainer>
            <h3>Livros Publicados por Mês</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </>
      );
  }
} 