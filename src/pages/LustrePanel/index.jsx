import { Button,Flex,Input,Card,ConfigProvider,notification } from "antd"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { request } from "../../utils/request"

function LustrePanel(){
    const synlongRef = useRef(null)
    const {TextArea} = Input
    const navigate = useNavigate()
    const [value,setValue] = useState("")
    const [api, contextHolder] = notification.useNotification();

    async function checkDataFlow(){
      const file = synlongRef.current.resizableTextArea.textArea.value
      const body = {file:file}
      const res = await request.post('/lustre/check-dataflow',body)
      //success
      if(res.code===200){
        setValue(res.data.result)
      }
      else{
        setValue("")
        api.error({
          message: "验证结果",
          description: res.message,
          duration:5,
        });
      }
    }

    async function convertToJson(){
      const file = synlongRef.current.resizableTextArea.textArea.value
      const body = {file:file}
      const res = await request.post('/lustre/convert',body)
        //success
        if(res.code===200){
          setValue(res.data.jsonModel)
        }
        else{
          setValue("")
          api.error({
            message: "验证结果",
            description: res.message,
            duration:5,
          });
      }
    }
    return(
        <>
        {contextHolder}   
        <Button onClick={()=>{navigate('/editor')}}>返回</Button>
        <Flex style={{margin:'36px 120px'}} gap='large'>
        <Flex vertical style={{width:'50%'}} gap='middle'>
            <div>
                <Button style={{float:'left'}} size="large" onClick={convertToJson}>状态机验证</Button>
                <Button style={{float:'right'}} size="large" onClick={checkDataFlow}>数据流验证</Button>
            </div>
            <TextArea ref={synlongRef} style={{resize:'none',height:'600px'}} placeholder="在这里输入SynLong代码"></TextArea>
        </Flex>
        <ConfigProvider
            theme={{
                token: {
                    colorBorderSecondary:'#d9d9d9'
                },
            }}
        >
            <Card style={{width:'50%', whiteSpace:'pre-wrap'}} title="转化/验证结果">{value}</Card>
        </ConfigProvider>
        
        
        </Flex>
        </>

    
    )
}

export default LustrePanel