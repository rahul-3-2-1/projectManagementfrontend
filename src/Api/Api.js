export const Company={
    createCompnay:`${process.env.REACT_APP_ENDPOINT}/api/v1/company/registerCompany`
}

export const User={
    createUser:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/register`,
    login:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/login`,
    getAllUser:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/user/alluser/${id}`,
    verify:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/verify`,
    addUser:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/addUser`,
    uploadUser:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/uploadUser`,
    alterAdmin:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/user/alter/${id}`,
    deleteUser:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/user/delete/${id}`,
    resetPassword:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/user/resetPassword/${id}`,
    updateProfilePic:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/user/updateProfilePic/${id}`
}


export const Project={
    createProject:`${process.env.REACT_APP_ENDPOINT}/api/v1/project/add`,
    getProject:(id,dt=true)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/project/getProjects/${id}?members=${dt}`,
    getSingleProject:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/project/singleProject/${id}`,
    updateProject:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/project/updateProject/${id}`,
    deleteProject:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/project/deleteProject/${id}`,
    getProjectByUserId:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/project/getAllProjects/${id}`

}

export const Request={
    sendRequest:`${process.env.REACT_APP_ENDPOINT}/api/v1/request/newRequest`,
    getRequestByCompany:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/request/allRequest/${id}`,
    updateRequest:`${process.env.REACT_APP_ENDPOINT}/api/v1/request/update`,
    getHistoryByCompanyId:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/request/allRequest/${id}`,
    requestPerDay:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/request/getRequestMade/${id}`,
    requestByProjectId:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/request/getRequest/${id}`,
    requestByUserId:(id)=>`${process.env.REACT_APP_ENDPOINT}/api/v1/request/getRequestMadeByUser/${id}`

}