import styled from 'styled-components';
import { useData } from '../contexts/DataContext';
import { useState } from 'react';
import { Modal } from './Modal';
import { AlertDialog } from './AlertDialog';
import { Book } from '../types';

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

export function BookTable() {
  const { books, deleteBook, getAuthor } = useData();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    if (selectedBook) {
      deleteBook(selectedBook.id);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Autor</Th>
            <Th>Páginas</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const author = getAuthor(book.author_id);
            return (
              <tr key={book.id}>
                <Td>{book.name}</Td>
                <Td>{author?.name || 'Autor não encontrado'}</Td>
                <Td>{book.pages || '-'}</Td>
                <Td>
                  <ViewButton
                    onClick={() => {
                      setSelectedBook(book);
                      setIsViewModalOpen(true);
                    }}
                  >
                    Visualizar
                  </ViewButton>
                  <DeleteButton
                    onClick={() => {
                      setSelectedBook(book);
                      setIsDeleteDialogOpen(true);
                    }}
                  >
                    Excluir
                  </DeleteButton>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal
        title="Detalhes do Livro"
        open={isViewModalOpen}
        onOpenChange={setIsViewModalOpen}
      >
        {selectedBook && (
          <div>
            <p><strong>Nome:</strong> {selectedBook.name}</p>
            <p><strong>Autor:</strong> {getAuthor(selectedBook.author_id)?.name}</p>
            <p><strong>Páginas:</strong> {selectedBook.pages || '-'}</p>
          </div>
        )}
      </Modal>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDelete}
        title="Confirmar exclusão"
        description={`Tem certeza que deseja excluir o livro ${selectedBook?.name}?`}
      />
    </>
  );
} 