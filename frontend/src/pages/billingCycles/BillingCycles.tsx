import Content from "../../common/template/Content"
import ContentHeader from "../../common/template/ContentHeader"

import Tabs from "../../common/tab/Tabs"
import TabsHeader from "../../common/tab/TabsHeader"
import TabsContent from "../../common/tab/TabsContent"
import TabHeader from "../../common/tab/TabHeader"

const BillingCycles = (props: any) => {
    return (
        <>
            <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="Listar" icon="bars" target="#tabList" first/>
                        <TabHeader label="Incluir" icon="plus" target="#tabCreate" first={false}/>
                        <TabHeader label="Alterar" icon="edit" target="#tabUpdate" first={false}/>
                        <TabHeader label="Excluir" icon="trash" target="#tabDelete" first={false}/>
                    </TabsHeader>
                    <TabsContent>
                        
                    </TabsContent>
                </Tabs>
            </Content>
        </>
    )
}

export default BillingCycles