import Row from "../../common/layout/Row"
import Content from "../../common/template/Content"
import ContentHeader from "../../common/template/ContentHeader"

//widgets
import ValueBox from "../../common/widget/ValueBox"

const Dashboard = (props: any) => {
    return (
        <>
            <ContentHeader title="Dashboard" small="Versão 1.0"/>
            <Content>
                <Row>
                    <ValueBox color="green" cols="12 4" icon="university" value="R$ 10" text="Total de Créditos" />
                    <ValueBox color="red" cols="12 4" icon="credit-card" value="R$ 10" text="Total de Débitos" />
                    <ValueBox color="blue" cols="12 4" icon="money-bill" value="R$ 10" text="Valor Consolidado" />
                </Row>
            </Content>
        </>
    )
}

export default Dashboard