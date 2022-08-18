import React, {useEffect, useState} from 'react'
import styles from './contactForm.module.css'
import { useForm } from "react-hook-form";
import api from "../utils/api";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link"

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

const ContactForm = () => {
 const [submit, setSubmit] = useState(false)
 const [modal, setModal] = useState(false);
 const handleOpen = () => setModal(true);
 const handleClose = () => setModal(false);
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
    const handleInput = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    }

    console.log(errors)
    return (
     <section className={styles.contact}>
         <div className={styles.contact__image}>
             <h3 className={styles.contact__title}>Обратная связь</h3>
             <div className={styles.opacity} />
         </div>
        <div className={styles.contact__form}>
            <div className={styles.contact__image_div}>
                <div className={styles.form__image} />
                <p className={styles.form__description}>
                    8 (495) 139-66-11
                    corp-pitanie@tyteda.ru
                    Россия<br/>Москва
                    ул. Сталеваров 14к1
                </p>
            </div>

        <form onSubmit={handleSubmit(async () => {
            setSubmit(!submit)            
            const res = await api ('/public/apply', {
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
            return res 
        })}
         onChange={handleInput}
         className={styles.form}>
            <h3 className={styles.form__title}>Контакты</h3>
            <p className={styles.title__description}>
                Связаться с нами
            </p>

            <div style={{ display: 'grid' }}>
            <div className={styles.form__grid}>
                <div className={styles.input__card} >
                    <span className={styles.form__span}>
                        Имя <span className={styles.span}>*</span>
                    </span>
                    <input
                        className={styles.form__input}
                        onChange={handleInput}
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
                            // pattern: /\+7\-[0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{2}/,
                            minLength: { value: 3, message: 'Минимальная длина 3 символа'},
                            maxLength: { value: 20, message: 'Максимальная длина 20 символов' }
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
                </div>
                <div className={`${styles.input__card} ${styles.input__last}`} >
                    <span className={styles.form__span}>
                       Комментарий либо вопрос.
                    </span>
                    <input className={`${styles.form__input} ${styles.input__last}`} name='comment' onChange={handleInput}  {...register('comment')}/>
                </div>
            </div>
            <div className={styles.minwidth}>
                <p className={`${styles.form__description} ${styles.block} `}>
                    8 (495) 139-66-11
                    corp-pitanie@tyteda.ru
                    Россия<br/>Москва
                    ул. Сталеваров 14к1
                </p>
                <button
                    onClick={handleSubmit}
                    className={styles.submit__btn}
                >
                    {!submit && <div className={styles.ellipse__left}/>}
                    {!submit ? <span style={{ margin: '0 -20px 0 0' }}>Отправить</span> : <span style={{ margin: '0 0 0 -35px' }}>Отправлено</span>}
                    {submit && <div className={styles.ellipse__right}/>}
                </button>
                <Modal
                    open={modal}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Ваша заявка принята!
                        </Typography>
                        <Button>
                            <Link href="/">
                                Закрыть
                            </Link>
                        </Button>
                    </Box>
                </Modal>
            </div>
        </form>
        </div>
         <iframe
             className={styles.map}
             src="https://yandex.ru/map-widget/v1/?um=constructor%3A1707e808bc4031fad6128bd49499ff0cbfb4968051adcb8ecc9180fb695f787d&amp;source=constructor"
             frameBorder="0" />
     </section>
 )
}

export default ContactForm