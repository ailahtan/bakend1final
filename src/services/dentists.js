import Api from "./api";

const dentistsService = {};

dentistsService.getDentists = () => {
    return Api.get("/odontologos/") 
    .then(res => res.data)
    .catch(err => {throw err})
}

dentistsService.postDentists = (data) => {
    return Api.post("/odontologos/registrar", data)
    .then(res => res.data)
    .catch(err => {throw err})
}

dentistsService.getDentistsById = (id) => {
    return Api.get(`/odontologos/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

dentistsService.updateDentistsById = (id) => {
    return Api.put(`/odontologos/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

dentistsService.deleteDentistsById = (id) => {
    return Api.delete(`/odontologos/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

export default dentistsService;