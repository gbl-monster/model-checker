import { Layout, Button, theme, Input, Flex, notification } from 'antd';
import { useState } from 'react';
const {Sider, Content } = Layout

function VerifierPanel() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const {TextArea} = Input
    const [type,setType] = useState('property')
    const oTypeValue = {'property':'性质','note':'备注'}
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.success({
          message: "验证结果",
          description: "满足该性质",
          duration:0,
        });
      };
    return (
        <Layout style={{ padding: '12px' }}>
            {contextHolder}
            <span style={{ marginLeft: '12px' }}>性质列表</span>
            <Layout style={{ padding: '12px' }}>
                <TextArea style={{
                    resize:'none',
                    height: 200,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                </TextArea>
                <Sider theme='light' width='96px' style={{ margin: '20px' }}>
                    <Flex justify='center' vertical>
                        <Button onClick={openNotification}>开始验证</Button>
                        <Button>Get Trace</Button>
                        <Button>添加</Button>
                        <Button>删除</Button>
                        <Button onClick={()=>type==='property'?setType('note'):setType('property')}>{oTypeValue[type]}</Button>
                    </Flex>

                </Sider>
            </Layout>
            <span style={{ marginLeft: '12px' }}>待验证性质</span>
            <Layout style={{ padding: '12px', marginRight:'12px'}}>
                <TextArea style={{
                    resize:'none',
                    height: 150,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                </TextArea>
            </Layout>
            <span style={{ marginLeft: '12px' }}>备注</span>
            <Layout style={{ padding: '12px', marginRight:'12px' }}>
                <TextArea style={{
                    resize:'none',
                    height: 150,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                </TextArea>
            </Layout>
            {/* <span style={{ marginLeft: '12px' }}>验证进度与结果</span>
            <Layout style={{ padding: '12px' }}>
                <Content style={{
                    marginRight: 12,
                    padding: 24,
                    height: 100,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                </Content>
            </Layout> */}
        </Layout>
    )
}

export default VerifierPanel