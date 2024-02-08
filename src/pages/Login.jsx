const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-login-image relative">
      <div className="absolute left-0 top-0 w-full h-full bg-black/65 z-10"></div>
      <div className="bg-black/60 relative z-20 text-white px-16 py-12 rounded">
        <h2 className="text-[18px] lg:text-[32px] font-[700] mb-6">
          Oturum Aç
        </h2>
        <div className="flex flex-col w-full gap-4">
          <input
            placeholder="email"
            type="text"
            className="border h-[56px] w-full md:w-[314px] outline-none rounded bg-[#100F0F]  border-[#808080b3] p-4"
          />
          <input
            placeholder="Parola"
            type="text"
            className="border h-[56px] w-full md:w-[314px] outline-none rounded bg-[#100F0F]  border-[#808080b3] p-4"
          />
          <button className="h-[40px] w-full bg-[#C11119] rounded font-[400] text-[1rem] mt-4">
            <a
              className="w-full h-full inline-flex items-center justify-center"
              href={""}
            >
              Oturum Aç
            </a>
          </button>
          <a className="text-[14px] text-center" href="#">
            Parolanızı mı unuttunuz?
          </a>
          <p className="text-[14px] text-gray-400 text-center ">
            Hesabınız yok mu?
            <a className="text-center ml-1 text-white" href="/register">
              Şimdi kaydolun.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
