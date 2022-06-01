import Content from "../../common/template/Content"
import ContentHeader from "../../common/template/ContentHeader"

import Tabs from "../../common/tab/Tabs"
import TabsHeader from "../../common/tab/TabsHeader"
import TabsContent from "../../common/tab/TabsContent"
import TabHeader from "../../common/tab/TabHeader"
import TabContent from "../../common/tab/TabContent"

const BillingCycles = (props: any) => {
    return (
        <>
            <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="Listar" icon="bars" target="tabList"/>
                        <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                        <TabHeader label="Alterar" icon="edit" target="tabUpdate"/>
                        <TabHeader label="Excluir" icon="trash" target="tabDelete"/>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            Abruebre
                        </TabContent>
                        <TabContent id="tabCreate">
                            Atumalaca
                        </TabContent>
                        <TabContent id="tabUpdate">
                            Damsa gatinho damsa
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </>
    )
}

export default BillingCycles