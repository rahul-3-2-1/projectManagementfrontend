export const Company={
    createCompnay:`${process.env.REACT_APP_ENDPOINT}/api/v1/company/registerCompany`
}

export const User={
    createUser:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/register`,
    login:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/login`,
    getAllUser:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/user/alluser/${id}`,
    verify:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/verify`
}


export const Project={
    createProject:`${process.env.REACT_APP_ENDPOINT}/api/v1/project/add`,
    getProject:(id,dt=true)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/project/getProjects/${id}?members=${dt}`,

}