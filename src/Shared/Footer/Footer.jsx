import logo from "../../../public/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
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
                    <a className="link link-hover">Kabaddi</a>
                    <a className="link link-hover">And 20+</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Ali Ashraf</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;