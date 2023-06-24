import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiError, useLoginMutation } from "@/store/api/authApi";
import { login } from "@/store/authSlice";
import LoadingButton from "../LoadingButton";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const loginValidationSchema = z.object({
  email: z.string().min(1, { message: "This field is required" }),
  password: z.string().min(1, { message: "This field is required" }),
});

type LoginValidationSchema = z.infer<typeof loginValidationSchema>;

export default function OnBoardingModal({ isOpen, closeModal }: Props) {
  const [screen, setScreen] = useState<"LOGIN" | "FORGOT_PASSWORD" | "SIGNUP">(
    "LOGIN",
  );

  const methods = useForm<LoginValidationSchema>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginValidationSchema),
  });

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const [loginAPIfunc] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginValidationSchema> = async (data) => {
    try {
      const result = await loginAPIfunc(data);
      if ("error" in result) {
        throw result.error;
      }
      login(result.data);
      closeModal();
    } catch (err) {
      setError("root", { message: (err as { data: ApiError }).data.message });
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <Transition.Child
              as={"div"}
              className="flex min-h-full items-center justify-center p-4 text-center"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              afterLeave={() => setScreen("LOGIN")}>
              {screen === "LOGIN" ? (
                <Dialog.Panel className="mb-32 w-full max-w-sm transform overflow-hidden rounded-sm bg-white p-10 pt-6 text-left align-middle shadow-xl transition-all">
                  <div className="-mr-4 mb-4 flex justify-end">
                    <button onClick={closeModal}>
                      <XMarkIcon className="h-6 w-6 font-bold text-gray-500 duration-100 hover:text-black" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h2"
                    className="text-3xl font-thin leading-6 text-gray-900">
                    Sign Up
                  </Dialog.Title>
                  <div className="mt-6 flex flex-col gap-4 text-sm font-semibold">
                    <button className="rounded-md bg-facebook py-2 text-center text-white duration-100 hover:bg-blue-800">
                      FACEBOOK
                    </button>
                    <button className="rounded-md border py-2 text-center duration-100">
                      Sign in with Google
                    </button>
                  </div>
                  <h3 className="mt-8 text-lg font-thin">
                    Already have an account?
                  </h3>
                  <form
                    className="mt-4 flex flex-col text-sm"
                    onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      {...register("email")}
                      placeholder="Username or email"
                      className="rounded-sm bg-slate-100 px-3 py-2"
                    />
                    <p className="mt-1 text-xs italic text-red-500 empty:hidden">
                      {errors.email?.message}
                    </p>
                    <input
                      type="password"
                      {...register("password")}
                      placeholder="Password"
                      className="mt-4 rounded-sm bg-slate-100 px-3 py-2"
                    />
                    <p className="mt-1 text-xs italic text-red-500 empty:hidden">
                      {errors.password?.message}
                    </p>

                    <p className="mt-2 text-sm italic text-red-500">
                      {errors.root?.message}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <LoadingButton
                        loading={isSubmitting}
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-md bg-facebook px-8 py-2 font-semibold text-white">
                        LOG IN
                      </LoadingButton>
                      <button
                        type="button"
                        className="text-gray-400"
                        onClick={() => setScreen("FORGOT_PASSWORD")}>
                        Forgot password
                      </button>
                    </div>
                  </form>
                  <button
                    className="mb-8 mt-4 text-xs font-semibold text-facebook"
                    onClick={() => setScreen("SIGNUP")}>
                    Create Account
                  </button>
                </Dialog.Panel>
              ) : null}
              {screen === "SIGNUP" ? (
                <Dialog.Panel className="mb-32 w-full max-w-sm transform overflow-hidden rounded-sm bg-white p-10 pt-6 text-left align-middle shadow-xl transition-all">
                  <div className="-mr-4 mb-4 flex justify-end">
                    <button onClick={closeModal}>
                      <XMarkIcon className="h-6 w-6 font-bold text-gray-500 duration-100 hover:text-black" />
                    </button>
                  </div>
                  <Dialog.Title
                    as="h2"
                    className="text-3xl font-thin leading-6 text-gray-900">
                    Create Account
                  </Dialog.Title>
                  <div className="mt-6 flex flex-col gap-4 text-sm font-semibold">
                    <button className="rounded-md bg-facebook py-2 text-center text-white duration-100 hover:bg-blue-800">
                      FACEBOOK
                    </button>
                    <button className="rounded-md border py-2 text-center duration-100">
                      Sign in with Google
                    </button>
                  </div>
                  <div className="my-4 flex items-center gap-2 text-sm">
                    <div className="flex-grow border"></div>
                    <span>OR</span>
                    <div className="flex-grow border"></div>
                  </div>
                  <form className="mt-4 flex flex-col text-sm">
                    <input
                      type="text"
                      placeholder="Username"
                      className="mb-4 rounded-sm bg-slate-100 px-3 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="mb-4 rounded-sm bg-slate-100 px-3 py-2"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="mb-4 rounded-sm bg-slate-100 px-3 py-2"
                    />
                    <p className="font-semibold selection:mb-3">Birth Date</p>
                    <div className="mb-4 flex gap-2">
                      <select className="flex-grow bg-slate-100 px-2 py-1"></select>
                      <select className="flex-grow bg-slate-100 px-2 py-1"></select>
                      <select className="flex-grow bg-slate-100 px-2 py-1"></select>
                    </div>
                    {/* RE-CAPTCHA HERE */}
                    <div className="mb-4 flex items-start gap-4 text-xs">
                      <input type="checkbox" name="" id="accept" />
                      <label htmlFor="accept">
                        {" "}
                        I have read and agree to the terms of service and
                        privacy policy.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="mb-4 rounded-md bg-facebook py-2 font-semibold text-white duration-100 hover:bg-blue-700">
                      Create Account
                    </button>
                  </form>
                </Dialog.Panel>
              ) : null}
              {screen === "FORGOT_PASSWORD" ? (
                <Dialog.Panel className="mb-32 w-full max-w-sm transform overflow-hidden rounded-sm bg-white p-10 pt-6 text-left align-middle shadow-xl transition-all">
                  <div className="-mr-4 flex justify-end">
                    <button onClick={closeModal}>
                      <XMarkIcon className="h-6 w-6 font-bold text-gray-500 duration-100 hover:text-black" />
                    </button>
                  </div>
                  <div className="mb-4 flex">
                    <button
                      className="text-xs font-semibold text-facebook"
                      onClick={() => setScreen("LOGIN")}>
                      Back
                    </button>
                  </div>
                  <Dialog.Title
                    as="h2"
                    className="text-3xl font-thin leading-6 text-gray-900">
                    Forgot Password
                  </Dialog.Title>
                  <p className="my-4 text-xs text-gray-500">
                    <span className="text-sm">Enter your email address.</span>
                    <br />
                    Enter your email below. We ll send you a link to reset your
                    password
                  </p>
                  <form className="mt-4 flex flex-col text-sm">
                    <input
                      type="text"
                      placeholder="Email"
                      className="mb-4 rounded-sm bg-slate-100 px-3 py-2"
                    />
                    <button
                      type="submit"
                      className="mb-4 rounded-md bg-facebook py-2 font-semibold text-white duration-100 hover:bg-blue-700">
                      SEND EMAIL
                    </button>
                  </form>
                </Dialog.Panel>
              ) : null}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
