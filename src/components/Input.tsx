import style from "../app/globals.module.css";
interface Inputprops {
  label: string;
  register: {};
  type?: "text" | "password" | "email";
}

export function Input({ label, register, type }: Inputprops) {
  return (
    <fieldset className="flex border-none flex-col w-11/12">
      <label className="text-gray-400 font-semibold mb-2" htmlFor="">
        {label}
      </label>
      <input
        className={style.input}
        type={type ? type : "text"}
        {...register}
      />
    </fieldset>
  );
}
