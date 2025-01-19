import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: #ffffff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
`;

export const SidebarItem = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.active ? '#6366f1' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#64748b'};
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: ${props => props.active ? '#6366f1' : '#f1f5f9'};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

export const MainContent = styled.div`
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4f46e5;
  }
`;

export const LogoutButton = styled(Button)`
  background-color: #ef4444;

  &:hover {
    background-color: #dc2626;
  }
`;

export const Section = styled.section`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    color: #64748b;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #1e293b;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const ChartContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    color: #1e293b;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`; 