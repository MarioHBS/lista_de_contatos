class ContactModel {
  id: number
  name: string
  email: string
  phone: string

  constructor(id: number, _name: string, _email: string, _phone: string) {
    this.id = id
    this.name = _name
    this.email = _email
    this.phone = _phone
  }
}

export default ContactModel
