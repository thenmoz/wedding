import React from "react";

const Header: React.FC = () => {

    return (
        <div className="flex items-center justify-center my-6">
            <div className="flex-grow border-t border-black"></div>
            <p className="text-custom-20 font-normal mx-4 tracking-wider font-libreCaslon">CHANUT & WARISSARA</p>
            <div className="flex-grow border-t border-black"></div>
        </div>
    );
}

export default Header