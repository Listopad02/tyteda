import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './modalApplication.module.css'
import { useForm } from "react-hook-form";
import api from '../utils/api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalApplication = ({ onClose }) => {
    const [values, setValues] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        staff: '',
        location: '',
        website: '',
        comments: '',
    })
    const { register, handleSubmit, formState:{ errors } } = useForm()
    const [modal, setModal] = useState(false);
    const handleOpen = () => setModal(true);
    // const handleClose = () => setModal(false);

    const handleInput = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    }
    const sendApplication = async () => {
        await api ('/public/apply', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                phone: values.phone,
                company: values.company,
                site: values.website,
                location: values.location,
                employees: values.staff
            }),
        })
        handleOpen()
    }

    return (
        <React.Fragment>
            <Modal
                hideBackdrop
                open={open}
                onClose={onClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                sx={{
                    backgroundColor: 'rgba(131, 131, 131, 0.26)',
                    border: 'none',
                    backdropFilter: 'blur(87px)',
                    zIndex: { sx: '10', md: '1'},
                }}
            >
                <Box className={styles.modal}>
                    <button className={styles.close} onClick={onClose}>X</button>
                    <div className={styles.image}>
                        <h3 className={styles.title__logo}>
                            TYT
                            <br />
                            EDA
                        </h3>
                    </div>
                    <form onChange={handleInput} onSubmit={handleSubmit((e, data) => {
                        // e.preventDefault()
                        console.log(data)
                    })} className={styles.modal__form}>
                        <h2 className={styles.title}>Заказать обед</h2>
                        <div className={styles.modal__grid}>
                                <div className={styles.input__card} >
                                    <span className={styles.form__span}>
                                         Имя <span className={styles.span}>*</span>
                                    </span>
                                    <input
                                        className={styles.form__input}
                                        {...register('name', {
                                            required: "Это поле обязательно",
                                            minLength: { value: 3, message: 'Минимальная длина 3 символа'},
                                            maxLength: { value: 20, message: 'Максимальная длина 20 символов' }})}
                                    />
                                </div>
                                <div className={styles.input__card} >
                                    <span className={styles.form__span}>
                                        Компания <span className={styles.span}>*</span>
                                    </span>
                                    <input
                                        className={styles.form__input}
                                        name='company'
                                        onChange={handleInput}
                                        {...register('company', {
                                            required: "Это поле обязательно",
                                            minLength: { value: 3, message: 'Минимальная длина 3 символа'},
                                            maxLength: { value: 20, message: 'Максимальная длина 20 символов' }})
                                        }
                                    />
                                </div>
                                <div className={styles.input__card} >
                                    <span className={styles.form__span}>
                                        Email <span className={styles.span}>*</span>
                                    </span>
                                    <input
                                        className={styles.form__input}
                                        name='email'
                                        onChange={handleInput}
                                        {...register('email',
                                            {
                                                required: "Это поле обязательно",
                                                pattern: {
                                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                    message: 'Введите валидный email'
                                                }
                                            }
                                        )}
                                    />
                                </div>
                                <div className={styles.input__card} >
                                    <span className={styles.form__span}>
                                        Телефон <span className={styles.span}>*</span>
                                    </span>
                                    <input
                                        className={styles.form__input}
                                        name='phone'
                                        onChange={handleInput}
                                        {...register('phone', {
                                            required:  "Это поле обязательно",
                                            // pattern: /\+7\[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/,
                                            minLength: { value: 3, message: 'Минимальная длина 3 символа'},
                                            maxLength: { value: 12, message: 'Максимальная длина 20 символов' }
                                        })
                                        }
                                    />
                                </div>
                                <div className={styles.input__card} >
                                    <span className={styles.form__span}>
                                       Количество сотрудников
                                    </span>
                                    <input
                                        className={styles.form__input}
                                        name='staff'
                                        onChange={handleInput}
                                        {...register('staff')}
                                    />
                                </div>
                                <div className={styles.input__card} >
                                    <span className={styles.form__span}>
                                        Местоположение
                                    </span>
                                    <input
                                        className={styles.form__input}
                                        name='location'
                                        onChange={handleInput}
                                        {...register('location')}
                                    />
                                </div>
                                <div className={styles.input__card} >
                                    <span className={styles.form__span}>
                                       Сайт компании
                                    </span>
                                    <input className={styles.form__input} name='website' onChange={handleInput} {...register('website')}/>
                                </div>
                                <button className={styles.form__btn} onClick={() => sendApplication()}>
                                    Отправить
                                </button>
                        </div>
                        <p className={styles.text}>
                            Вы даете согласие на обработку персональных данных
                        </p>
                    </form>
                </Box>
            </Modal>
            <div>
                <Modal
                    open={modal}
                    onClose={onClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Ваша заявка принята!
                        </Typography>
                        <Button onClick={onClose}>
                            Закрыть
                        </Button>
                    </Box>
                </Modal>
            </div>
        </React.Fragment>
    )
}