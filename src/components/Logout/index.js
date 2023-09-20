import './index.css'

const Login = props => {
  const {onchangeStatus} = props

  return (
    <button type="button" className="btn-logout" onClick={onchangeStatus}>
      Login
    </button>
  )
}

export default Login
