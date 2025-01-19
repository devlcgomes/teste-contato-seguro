import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
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

const Title = styled(Dialog.Title)`
  margin: 0 0 20px;
  font-size: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

interface ModalProps {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ title, open, onOpenChange, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>{title}</Title>
          <CloseButton onClick={() => onOpenChange(false)}>X</CloseButton>
          {children}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 