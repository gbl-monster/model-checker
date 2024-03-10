import { createSlice } from "@reduxjs/toolkit";

const modelStore = createSlice({
    name: "model",
    initialState: {
        declaration: "//Place global declarations here.",
        automations:[
            {
                name:"Template",
                parameters:[],
                locations:null,
                transitions:null,
                init:{
                    state:null,
                    id:0,
                    name:"",
                    invariant:{}
                },
                declaration:""
            }
        ],
        systemDeclaration:"// Place template instantiations here.\nProcess = Template();\n// List one or more processes to be composed into a system.\nsystem Process;"
    },
    reducers: {
        setDeclaration(state, action) {
            state.declaration = action.payload
        },
        setAutomationName(state, action){
            state.automations[0].name = action.payload
        },
        setSystemDeclaration(state, action){
            state.systemDeclaration = action.payload
        }
    }
})

//解构出actionCreater

const { setDeclaration,setAutomationName,setSystemDeclaration } = modelStore.actions

//获取reducer函数

const modelReducer = modelStore.reducer

export { setDeclaration,setAutomationName,setSystemDeclaration }

export default modelReducer