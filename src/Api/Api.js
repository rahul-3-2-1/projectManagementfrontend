export const Company={
    createCompnay:`${process.env.REACT_APP_ENDPOINT}/api/v1/company/registerCompany`
}

export const User={
    createUser:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/register`,
    login:`${process.env.REACT_APP_ENDPOINT}/api/v1/user/login`
}