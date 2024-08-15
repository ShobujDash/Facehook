import React from 'react'
import Field from '../common/Field'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (fromData) => {
    console.log(fromData);
    navigate('/')
  }

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email Id is Required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password  is Required",
            minLength: {
              value: 8,
              message:'Your password mush be at least 8 characters',
            }
          })}

          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      <Field label="Email">
        <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        >login</button>
      </Field>
    </form>
  );
}

export default LoginForm
