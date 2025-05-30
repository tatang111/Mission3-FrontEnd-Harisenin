import { faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReasonSubscribe } from "./ReasonSubscribe";
import { AllReasonSubscribe } from "./AllReasonSubscribe";
import { LanggananCard } from "./LanggananCard";
import { PopupContext } from "../SharedContext";
import { useContext } from "react";
import { ShowIndividual } from "./ShowIndividual";
import { ShowBerdua } from "./ShowBerdua";
import { ShowKeluarga } from "./ShowKeluarga";
import { ShowPayment } from "./ShowPayment";

export const MainLangganan = () => {
  const { versiPembayaran} = useContext(PopupContext);

  return (
    <main className="bg-black text-white">
        {versiPembayaran == "Individual" && <ShowIndividual />}
        {versiPembayaran == "Berdua" && <ShowBerdua />}
        {versiPembayaran == "Keluarga" && <ShowKeluarga />}
        {versiPembayaran == "visa" && <ShowPayment /> || versiPembayaran == "bca" && <ShowPayment />}
      {!versiPembayaran && (
        <section>
          <div className="relative top-[0] md:top-[50px] py-10 px-12 md:px-20 pb-20 md:pb-40 ">
            <h1 className="text-center text-2xl font-[600] mb-8 md:mb-10">
              Kenapa Harus Berlangganan ?
            </h1>
            <AllReasonSubscribe />
          </div>
          <div className="w-full bg-[#22282A] py-10 md:px-20 grid gap-8">
            <div className="text-center grid gap-2">
              <h1 className="text-3xl font-[600]">Pilih Paketmu</h1>
              <p>Temukan Sesuai Kebutuhanmu </p>
            </div>
            <div className="text-center flex md:flex-row flex-col md:gap-0 gap-8 md:justify-around  md:w-8/10 mx-auto">
              <LanggananCard
                versi="Individual"
                price="49,990"
                akun="1"
                kualitas="720p"
              />
              <LanggananCard
                versi="Berdua"
                price="79,990"
                akun="2"
                kualitas="1080p"
              />
              <LanggananCard
                versi="Keluarga"
                price="159,990"
                akun="5-7"
                kualitas="4K"
              />
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
