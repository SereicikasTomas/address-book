import { createPortal } from 'react-dom';

import { ModalProps } from 'types/types';

import { ReactComponent as ExitLogo } from 'assets/exit.svg';

import * as Styled from './styles';

function Modal(props: ModalProps): JSX.Element | null {
  const {
    modalState: { open, user },
    setModal,
  } = props;
  const domNode = document.getElementById('modal');

  const closeModal = () => setModal((prevState) => ({ ...prevState, open: false, user: null }));

  if (!open) return null;
  return (
    domNode &&
    createPortal(
      <Styled.Backdrop>
        <Styled.Modal>
          <Styled.Gradient gradient={user?.gradient ?? 'transparent'}>
            <Styled.Picture src={user?.picture} alt="User picture" />
            <Styled.Name>
              {user?.firstName} {user?.lastName}
            </Styled.Name>
            <ExitLogo onClick={closeModal} />
          </Styled.Gradient>

          <Styled.Body>
            <Styled.Column>
              <Styled.Row>
                <h6>Username</h6>
                <p>{user?.username}</p>
              </Styled.Row>

              <Styled.Row>
                <h6>Email</h6>
                <p>{user?.email}</p>
              </Styled.Row>
            </Styled.Column>

            <Styled.Column>
              <Styled.Row>
                <h6>Phone</h6>
                <p>{user?.phone}</p>
              </Styled.Row>

              <Styled.Row>
                <h6>Cell</h6>
                <p>{user?.cell}</p>
              </Styled.Row>
            </Styled.Column>

            <Styled.Row>
              <h6>Address</h6>
              <p>
                {user?.street}
                <br />
                {user?.postcode} {user?.city}, {user?.state}
              </p>
            </Styled.Row>
          </Styled.Body>
        </Styled.Modal>
      </Styled.Backdrop>,
      domNode,
    )
  );
}

export default Modal;
