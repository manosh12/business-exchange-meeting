import {Button} from "@nextui-org/react";
import {Link} from "react-router-dom";

export const NotFound = () => {

  return(
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="container max-w-6xl bg-gray-200 py-16 px-20 mx-5 text-center rounded-md">
          <div className="flex justify-center items-center">
            <img src="/images/logo1.svg" alt="logo" className="w-20 h-auto font-bold"/>
          </div>
          <h1 className="font-bold text-7xl mt-5">OOPS!</h1>
          <div className="mt-5">
            <h4><span className="text-warning font-bold text-3xl">404</span> - ページが見つかりません!</h4>
            <h4 className="mt-2">申し訳ありませんが、お探しのページが見つかりませんでした。</h4>
            <div className="mt-5">
              <Link to="/">
                <Button radius="full" size="lg" className="bg-gradient-to-r from-cyan-600 to-cyan-400 text-white font-bold px-20 shadow-lg"> 戻る </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
