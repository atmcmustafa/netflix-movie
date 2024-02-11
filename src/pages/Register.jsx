import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-login-image relative">
      <Helmet>
        <title>Kayıt Ol</title>
      </Helmet>
      <div className="absolute left-0 top-0 w-full h-full bg-black/65 z-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black/60 relative z-20 text-white px-16 py-12 rounded"
      >
        <h2 className="text-[18px] lg:text-[32px] font-[700] mb-6">Kayıt Ol</h2>
        <div className="flex flex-col w-full gap-4">
          <input
            placeholder="İsim"
            type="text"
            className="border h-[56px] w-full md:w-[314px] outline-none rounded bg-[#100F0F]  border-[#808080b3] p-4"
          />
          <input
            placeholder="email"
            type="email"
            className="border h-[56px] w-full md:w-[314px] outline-none rounded bg-[#100F0F]  border-[#808080b3] p-4"
          />
          <input
            placeholder="Parola"
            type="password"
            className="border h-[56px] w-full md:w-[314px] outline-none rounded bg-[#100F0F]  border-[#808080b3] p-4"
          />
          <input
            placeholder="Telefon"
            type="tel"
            className="border h-[56px] w-full md:w-[314px] outline-none rounded bg-[#100F0F]  border-[#808080b3] p-4"
          />
          <button className="h-[40px] w-full bg-[#C11119] rounded font-[400] text-[1rem] mt-4">
            <a
              className="w-full h-full inline-flex items-center justify-center"
              href={""}
            >
              Kayıt Ol
            </a>
          </button>
          <a className="text-[14px] text-center" href="#">
            Parolanızı mı unuttunuz?
          </a>
          <p className="text-[14px] text-gray-400 text-center ">
            Hesabınız var mı?
            <a className="text-center ml-1 text-white" href="/login">
              Şimdi oturum aç.
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
