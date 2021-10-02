import Api from "./api";

const patientService = {};

patientService.getPatients = () => {
    return Api.get("/pacientes/")
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.postPatients = (data) => {
    return Api.post("/pacientes/registrar", data)
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.getPatientsById = (id) => {
    return Api.get(`/pacientes/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.updatePatientsById = (id) => {
    return Api.put(`/pacientes/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

patientService.deletePatientsById = (id) => {
    return Api.delete(`/pacientes/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

export default patientService;