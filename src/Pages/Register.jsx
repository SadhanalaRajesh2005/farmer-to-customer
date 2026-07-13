import './register.css'
function Register() {
  return (
    <div>
      <h2>Farmer Registration</h2>

      <input type="text" placeholder="Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Register</button>
    </div>
  )
}

export default Register;