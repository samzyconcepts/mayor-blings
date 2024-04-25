import Input from "./ui/Input";
import Button from "./ui/Button";

const Footer = () => {
    return (
        <footer className="bg-grey-400">
            <div className="container mx-auto px-8 md:px-24 py-10 text-white flex flex-col lg:flex-row gap-8 md:justify-between">
                <div>
                    <h3 className="font-bold">GET 33% OFF YOUR NEXT ORDER</h3>
                    <p className="mt-4  md:w-72">
                        Sign up for priority access to our latest drops, exclusive discounts and VIP
                        events.
                    </p>

                    <div className="mt-4">
                        <Input className="w-auto md:w-96" inputType="email" placeholder="Enter your email address" />
                        <Button className="block mt-3" type="submit">
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold">CUSTOMER SUPPORT</h3>
                    <ul className="mt-4">
                        <li>FAQs</li>
                        <li>Contact Customer Support</li>
                        <li>Shipping & Delivery</li>
                        <li>Return & Refund</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">SHOP</h3>
                    <ul className="mt-4">
                        <li>Rings</li>
                        <li>Earrings</li>
                        <li>Bracelets</li>
                        <li>Necklaces</li>
                        <li>Pendants</li>
                        <li>Brooches</li>
                        <li>Anklets</li>
                        <li>Cufflinks</li>
                        <li>Tie Clips</li>
                        <li>Charms</li>
                        <li>Body Jewelry (such as nose rings, belly button rings)</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
