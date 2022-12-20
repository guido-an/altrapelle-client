import Image from 'next/image';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

export default function Hero() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HeroContainer>
        <ImageContainer>
          <Image
            src="/home/altrapelle-hero-instant.png"
            alt="faccia donna con macchie sulla pelle"
            width="1500"
            height="1345"
          />
        </ImageContainer>
        <TextContainer>
          <Title weight="600" size="3.5" paddingTop="20px">
            Attenua
          </Title>
          <Title weight="400" size="3.5">
            le rughe
          </Title>
          <Title weight="400" size="3.5">
            in 3 minuti
          </Title>
          <IconsContainer>
            {/* <Image
            src="/icons/clinicamente-testato.png"
            alt="badge clinicamente testato"
            width="100"
            height="100"
          /> */}
            <Image
              src="/icons/dermatologicamente-testato.png"
              alt="badge dermatologicamente testato"
              width="100"
              height="100"
            />
            <Image
              src="/icons/metal-tested.png"
              alt="badge metal tested"
              width="100"
              height="100"
            />
          </IconsContainer>
        </TextContainer>
      </HeroContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Gli ordini effettuati dalle 13:00 del 22 dicembre verranno evasi dal 2 gennaio
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            chiudi
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  @media (min-width: 968px) {
    display: flex;
  }
`;
const ImageContainer = styled.div`
  @media (min-width: 968px) {
    width: 50%;
  }
`;
const TextContainer = styled.div`
  @media (min-width: 968px) {
    position: relative;
    left: 10%;
    padding-top: 8vh;
  }
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  line-height: 40%;
  text-align: center;
  font-weight: ${({ weight }) => weight};
  padding-top: ${({ paddingTop }) => paddingTop};
  font-size: ${({ size }) => size}rem;
  @media (min-width: 968px) {
    font-size: ${({ size }) => size * 1.2}rem;
    text-align: left;
  }
  @media (min-width: 1400px) {
    font-size: ${({ size }) => size * 1.6}rem;
  }
  @media (min-width: 1600px) {
    font-size: ${({ size }) => size * 1.8}rem;
    font-weight: 600;
  }
`;

const IconsContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0 60px;
  width: 300px;
  text-align: center;
  @media (min-width: 968px) {
    margin: auto;
  }
`;
