import data from '../data.json';
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {Fade} from "react-awesome-reveal";
export const Contact = () => {

  const contactData = data.contact;

  return(
    <>
      <div className="container mx-auto max-w-6xl mb-20" id="contact">
        <h4 className="text-3xl font-bold text-center mb-10 text-gray-600">お問い合わせ</h4>
        <div className="bg-[#f0f5f7] py-20">
          <div className="text-center mx-5">
            <h4 className="text-2xl font-bold"> 【各種お問い合わせ先】 </h4>
            <h4 className="mt-7 lg:mx-20 text-sm">
              お客様の本業支援のために、産・官・学が協働して開催するものであり、さまざまな業種業態のお客様が自慢の商品・サービスを携えて集結する「異業種交流会」の展示商談会となっております。
              今回のビジネス交流会でも、北関東地域銀行3行による「広域連携協定」に基づき、茨城県の筑波銀行、栃木県の栃木銀行のお取引先企業の参加を予定しております。
            </h4>
            <div className="mt-5">
              <h5>福岡市博多区駅前４丁目 18-19博多フロントビル2階205号</h5>
              <h5>(月～金：9：00 ～ 17：00 ※祝祭日を除く)</h5>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mx-5 mt-10 items-center lg:mx-60">
            {contactData.map((contentList, index) => (
              <Fade key={index} direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
                <Card className="py-6 shadow-2xl rounded-md transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <img
                      src={contentList.img}
                      className="w-10 h-10 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
                      alt={contentList.title}
                    />
                  </CardHeader>
                  <CardBody className="text-center py-2">
                    <h4 className="font-bold text-sm pt-2 text-gray-600">{contentList.title}</h4>
                    <h4 className="text-sm pt-4 text-gray-600">{contentList.content}</h4>
                  </CardBody>
                </Card>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}