import {Button} from "@nextui-org/react";
import '../../App.css';

export const Home = () => {

  return (
    <>
      {/*HOME*/}
      <div className="text-gray-600">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-10">
            <div className="lg:mt-20">
              <h1 className="lg:text-4xl text-2xl font-bold"> ビジネス交流会へよこそ、</h1>
              <p className="lg:mt-16 mt-10">
                1.4万人以上のフリーランス・営業代行会社の中から
                厳選された一流のセールスパートナーを活用し、貴社の営業拡大をサポート
              </p>
              <div className="flex flex-col lg:flex-row lg:items-start items-center gap-5 lg:mt-20 mt-10">
                <Button radius="none" className="bg-red-500 text-white font-bold border-1 border-red-500 rounded-sm w-[200px]"
                        size="lg">無料で参加</Button>
                <Button variant="bordered" radius="none" className="text-gray-600 font-bold border-1 border-red-500 rounded-sm w-[200px]"
                        size="lg">お問い合せ</Button>
              </div>
            </div>

            <div className="flex justify-end items-end mt-10">
              <img src="/images/bg_hero.jpg" alt="business-exchange" className=""/>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-20 mx-5 mt-20">
            <div className="flex justify-center items-end">
              <div>
                <h4 className="font-bold text-2xl">利用企業数の累計</h4>
                <div
                  className="w-40 h-40 flex items-center justify-center border border-gray-600 rounded-full text-2xl font-bold flex-col mt-10 text-gray-600 shadow-2xl">
                  20社
                  <span className="text-lg">以上</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-end">
              <div>
                <h4 className="font-bold text-2xl">利用企業数の累計</h4>
                <div
                  className="w-40 h-40 flex items-center justify-center border border-gray-600 rounded-full text-2xl font-bold flex-col mt-10 text-gray-600 shadow-2xl">
                  500名
                  <span className="text-lg">以上</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-end">
              <div>
                <h4 className="font-bold text-2xl">利用企業数の累計</h4>
                <div
                  className="w-40 h-40 flex items-center justify-center border border-gray-600 rounded-full text-2xl font-bold flex-col mt-10 text-gray-600 shadow-2xl">
                  10社
                  <span className="text-lg">以上</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}