import { useContext, useState } from "react";
import { LanggananCard } from "./LanggananCard";
import { PopupContext } from "../SharedContext";

export const ShowKeluarga = () => {
  const { setVersiPembayaran } = useContext(PopupContext);
  const [selectedOption, setSelectedOption] = useState("");
  const [voucherCode, setVoucherCode] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleVoucherSubmit = (e) => {
    e.preventDefault();
    // Handle voucher code application logic here
    console.log("Voucher code submitted:", voucherCode);
  };

  const handlePayment = () => {
    if (!selectedOption) return;
    const infoPayment = {
      card: selectedOption,
      versi: "Keluarga",
    };
    setVersiPembayaran(selectedOption);
    localStorage.setItem("kreditcard", JSON.stringify(infoPayment));
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  return (
    <div className="px-4 md:px-20 py-6 md:py-10 flex  flex-col gap-6 md:gap-10 ">
      <h1 className="text-2xl md:text-3xl font-[600]">Ringkasan Pembayaran</h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Subscription Card */}
        <div className="flex justify-center">
          <LanggananCard
            versi="Keluarga"
            price="159,990"
            akun="5-7"
            kualitas="4K"
          />
        </div>

        {/* Payment Details */}
        <div className="w-full flex flex-col gap-4">
          {/* Payment Methods */}
          <h1 className="text-lg md:text-xl">Metode Pembayaran</h1>
          <form className="flex flex-col md:flex-row w-full gap-3 md:gap-4">
            <label
              className={`flex md:w-1/2 items-center gap-2 p-3 md:p-4 border-2 rounded-lg ${
                selectedOption === "visa" ? "border-blue-500 bg-blue-50" : ""
              }`}
            >
              <input
                type="radio"
                name="choice"
                value="visa"
                checked={selectedOption === "visa"}
                onChange={handleChange}
                required
                className="h-5 w-5"
              />
              <div className="flex flex-wrap gap-1 md:gap-2">
                <img
                  src="/cardkredit/american_express.png"
                  className="h-6 md:h-8"
                  alt="American Express"
                />
                <img
                  src="/cardkredit/jcb.png"
                  className="h-6 md:h-8"
                  alt="JCB"
                />
                <img
                  src="/cardkredit/mastercard.png"
                  className="h-6 md:h-8"
                  alt="Mastercard"
                />
                <img
                  src="/cardkredit/visa.png"
                  className="h-6 md:h-8"
                  alt="Visa"
                />
              </div>
            </label>

            <label
              className={`flex items-center md:w-1/2  gap-3 p-3 md:p-4 border-2 rounded-lg ${
                selectedOption === "bca" ? "border-blue-500 bg-blue-50" : ""
              }`}
            >
              <input
                type="radio"
                name="choice"
                value="bca"
                checked={selectedOption === "bca"}
                onChange={handleChange}
                required
                className="h-5 w-5"
              />
              <img
                src="/cardkredit/bca.png"
                className="h-6 md:h-8 rounded-full"
                alt="BCA"
              />
              <span className="text-sm md:text-base">BCA Virtual Account</span>
            </label>
          </form>

          {/* Voucher Code */}
          <h1 className="text-lg md:text-xl">Kode Voucher (jika ada)</h1>
          <form
            onSubmit={handleVoucherSubmit}
            className="w-full flex flex-col md:flex-row gap-3"
          >
            <div className="flex-1 border-2  rounded-lg px-4 py-2">
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Masukkan kode voucher"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#2F3334] hover:bg-stone-800 px-4 py-2 md:px-6 cursor-pointer rounded-full text-center"
            >
              Gunakan
            </button>
          </form>

          {/* Transaction Summary */}
          <h1 className="text-lg md:text-xl">Ringkasan Transaksi</h1>
          <div className="w-full md:w-1/2 grid gap-2">
            <div className="flex justify-between text-gray-300">
              <p>Paket Premium Keluarga</p>
              <p>Rp159,000</p>
            </div>
            <div className="flex justify-between text-gray-300">
              <p>Biaya Admin</p>
              <p>Rp3,000</p>
            </div>
            <div className="flex justify-between font-medium text-gray-100">
              <p>Total Pembayaran</p>
              <p>Rp162,000</p>
            </div>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            className="px-4 py-2 w-25 text-white text-base rounded-full cursor-pointer bg-[#09147A] hover:bg-blue-900 md:px-8"
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};
