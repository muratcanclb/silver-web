import React from 'react';

const CardComponent = () => {
    return (
        <div className='container px-5 py-24 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3'>
            <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
                    <img src="./home-product/ct-lacivert.jpg" className='h-full object-cover' />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center text-white p-6">
                            <h3 className="text-xl font-semibold mb-4">Küpe</h3>
                            <p className="text-sm mb-4">925 Ayar Saf Gümüş</p>
                            <a href="#" className="inline-flex items-center px-6 py-2 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-200">
                                Gözat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img src="./home-product/tk-tasli-camgobek.jpg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center text-white p-6">
                            <h3 className="text-xl font-semibold mb-4">Yüzük</h3>
                            <p className="text-sm mb-4">925 Ayar Saf Gümüş</p>
                            <a href="#" className="inline-flex items-center px-6 py-2 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-200">
                                Gözat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative group w-full h-full">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img src="./home-product/tk-sade-tambaget.jpg" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-center text-white p-6">
                            <h3 className="text-xl font-semibold mb-4">Takım Setlerimiz</h3>
                            <p className="text-sm mb-4">925 Ayar Saf Gümüş Kolye, Küpe, Yüzük</p>
                            <a href="#" className="inline-flex items-center px-6 py-2 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-200">
                                Gözat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
