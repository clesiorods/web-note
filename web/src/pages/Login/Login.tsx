import { Link } from "react-router-dom";
import { TelaLogin } from "./style";


export function Login() {
    return (
        <TelaLogin>
            <header>
                Imagem
                <h2 className="brand-text mb-0">Solutions</h2>
            </header>
            <div id="login_illustration">
                Imagem
            </div>
            <div id="login_form">
                <form id="form_login" action="" className="form">
                    <h2>Bem-Vindo ao <br /> Solutions <span style={{ fontSize: '22px' }}>👋</span></h2>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input placeholder="exemplo@exemplo.com" className="form-control" type="email" />
                    </div>
                    <div className="form-group">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="">Senha</label>
                            <span id="span_forget_password" >Esqueceu a sua senha?</span>
                        </div>
                        <input placeholder="senha" className="form-control" type="password" />
                    </div>
                    <div className="form-check mb-1 mt-2">
                        <input style={{ width: '18px', height: '18px', marginTop: '1px', marginRight: '6px' }} id="remember-me" type="checkbox" className="form-check-input" />
                        <label htmlFor="remember-me" className="form-check-label form-label">Lembrar minha senha</label>
                    </div>
                    <Link to="/resumo">
                        <button className="btn mt-3 w-100">Entrar</button>
                    </Link>
                </form>
            </div>
        </TelaLogin>
    );
}