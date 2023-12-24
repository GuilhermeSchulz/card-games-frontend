"use client";
import { Service } from "@/controller/Service.controller";
import { RegisterData, schemaResgister } from "@/interfaces/user.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import style from "@/app/globals.module.css";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import "../styles.css";
export default function Register() {
  const service = new Service();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schemaResgister),
  });
  async function onRegister(data: RegisterData) {
    const res = await service.register(data);
    if (res) {
      toast("Cadastro efetuado com sucesso"),
        {
          type: "success",
        };
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } else {
      toast("Algo deu errado, verifique seus dados", { type: "error" });
    }
  }
  return (
    <Form onSubmit={handleSubmit(onRegister)} title="Register">
      <Input label="Username" register={register("name")} />
      {errors.email ? (
        <span className="span-error">{errors.email.message}</span>
      ) : (
        <span></span>
      )}

      <Input label="Email" register={register("email")} type="email" />
      {errors.email && (
        <span className="span-error">{errors.email.message}</span>
      )}
      <Input label="Password" register={register("password")} type="password" />
      {errors.password && (
        <span className="span-error">{errors.password.message}</span>
      )}

      <button className={style.button} type="submit">
        Register
      </button>
    </Form>
  );
}
