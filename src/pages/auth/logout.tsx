import styled from "styled-components";
import { Box, Typography, Modal, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router";
import "./logout.css";

export default function LogOutModal(props: any) {
    let navigate = useNavigate();
    const handleClick = (): void => {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload();
        props.closeModal();
    };
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="modal-wrapper">
                    <ModalContent>
                        <ModalHeader className="modalheader">
                            <Typography variant="h5">Log Out</Typography>
                            <Close fontSize="large" onClick={() => props.closeModal()} />
                        </ModalHeader>

                        <Formdiv>
                            <Span>Are you sure, want to log out ?</Span>
                        </Formdiv>
                        <ModalFooter className="modalfooter">
                            <Buttondiv>
                                <Button variant="contained" onClick={handleClick}>
                                    Yes
                                </Button>
                                <Button variant="contained" onClick={() => props.closeModal()}>
                                    No
                                </Button>
                            </Buttondiv>
                        </ModalFooter>
                    </ModalContent>
                </Box>
            </Modal>
        </div>
    );
}
const Span = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
};
const ModalFooter = styled.div``;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: var(--bs-modal-header-padding);
  border-bottom: 2px solid #dee2e6 !important;
`;

const Formdiv = styled.div`
  padding: 20px;
  max-height: calc(100vh - 200px);
`;

const Buttondiv = styled.div`
  display: flex;
  justify-content: space-between !important;
  flex-shrink: 0;
  align-items: center;
  padding: var(--bs-modal-header-padding);
  border-bottom: var(--bs-modal-header-border-width) solid
    var(--bs-modal-header-border-color);
  border-top-left-radius: var(--bs-modal-inner-border-radius);
  border-top-right-radius: var(--bs-modal-inner-border-radius);

  .MuiButtonBase-root {
    border-radius: 6px;
  }
`;
