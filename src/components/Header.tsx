import React from "react";

const Header: React.FC = () => {

    return (
        <div className="flex items-center justify-center my-6">
            <div className="flex-grow border-t sm:border-t-2 border-[#6C4E31]"></div>
            <p className="text-20 sm:text-32 font-normal mx-4 tracking-wider font-libreCaslon text-[#6C4E31]">CHANUT & WARISSARA</p>
            <div className="flex-grow border-t sm:border-t-2 border-[#6C4E31]"></div>
        </div>
    );
}

export default Header