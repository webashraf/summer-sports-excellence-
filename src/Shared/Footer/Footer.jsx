import logo from "../../../public/logo.png"

const Footer = () => {
    return (
        <div className="bg-[url('https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center border-t-4 border-[#e01111]">

            <footer className="footer p-10 bg-[#212020d1] text-[#fff] h-full">
                <div>
                    <div className="flex flex-col items-center">
                        <img className="w-[200px]" src={logo} alt="" />
                        <h4 className="text-md font-bold">A complete sports school</h4>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Football</a>
                    <a className="link link-hover">Cricket</a>
                    <a className="link link-hover">Basket Ball</a>
                    <a className="link link-hover">And 20+</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Contact Info</span>
                    <a className="link link-hover">Location: Dhaka, Bangladesh.</a>
                    <a className="link link-hover">Email: summercampexcellence@gmail.com</a>
                    <a className="link link-hover">Phone: +880 13235****</a>
                </div>
                <div className="">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" style={{outline: 0}} placeholder="subscribe" className="input input-bordered " />
                            <button className="btn btn-square w-[100px] uppercase font-bold">
                                subscribe
                            </button>
                        </div>
                    </div>
                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-[#e01111] text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by Ali Ashraf</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;