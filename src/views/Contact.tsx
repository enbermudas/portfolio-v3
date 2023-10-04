import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <div className="flex h-full w-full">
      <main className="mx-auto my-auto flex flex-col gap-10">
        <div className="relative">
          <div className="pointer-events-none	absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary via-neutral to-white bg-clip-text text-transparent opacity-70 blur-3xl">
            <h1 className="flex flex-col text-center text-xl font-black md:text-6xl">
              <p>Let's work together!</p>
              <p>You're just one message away from</p>
              <p>elevating your web experience</p>
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
            {...register("name", { required: true })}
          />

          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered mt-4 w-full"
            autoComplete="email"
            required
            {...register("email", { required: true })}
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
            >
              Clear
            </button>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={!isValid}
            >
              Send message
            </button>
          </div>
        </motion.form>
      </main>
    </div>
  );
}
