import Content from "../../common/template/Content"
import ContentHeader from "../../common/template/ContentHeader"

import Tabs from "../../common/tab/Tabs"
import TabsHeader from "../../common/tab/TabsHeader"
import TabsContent from "../../common/tab/TabsContent"
import TabHeader from "../../common/tab/TabHeader"
import TabContent from "../../common/tab/TabContent"

import { useDispatch, useSelector } from "react-redux"
import { State } from "../../store/storeConfig"
import * as tabActionCreators from '../../store/actionCreators/tabActions'
import { useEffect } from "react"
import { bindActionCreators } from "redux"

const BillingCycles = (props: any) => {
    const dispatch = useDispatch()
    const { selectTab, showTabs } = bindActionCreators(tabActionCreators, dispatch)
    const state = useSelector((state: State) => state.tab)

    useEffect(() => {
        selectTab('tabList')
        showTabs('tabList', 'tabCreate')
    }, [window.onload])

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