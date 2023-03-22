import { Link } from "react-router-dom";
import { FooterStyled } from "./style";

export function Footer() {
    return (
        <FooterStyled className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <script>document.write(new Date().getFullYear())</script>2022 © Hyper - Coderthemes.com
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end footer-links d-none d-md-block">
                            <Link className="link" to="">About</Link>&nbsp;
                            <Link className="link" to="">Support</Link>&nbsp;
                            <Link className="link" to="">Contact Us</Link>&nbsp;
                            <a className="a" target="_blank" rel="noopener noreferrer"
                                href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-4/dashboard/ecommerce">Base</a>&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </FooterStyled>
    );
}