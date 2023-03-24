import { BiCheckSquare, BiImageAlt, BiPaint, BiSearch } from "react-icons/bi";
import { Card } from "../../components/Card";
import { MainFrame } from "../../components/MainFrame";
import { InputNewNote, MainGrid } from "./style";

export function Home() {

    return (
        <MainFrame>

            <InputNewNote>
                <div id="div_search" style={{ justifyContent: 'space-between' }}>
                    <div id="input_wrapper" style={{width: '100%'}}>
                        <input id="input_search" placeholder="Criar uma nota..." type="text" />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className="div_search_icon">
                            <BiCheckSquare />
                        </div>
                        <div className="div_search_icon">
                            <BiPaint />
                        </div>
                        <div className="div_search_icon">
                            <BiImageAlt />
                        </div>
                    </div>
                </div>
            </InputNewNote>

            <MainGrid>
                <div className="col" id="col_1">
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                </div>

                <div className="col" id="col_2">
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                </div>

                <div className="col" id="col_3">
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                </div>

                <div className="col" id="col_4">
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card height={1} >
                        <div className="card-header">
                            <h4>Minhas Metas</h4>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                </div>

            </MainGrid>
        </MainFrame>
    );
}