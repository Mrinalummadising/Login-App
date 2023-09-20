import './index.css'

const Login = props => {
  const {onchangeStatus} = props

  return (
    <button type="button" className="btn-login" onClick={onchangeStatus}>
      Logout
    </button>
  )
}

export default Login
