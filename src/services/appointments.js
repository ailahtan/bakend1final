import Api from "./api";

const appointmentsService = {};

appointmentsService.getAppointments = () => {
    return Api.get("/turns/")
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.postAppointments = (data) => {
    console.log(data)
    return Api.post("/turns/registrar", data)
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.getAppointmentsById = (id) => {
    return Api.get(`/turns/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.updateAppointmentsById = (id) => {
    return Api.put(`/turns/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

appointmentsService.deleteAppointmentsById = (id) => {
    return Api.delete(`/turns/${id}`)
    .then(res => res.data)
    .catch(err => {throw err})
}

export default appointmentsService;