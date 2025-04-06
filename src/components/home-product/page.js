import React from 'react'
import CardComponent from '../card/page'
const HomePapeProduct = () => {
    return (
        <div>
            <section className="relative bg-no-repeat bg-left m bg-cover w-full h-auto group" style={{ backgroundImage: "url('./banner-1.jpg')", backgroundSize: "30%" }}>
                <div className="absolute inset-0 bg-black opacity-0"></div>
                <div className="relative z-10 flex justify-end items-center text-right text-gray py-20 px-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                    <div>
                        <p className="mx-4 py-2 text-lg sm:text-xl md:text-2xl">Yüksek kaliteli gümüş takılar ve zarif tasarımlar</p>
                        <a href="#" className="mt-6 inline-block bg-gray-400 px-6 py-2 text-lg font-semibold text-white rounded-lg hover:bg-gray-600 border-2 transition-all duration-300 font-semibold">Keşfet</a>
                    </div> 
                </div>
            </section>
            <section className="font-roboto font-bold">
                <div className="px-6 py-10 mx-auto">
                    <section className=" bg-gray-10 dark:bg-gray-10 lg:py-12 lg:flex lg:justify-center">
                        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
                            <div className="lg:w-1/2">
                                <div
                                    className="h-64 bg-cover bg-center lg:h-full "
                                    style={{
                                        backgroundImage:
                                            "url('./home-product/tk-sade-tambaget.jpg')",
                                        backgroundPosition: "center 70%"
                                    }}
                                ></div>
                            </div>

                            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                                    Takım Setler
                                </h2>

                                <p className="mt-4 text-gray-500 dark:text-gray-300">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem
                                    aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro
                                    consequuntur saepe accusantium consequatur.
                                </p>

                                <div className="inline-flex w-full mt-6 sm:w-auto">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-400 rounded-lg hover:bg-gray-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                                    >
                                        Gözat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CardComponent></CardComponent>

                </div>
            </section>
        </div>
    )
}

export default HomePapeProduct