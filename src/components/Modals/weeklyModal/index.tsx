import React from 'react';
import { WeeklyDto } from '@/components/Modals/weeklyModal/dto/weekly.dto';
import {Modal, Typography } from '@mui/material';
import Button from '@/components/Button';
import '../../GenericModal/styles.css';
import styles from './weekly.module.css';

const WeeklyModal = (
    { 
        moduleTitle,
        streak,
        maxStreak,
        weeklyWatchTime,
        totalWatchTime,
        open,
        handleClose,
    }: WeeklyDto
) => {
    return (
        <Modal open={open} onClose={handleClose} className={styles.modalContainer}>
            <div className={styles.modalContent}>

                <Typography className="modal-title">Resumen Semanal</Typography>

                <div style={{ width: '100%', height: '0px', border: '2px #C399F1 solid' }}/>

                <Typography className={styles.modalText}>Completaste la semana<br/>{moduleTitle}</Typography>

                <div style={{ width: '100%', height: '0px', border: '2px #C399F1 solid' }}/>

                <Typography className={styles.modalText}>Esta semana meditaste durante<br/>{weeklyWatchTime} minutos!</Typography>

                <div style={{ width: '100%', height: '0px', border: '2px #C399F1 solid' }}/>

                <Typography className={styles.modalText}>Haciendo que tu tiempo total de meditacion sea de<br/>{totalWatchTime} minutos!</Typography>

                <div style={{ width: '100%', height: '0px', border: '2px #C399F1 solid' }}/>

                <Typography className={styles.modalText}>Tienes una racha de<br/>{streak} dias<br/>en la aplicacion</Typography>

                <div style={{ width: '100%', height: '0px', border: '2px #C399F1 solid' }}/>

                <Typography className={styles.modalText}>Tu mejor racha es de<br/>{maxStreak} dias<br/>Tu puedes!</Typography>

                <div style={{ width: '100%', height: '0px', border: '2px #C399F1 solid' }}/>

                <Button
                    size="small"
                    onClick={handleClose}
                    className={'normal'}
                    variant="green"
                    disabled={false}
                >
                    Continuar
                </Button>
            </div>
        </Modal>
    );
};

export default WeeklyModal;