"use client";
import "@/app/globals.css";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Service } from "@/controller/Service.controller";
import { LoginData, schemaLogin } from "@/interfaces/user.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import style from "@/app/globals.module.css";
import "../styles.css";
export default function Login() {
  const service = new Service();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schemaLogin),
  });
  async function onLogin(data: LoginData) {
    const res = await service.login(data);
    if (res) {
      toast("Login efetuado com sucesso"),
        {
          type: "success",
        };
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } else {
      toast("Algo deu errado, verifique email e senha", { type: "error" });
    }
  }
  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      <Input label="Email" register={register("email")} />
      {errors.email ? (
        <span className="span-error">{errors.email.message}</span>
      ) : (
        <span></span>
      )}
      <Input label="Password" register={register("password")} type="password" />
      {errors.password ? (
        <span className="span-error">{errors.password.message}</span>
      ) : (
        <span></span>
      )}
      <button className={style.button} type="submit">
        Login
      </button>
    </Form>
  );
}
