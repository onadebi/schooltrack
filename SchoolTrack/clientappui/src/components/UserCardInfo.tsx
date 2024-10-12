import React from "react";
import appsettings from "../config/appsettings";
import UserTypeEnum from "../app/models/dto/UserTypeEnum";

interface IProp {
  type: UserTypeEnum;
  count: number;
}

const UserCardInfo: React.FC<IProp> = ({ type, count }) => {

  return (
    <>
      <div className="rounded-2xl odd:bg-onaxPurple even:bg-onaxYellow p-4 flex-1 min-w-[130px]">
        <section className="flex flex-row justify-between ">
            <span className="rounded-full bg-onaxSky py-1 px-2 text-[10px] text-green-950">
                {new Date().toISOString().split('T')[0].replace(/-/g, '/')}
            </span>
            <img src='/images/more.png' alt="more" height={1} width={20} className="cursor-pointer"/>
        </section>
        <section>
            <span className="font-bold">{count && appsettings.functions.NumberCommaFormat(count)}</span>
        </section>
        <section>
            <span className="text-xs font-semibold text-gray-500">{type && appsettings.functions.ToSentenceUpper(type)}s</span>
        </section>
      </div>
    </>
  );
};

export default UserCardInfo;
