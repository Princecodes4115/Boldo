import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsData {
  id: number;
  imageSrc: string;
  title: string;
  name: string;
  userPic: string;
}

const BlogPage = () => {
  const newsData: NewsData[] = [
    {
      id: 1,
      imageSrc: "/post1.png",
      title: "Pitch termsheet backing validation focus release.",
      name: "Chandler Bing",
      userPic: "/head-circle.png",
    },
    {
      id: 2,
      imageSrc: "/post2.png",
      title: `Seed round direct mailing non-disclosure agreement graphical
            user interface rockstar.`,
      name: "Rachel Green",
      userPic: "/post2-circle.png",
    },
    {
      id: 3,
      imageSrc: "/post3.png",
      title: `Beta prototype sales iPad gen-z marketing network effects value proposition`,
      name: "Monica Geller",
      userPic: "/post3-circle.png",
    },
    {
      id: 4,
      imageSrc: "/post.png",
      title: "Pitch termsheet backing validation focus release.",
      name: "Chandler Bing",
      userPic: "/head-circle.png",
    },
    {
      id: 5,
      imageSrc: "/post4.png",
      title: `Seed round direct mailing non-disclosure agreement graphical
            user interface rockstar.`,
      name: "Rachel Green",
      userPic: "/post2-circle.png",
    },
    {
      id: 6,
      imageSrc: "/post5.png",
      title: `Beta prototype sales iPad gen-z marketing network effects value proposition`,
      name: "Monica Geller",
      userPic: "/post3-circle.png",
    },
  ];

  return (
    <>
      <div className="w-full h-full">
        <nav className="flex items-center justify-between pt-[52px] lg:px-[60px] xl:px-[100px]">
          <div className="flex items-center gap-[10px]">
            <Image src={"/logoo.svg"} alt="logo" width={24} height={36} />
            <h2 className="text-[42px] font-bold text-[#0A2640]">Boldo</h2>
          </div>

          <ul className="flex items-center gap-[40px]">
            <li>
              <Link
                className="text-[16px] font-semibold text-[#0A2640]"
                href={"#"}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] font-semibold text-[#0A2640]"
                href={"#"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] font-semibold text-[#0A2640]"
                href={"#"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[16px] font-bold text-[#0A2640] border-2 border-[#0A2640] rounded-[24px] px-[40px] py-[8px]"
                href={"#"}
              >
                Log In
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-[45px] lg:px-[60px] xl:px-[100px]">
          <div className="text-center flex flex-col gap-[12px]">
            <h6 className="text-[20px] font-normal text-[#0A2640] leading-[32px]">
              Blog
            </h6>
            <h1 className="text-[64px] font-normal text-[#0A2640] leading-[84px]">
              Thoughts and words
            </h1>
          </div>
          <div className="flex items-center justify-between w-full gap-[100px] mt-[60px] border-b-[#0A2640] border-b pb-[72px]">
            <Image
              src={"/head.png"}
              alt="head"
              width={550}
              height={386}
              className="lg:w-[400px] xl:w-[550px]"
            />
            <div className="">
              <div className="flex items-center gap-[12px]">
                <h4 className="text-[16px] font-bold text-[#0A2640]">
                  Category
                </h4>
                <p className="text-[16px] font-normal text-[#777777]">
                  November 22, 2021
                </p>
              </div>
              <h4 className="lg:text-[35px] xl:text-[48px] font-normal text-[#000000] leading-[72px]">
                Pitch termsheet backing validation focus release.
              </h4>
              <div className="flex items-center gap-[12px]">
                <Image
                  alt="user"
                  src="/head-circle.png"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <p className="text-[16px] font-normal text-[#000000]">
                  Chandler Bing
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[96px] lg:px-[40px] xl:px-[102px] flex flex-col items-center">
            <h2 className="text-[48px] font-normal text-[#000000] leading-[84px] w-full">
              Latest news
            </h2>
            <div className="grid grid-cols-3 lg:gap-[25px] xl:gap-[50px] w-full">
              {newsData.slice(0, 3).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-[24px] lg:w-[250px] xl:w-[300px] overflow-hidden"
                  >
                    <div className="w-full h-[209px] relative lg:rounded-[12px] xl:rounded-none overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt="post1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center gap-[12px]">
                        <h4 className="text-[16px] font-bold text-[#0A2640]">
                          Category
                        </h4>
                        <p className="text-[16px] font-normal text-[#777777]">
                          November 22, 2021
                        </p>
                      </div>
                      <div className="flex flex-col gap-[20px]">
                        <p className="lg:text-[17px] xl:text-[20px] font-normal text-[#000000] h-[99px] lg:leading-[25px] xl:leading-[32px]">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-[12px]">
                          <Image
                            alt="user"
                            src={item.userPic}
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                          <p className="text-[16px] font-normal text-[#000000]">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 lg:gap-[25px] xl:gap-[50px] w-full mt-[80px]">
              {newsData.slice(3, 6).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-[24px] lg:w-[250px] xl:w-[300px] overflow-hidden"
                  >
                    <div className="w-full h-[209px] relative lg:rounded-[12px] xl:rounded-none overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt="post1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center gap-[12px]">
                        <h4 className="text-[16px] font-bold text-[#0A2640]">
                          Category
                        </h4>
                        <p className="text-[16px] font-normal text-[#777777]">
                          November 22, 2021
                        </p>
                      </div>
                      <div className="flex flex-col gap-[20px]">
                        <p className="lg:text-[17px] xl:text-[20px] font-normal text-[#000000] h-[99px] lg:leading-[25px] xl:leading-[32px]">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-[12px]">
                          <Image
                            alt="user"
                            src={item.userPic}
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                          <p className="text-[16px] font-normal text-[#000000]">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-[96px] text-[20px] font-bold text-[#0A2640] leading-[28px] border-[#0A2640] border-2 rounded-[56px] px-[56px] py-[16px]">
              Load more
            </button>
          </div>

          <div className="mt-[124px] mb-[84px] bg-[#0A2640] relative w-full h-[391px] rounded-[12px] flex flex-col items-center">
            <Image
              className={"absolute top-0 right-0 "}
              alt=""
              src="/mask.png"
              width="1200"
              height="391"
            />
            <div className="absolute flex flex-col items-center w-[750px] top-0 mt-[72px]">
              <h2 className="text-[48px] font-normal text-[#FFF] leading-[72px] text-center">
                An enterprise template to ramp up your company website
              </h2>
              <div className="mt-[48px] flex items-center gap-[24px] w-full ml-[150px]">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-[370px] h-[56px] bg-[#fff] rounded-full px-[20px] py-[10px] text-[20px] font-normal text-[#000000]"
                  placeholder="Your email address"
                />
                <button className="text-[20px] font-bold text-[#0A2640] leading-[28px] bg-[#65E4A3] rounded-[56px] px-[56px] py-[16px]">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="pt-[100px] lg:px-[60px] xl:px-[100px]">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-[36px] w-[300px]">
              <div className="flex items-center gap-[10px]">
                <Image src={"/logoo.svg"} alt="logo" width={24} height={36} />
                <h2 className="text-[42px] font-bold text-[#0A2640]">Boldo</h2>
              </div>
              <p className="text-[16px] font-normal text-[#777777] leading-[28px]">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>
            <div className="grid grid-cols-3 xl:mr-[79px] lg:w-[500px] xl:w-[642px] lg:gap-[50px]  xl:gap-[96px]">
              <div>
                <h2 className="text-[20px] font-bold text-[#000000]">
                  Landings
                </h2>
                <ul className="mt-[32px] flex flex-col gap-[30px]">
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[20px] font-bold text-[#000000]">
                  Company
                </h2>
                <ul className="mt-[32px] flex flex-col gap-[30px]">
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[20px] font-bold text-[#000000]">
                  Resources
                </h2>
                <ul className="mt-[32px] flex flex-col gap-[30px]">
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[20px] font-normal text-[#777777]"
                      href={"#"}
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-[50px] pb-[117px]">
            <p className="text-[16px] font-normal text-[#777777] leading-[28px]">
              All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogPage;
