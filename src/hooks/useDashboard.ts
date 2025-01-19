import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type DashboardSection = 'home' | 'authors' | 'books' | 'stats' | 'settings';

export const mockData = [
  { name: 'Jan', value: 12 },
  { name: 'Fev', value: 19 },
  { name: 'Mar', value: 15 },
  { name: 'Abr', value: 25 },
  { name: 'Mai', value: 22 },
  { name: 'Jun', value: 30 },
];

export function useDashboard() {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<DashboardSection>('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const handleOpenAuthorModal = () => setIsAuthorModalOpen(true);
  const handleCloseAuthorModal = () => setIsAuthorModalOpen(false);
  const handleOpenBookModal = () => setIsBookModalOpen(true);
  const handleCloseBookModal = () => setIsBookModalOpen(false);

  const userEmail = localStorage.getItem('userEmail');

  return {
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
    chartData: mockData
  };
} 