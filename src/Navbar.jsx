import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (

            <nav className="flex flex-col md:flex-row bg-gray-800 text-white shadow-md leading-none">
                <div className="flex items-center mx-5 py-5 md:py-0">
                    <h1 className="text-2xl ml-2 inline-block">Allison <span className="text-red-400">Speck</span></h1>
                </div>
                <div className="md:flex md:flex-grow bg-gray-800">
                    <ul className="text-lg md:flex md:ml-auto ">
                        <li>
                            <a className="w-full md:w-auto p-5 inline-block border-b-4 border-red-400"
                               href="">Home</a>
                        </li>
                        <li><a
                            className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent"
                            href="">About</a></li>
                        <li><a
                            className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent"
                            href="">Projects</a></li>
                        <li><a
                            className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent"
                            href="">Contact</a></li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar;