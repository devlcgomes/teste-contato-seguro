import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import styled from 'styled-components';

const Overlay = styled(AlertDialogPrimitive.Overlay)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const Content = styled(AlertDialogPrimitive.Content)`
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 450px;
  padding: 25px;
`;

const Title = styled(AlertDialogPrimitive.Title)`
  margin: 0 0 10px;
  font-size: 20px;
`;

const Description = styled(AlertDialogPrimitive.Description)`
  margin-bottom: 20px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background: #e0e0e0;
`;

const DeleteButton = styled(Button)`
  background: #ff4444;
  color: white;
`;

interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

export function AlertDialog({ open, onOpenChange, onConfirm, title, description }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <Overlay />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonContainer>
            <CancelButton onClick={() => onOpenChange(false)}>Cancelar</CancelButton>
            <DeleteButton onClick={onConfirm}>Excluir</DeleteButton>
          </ButtonContainer>
        </Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
} 