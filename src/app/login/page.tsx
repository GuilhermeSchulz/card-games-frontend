"use client";
import "@/app/globals.css";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import style from "../globals.module.css";
import "./styles.css";
import { LoginData, schema } from "./validator";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });
  function onLogin() {}
  return (
    <main className="bg-blend-multiply bg-[url('/img/background.jpg')] bg-blue-300 h-screen w-full bg-center bg-no-repeat bg-cover flex items-center justify-center">
      <Form onSubmit={handleSubmit(onLogin)}>
        <Input label="Email" register={register("email")} />
        {errors.email ? (
          <span className="span-error">{errors.email.message}</span>
        ) : (
          <span></span>
        )}
        <Input
          label="Password"
          register={register("password")}
          type="password"
        />
        {errors.password ? (
          <span className="span-error">{errors.password.message}</span>
        ) : (
          <span></span>
        )}
        <button className={style.button} type="submit">
          Login
        </button>
      </Form>
    </main>
  );
}
