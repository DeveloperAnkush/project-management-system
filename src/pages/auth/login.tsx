import React from 'react';
import { Link } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../../utlis/validations';
import "./login.css"
import LoginModalPic from "../../assets/LoginModalPic.avif";
import { ReactComponent as DownArrow } from "../../assets/svgs/downArrow.svg";
import { ReactComponent as CloseButton } from "../../assets/svgs/closeButton.svg";

const Login = () => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [hasManuallyOpened, setHasManuallyOpened] = React.useState(false);

    const openModal = () => {
        setModalOpen(true);
        setHasManuallyOpened(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "initial";
    };


    type FormValues = {
        email: string;
        password: string;
    };
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: yupResolver(loginSchema),
        mode: "all",
    })

    const onSubmit = (data: FormValues) => {
        console.log("data==>", data)
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (!hasManuallyOpened && window.scrollY > window.innerHeight / 3 && !isModalOpen) {
                setModalOpen(true);
                const scrollDownElement = document.querySelector(".scroll-down") as HTMLElement | null;
                if (scrollDownElement) {
                    scrollDownElement.style.display = "none";
                }
                openModal();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isModalOpen, hasManuallyOpened]);

    return (
        <>
            <div className="scroll-down">
                SCROLL DOWN
                <DownArrow />
            </div>
            <div className="container" />
            <div className={`modal ${isModalOpen ? "is-open" : ""}`}>
                <div className="modal-container">
                    <div className="modal-left">
                        <h1 className="modal-title">Welcome!</h1>
                        <div className="input-block">
                            <label htmlFor="email" className="input-label">
                                Email
                            </label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        {...field}
                                    />
                                )} />
                        </div>
                        {errors?.email && (
                            <p className="error-message">{errors.email?.message}</p>
                        )}
                        <div className="input-block">
                            <label htmlFor="password" className="input-label">
                                Password
                            </label>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        {...field}
                                    />
                                )}
                            />
                        </div>
                        {errors?.password && (
                            <p className="error-message">{errors.password?.message}</p>
                        )}
                        <div className="modal-buttons">
                            <Link to='/reset-password'>
                                Forgot your password?
                            </Link>
                            <button className="input-button" onClick={handleSubmit(onSubmit)}>Login</button>
                        </div>
                    </div>
                    <div className="modal-right">
                        <img
                            src={LoginModalPic}
                            alt="workLogo"
                        />
                    </div>
                    <button className="icon-button close-button" onClick={closeModal}>
                        <CloseButton />
                    </button>
                </div>
                <button className="modal-button" onClick={openModal}>Click here to login</button>
            </div>
        </>
    );
};

export default Login;