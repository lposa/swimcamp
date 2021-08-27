import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifyelf: "center",
    flexDirection: "column",
    background: "rgba(255, 255, 255)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.5)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    textAlign: "center",
    position: "absolute",
    color: "#009ffd",
    width: "400px",
    height: "auto",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Ranking information</h2>
      <p id="simple-modal-description">0 - 1000 points Seashell</p>
      <p id="simple-modal-description">1000 - 2000 points Froggie</p>
      <p id="simple-modal-description">2000 - 3000 points Dolphin</p>
      <p id="simple-modal-description">3000 - 4000 points Shark</p>
    </div>
  );

  return (
    <div>
      <i className="fas fa-info-circle" onClick={handleOpen}></i>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
