import React, { useState } from "react"

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    messageSubject: "collab",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const validateField = (field, value) => {
    let error = ""
    switch (field) {
      case "name":

      case "lastName":
        if (!value.trim()) {
          error = `${field === "name" ? "El nombre" : "Los apellidos"} son obligatorios`
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = `${field === "name" ? "El nombre" : "Los apellidos"} solo deben contener letras`
        }
        break

      case "email":
        if (!value.trim()) {
          error = "El correo electrónico es obligatorio"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Formato de correo inválido"
        }
        break

      case "phone":
        if (!value.trim()) {
          error = "El teléfono es obligatorio"
        } else if (!/^\d{9}$/.test(value)) {
          error = "El teléfono debe tener exactamente 9 números"
        }
        break

      case "message":
        if (!value.trim()) {
          error = "El mensaje es obligatorio"
        }
        break

      default:
        break
    }
    return error
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormValues({ ...formValues, [id]: value })

    setErrors({ ...errors, [id]: validateField(id, value) })
  }

  const isFormValid = Object.values(errors).every((error) => error === "") && Object.values(formValues).every((value) => value.trim() !== "")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      console.log("Formulario enviado:", formValues)
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Contactanos</h1>

          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            onBlur={handleInputChange}
            className={errors.name ? "error" : formValues.name ? "success" : ""}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="lastName">Apellidos</label>
          <input
            type="text"
            id="lastName"
            onBlur={handleInputChange}
            className={errors.lastName ? "error" : formValues.lastName ? "success" : ""}
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onBlur={handleInputChange}
            className={errors.email ? "error" : formValues.email ? "success" : ""}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            onBlur={handleInputChange}
            className={errors.phone ? "error" : formValues.phone ? "success" : ""}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}

          <label htmlFor="messageSubject">Motivo del mensaje</label>
          <select
            id="messageSubject"
            onBlur={handleInputChange}
            className="success"
          >
            <option value="collab">Colaboración</option>
            <option value="support">Soporte Técnico</option>
            <option value="suggestions">Sugerencias</option>
            <option value="other">Otro</option>
          </select>

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            rows="10"
            cols="50"
            onBlur={handleInputChange}
            className={errors.message ? "error" : formValues.message ? "success" : ""}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit" disabled={!isFormValid}>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Contact