import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useReducer } from "react";

interface FormInputs {
  fromName: string;
  fromEmail: string;
  message: string;
}

interface State {
  showToast: boolean;
  toastMessage: string;
  isFetching: boolean;
  toastType: string;
}

const initialState: State = {
  showToast: false,
  toastMessage: "",
  isFetching: false,
  toastType: "alert-info",
};

const reducer = (state: State, action: Partial<State>) => {
  return {
    ...state,
    ...action,
  };
};

export default function Contact() {
  const [{ showToast, toastMessage, isFetching, toastType }, dispatch] =
    useReducer(reducer, initialState);

  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const templateParams: Record<string, unknown> = { ...data };

    try {
      dispatch({ isFetching: true });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      dispatch({
        showToast: true,
        toastMessage: "Email sent, thanks for contacting me!",
        toastType: "alert-info",
      });

      setTimeout(() => dispatch({ showToast: false }), 4500);
    } catch (error) {
      console.error(error);
      dispatch({
        showToast: true,
        toastMessage: "Oops, there was an error!",
        toastType: "alert-error",
      });
    } finally {
      dispatch({ isFetching: false });
    }
  };

  return (
    <div className="flex h-full w-full">
      <main className="mx-auto my-auto flex flex-col gap-10">
        <div className="relative">
          <div className="pointer-events-none	absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary via-neutral to-white bg-clip-text text-transparent opacity-70 blur-3xl">
            <h1 className="flex flex-col text-center text-xl font-black md:text-6xl">
              <p>Let's work together!</p>
              <p>You're just one message away from</p>
              <p>elevating your wehttps://siic.saime.gob.veb experience</p>
            </h1>
          </div>

          <h1 className="flex flex-col text-center text-xl font-black md:text-6xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 1 }}
            >
              Let's work together!
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 1.5 }}
            >
              You're just one message away from
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 2 }}
            >
              <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                elevating
              </span>{" "}
              your web experience
            </motion.p>
          </h1>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 3 }}
          className="mx-auto mt-10 max-w-xl p-4 md:p-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            autoComplete="name"
            required
            {...register("fromName", { required: true })}
          />

          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered mt-4 w-full"
            autoComplete="email"
            required
            {...register("fromEmail", { required: true })}
          />

          <textarea
            className="textarea textarea-bordered mt-4 w-full resize-none text-base"
            placeholder="Your message!"
            rows={4}
            required
            {...register("message", { required: true })}
          ></textarea>

          <div className="mt-4 flex justify-end gap-2">
            <button
              className="btn btn-ghost"
              onClick={() => reset()}
              disabled={isFetching}
            >
              Clear
            </button>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={!isValid || isFetching}
            >
              Send message
            </button>
          </div>
        </motion.form>
      </main>

      {showToast && (
        <motion.div
          className="toast mb-36 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className={`alert ${toastType}`}>
            <span>{toastMessage}</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
