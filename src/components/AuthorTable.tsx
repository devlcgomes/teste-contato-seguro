import styled from 'styled-components';
import { useData } from '../contexts/DataContext';
import { useState } from 'react';
import { Modal } from './Modal';
import { AlertDialog } from './AlertDialog';
import { Author } from '../types';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background: #f5f5f5;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ViewButton = styled(ActionButton)`
  background: #2196F3;
  color: white;
`;

const DeleteButton = styled(ActionButton)`
  background: #ff4444;
  color: white;
`;

export function AuthorTable() {
  const { authors, deleteAuthor } = useData();
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (selectedAuthor) {
      deleteAuthor(selectedAuthor.id);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <Td>{author.name}</Td>
              <Td>{author.email || '-'}</Td>
              <Td>
                <ViewButton
                  onClick={() => {
                    setSelectedAuthor(author);
                    setIsViewModalOpen(true);
                  }}
                >
                  Visualizar
                </ViewButton>
                <DeleteButton
                  onClick={() => {
                    setSelectedAuthor(author);
                    setIsDeleteDialogOpen(true);
                  }}
                >
                  Excluir
                </DeleteButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        title="Detalhes do Autor"
        open={isViewModalOpen}
        onOpenChange={setIsViewModalOpen}
      >
        {selectedAuthor && (
          <div>
            <p><strong>Nome:</strong> {selectedAuthor.name}</p>
            <p><strong>Email:</strong> {selectedAuthor.email || '-'}</p>
          </div>
        )}
      </Modal>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDelete}
        title="Confirmar exclusão"
        description={`Tem certeza que deseja excluir o autor ${selectedAuthor?.name}? Esta ação também excluirá todos os livros associados a este autor.`}
      />
    </>
  );
} 